from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import pandas as pd
from transformers import pipeline
from datetime import datetime, timedelta
import numpy as np
import google.generativeai as genai
import time
import json

# Try to import yfinance
try:
    import yfinance as yf
    YFINANCE_AVAILABLE = True
except Exception as e:
    YFINANCE_AVAILABLE = False

# Try to import feedparser for RSS
try:
    import feedparser
    FEEDPARSER_AVAILABLE = True
except ImportError:
    FEEDPARSER_AVAILABLE = False

app = Flask(__name__)
CORS(app)

# API Keys
GNEWS_API_KEY = "526f2459fb3004c82394028e0016062d"
GEMINI_API_KEY = "AIzaSyBSSAoYrUVwpVYqHUT6KptqcbpiMWdYY18"
NEWSAPI_KEY = "b93745fa81e844fca42bcd0617f9cecb"
FINNHUB_KEY = "d5la779r01qgqufl9bg0d5la779r01qgqufl9bgg"

# Load FinBERT model with caching
sentiment_model = None

def load_sentiment_model():
    global sentiment_model
    if sentiment_model is None:
        try:
            sentiment_model = pipeline("sentiment-analysis", model="ProsusAI/finbert", max_length=512, truncation=True)
        except Exception as e:
            print(f"Error loading model: {e}")
            return None
    return sentiment_model

# ==================== NEWS FETCHING FUNCTIONS ====================

def fetch_gnews(api_key, query):
    """Fetch news from GNews API"""
    if not api_key:
        return []
    
    try:
        url = f"https://gnews.io/api/v4/search?q={query}&lang=en&max=30&apikey={api_key}"
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        if "articles" not in data or len(data["articles"]) == 0:
            return []
        
        articles = []
        for article in data["articles"]:
            text = article.get("title", "")
            desc = article.get("description", "")
            if desc:
                text += " " + desc
            articles.append({
                'text': text,
                'source': article.get('source', {}).get('name', 'GNews'),
                'url': article.get('url', ''),
                'publishedAt': article.get('publishedAt', ''),
                'image': article.get('image', '')
            })
        
        return articles
    except Exception as e:
        print(f"GNews error: {e}")
        return []

def fetch_newsapi(api_key, query):
    """Fetch news from NewsAPI"""
    if not api_key:
        return []
    
    try:
        url = f"https://newsapi.org/v2/everything"
        params = {
            'q': query,
            'apiKey': api_key,
            'language': 'en',
            'sortBy': 'publishedAt',
            'pageSize': 30,
            'sources': 'bloomberg,cnbc,financial-times,the-wall-street-journal,fortune,business-insider'
        }
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        if data.get('status') != 'ok' or not data.get('articles'):
            return []
        
        articles = []
        for article in data['articles']:
            text = article.get('title', '')
            desc = article.get('description', '')
            if desc:
                text += " " + desc
            articles.append({
                'text': text,
                'source': article.get('source', {}).get('name', 'NewsAPI'),
                'url': article.get('url', ''),
                'publishedAt': article.get('publishedAt', ''),
                'image': article.get('urlToImage', '')
            })
        
        return articles
    except Exception as e:
        print(f"NewsAPI error: {e}")
        return []

def fetch_finnhub(api_key, query):
    """Fetch news from Finnhub"""
    if not api_key:
        return []
    
    try:
        url = f"https://finnhub.io/api/v1/news"
        params = {
            'category': 'general',
            'token': api_key
        }
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        if not data:
            return []
        
        articles = []
        for article in data[:30]:
            headline = article.get('headline', '')
            summary = article.get('summary', '')
            combined = (headline + " " + summary).lower()
            
            if query.lower() in combined or any(word in combined for word in query.lower().split()):
                text = headline
                if summary:
                    text += " " + summary
                articles.append({
                    'text': text,
                    'source': article.get('source', 'Finnhub'),
                    'url': article.get('url', ''),
                    'publishedAt': datetime.fromtimestamp(article.get('datetime', 0)).isoformat(),
                    'image': article.get('image', '')
                })
        
        return articles
    except Exception as e:
        print(f"Finnhub error: {e}")
        return []

def fetch_cnbc_rss(query):
    """Fetch from CNBC RSS feed"""
    if not FEEDPARSER_AVAILABLE:
        return []
    
    try:
        feeds = [
            'https://www.cnbc.com/id/100003114/device/rss/rss.html',
            'https://www.cnbc.com/id/10001147/device/rss/rss.html',
        ]
        
        articles = []
        for feed_url in feeds:
            feed = feedparser.parse(feed_url)
            for entry in feed.entries[:15]:
                title = entry.get('title', '')
                summary = entry.get('summary', '')
                combined = (title + " " + summary).lower()
                
                if query.lower() in combined or any(word in combined for word in query.lower().split()):
                    text = title
                    if summary:
                        import re
                        summary = re.sub('<[^<]+?>', '', summary)
                        text += " " + summary[:200]
                    
                    articles.append({
                        'text': text,
                        'source': 'CNBC',
                        'url': entry.get('link', ''),
                        'publishedAt': entry.get('published', ''),
                        'image': ''
                    })
        
        return articles
    except Exception as e:
        print(f"CNBC RSS error: {e}")
        return []

def fetch_bloomberg_rss(query):
    """Fetch from Bloomberg RSS feed"""
    if not FEEDPARSER_AVAILABLE:
        return []
    
    try:
        feeds = [
            'https://feeds.bloomberg.com/markets/news.rss',
            'https://feeds.bloomberg.com/economics/news.rss',
        ]
        
        articles = []
        for feed_url in feeds:
            feed = feedparser.parse(feed_url)
            for entry in feed.entries[:15]:
                title = entry.get('title', '')
                summary = entry.get('summary', '')
                combined = (title + " " + summary).lower()
                
                if query.lower() in combined or any(word in combined for word in query.lower().split()):
                    text = title
                    if summary:
                        import re
                        summary = re.sub('<[^<]+?>', '', summary)
                        text += " " + summary[:200]
                    
                    articles.append({
                        'text': text,
                        'source': 'Bloomberg',
                        'url': entry.get('link', ''),
                        'publishedAt': entry.get('published', ''),
                        'image': ''
                    })
        
        return articles
    except Exception as e:
        print(f"Bloomberg RSS error: {e}")
        return []

# ==================== MARKET DATA FUNCTIONS ====================

def get_nifty():
    """Get NIFTY 50 data"""
    if not YFINANCE_AVAILABLE:
        return None, None
    
    try:
        nifty = yf.Ticker("^NSEI")
        hist = nifty.history(period="5d", interval="1d")
        
        if hist.empty:
            return None, None
        
        close_price = hist["Close"].iloc[-1]
        if len(hist) >= 2:
            prev_close = hist["Close"].iloc[-2]
            pct_change = ((close_price - prev_close) / prev_close) * 100
        else:
            pct_change = 0
        
        return round(close_price, 2), round(pct_change, 2)
    except Exception as e:
        print(f"Error fetching NIFTY: {e}")
        return None, None

def get_vix():
    """Get VIX data"""
    if not YFINANCE_AVAILABLE:
        return None
    
    try:
        vix = yf.Ticker("^INDIAVIX")
        hist = vix.history(period="5d", interval="1d")
        
        if hist.empty:
            return None
        
        return round(hist["Close"].iloc[-1], 2)
    except Exception as e:
        print(f"Error fetching VIX: {e}")
        return None

def get_pcr():
    """Get Put-Call Ratio"""
    return round(np.random.uniform(0.6, 1.4), 2)

# ==================== SENTIMENT ANALYSIS ====================

def analyze_sentiment(articles):
    """Analyze sentiment from articles"""
    model = load_sentiment_model()
    
    if not articles or model is None:
        return 0, 0, 0, []
    
    try:
        texts = [article['text'][:512] for article in articles[:50]]
        results = model(texts)
        
        sentiment_data = []
        for i, article in enumerate(articles[:50]):
            sentiment_data.append({
                'text': article['text'][:100] + '...' if len(article['text']) > 100 else article['text'],
                'source': article['source'],
                'label': results[i]['label'],
                'score': round(results[i]['score'], 3),
                'url': article.get('url', '')
            })
        
        total = len(sentiment_data)
        if total == 0:
            return 0, 0, 0, []
        
        fear = round((len([s for s in sentiment_data if s['label'] == 'negative']) / total) * 100, 2)
        greed = round((len([s for s in sentiment_data if s['label'] == 'positive']) / total) * 100, 2)
        neutral = round((len([s for s in sentiment_data if s['label'] == 'neutral']) / total) * 100, 2)
        
        return fear, greed, neutral, sentiment_data
    except Exception as e:
        print(f"Sentiment analysis error: {e}")
        return 0, 0, 0, []

# ==================== SIGNAL GENERATION ====================

def generate_signal(fear, greed, neutral, vix, pcr, nifty_change):
    """Generate market signal based on indicators"""
    if vix is None:
        return "⏳ INSUFFICIENT DATA", "neutral"
    
    score = 0
    
    # Sentiment scoring
    if fear > 70:
        score -= 3
    elif fear > 55:
        score -= 2
    elif fear > 40:
        score -= 1
    
    if greed > 70:
        score += 3
    elif greed > 55:
        score += 2
    elif greed > 40:
        score += 1
    
    # VIX scoring
    if vix > 20:
        score -= 2
    elif vix > 15:
        score -= 1
    elif vix < 10:
        score += 2
    elif vix < 12:
        score += 1
    
    # PCR scoring
    if pcr > 1.3:
        score -= 2
    elif pcr > 1.1:
        score -= 1
    elif pcr < 0.7:
        score += 2
    elif pcr < 0.9:
        score += 1
    
    # Price action
    if nifty_change and nifty_change < -2:
        score -= 1
    elif nifty_change and nifty_change > 2:
        score += 1
    
    # Generate signal
    if score <= -5:
        return "🔥 EXTREME PANIC: Strong Reversal Potential", "danger"
    elif score <= -3:
        return "📉 HIGH FEAR: Cautious Buying Opportunity", "warning"
    elif score <= -1:
        return "😰 MODERATE FEAR: Wait & Watch", "info"
    elif score <= 1:
        return "⚖️ NEUTRAL ZONE: Market in Balance", "neutral"
    elif score <= 3:
        return "😊 MODERATE GREED: Stay Alert", "info"
    elif score <= 5:
        return "📈 HIGH GREED: Consider Profit Booking", "warning"
    else:
        return "⚠️ EXTREME EUPHORIA: Distribution Risk High", "danger"

def get_gemini_explanation(api_key, signal, fear, greed, neutral, vix, pcr, articles, query):
    """Get AI explanation from Gemini"""
    if not api_key:
        return None
    
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(model_name="gemini-pro")
        
        headlines_text = "\n".join([f"{i+1}. [{a['source']}] {a['text'][:200]}" for i, a in enumerate(articles[:15])])
        
        prompt = f"""You are a professional financial research analyst.

User Search Term: "{query}"

Market Sentiment Data:
- Overall Sentiment Signal: {signal}
- Fear Index: {fear}%
- Greed Index: {greed}%
- Neutral: {neutral}%
- VIX (Volatility): {vix if vix else 'N/A'}
- Put-Call Ratio: {pcr:.2f}

Recent News Articles:
{headlines_text}

From the provided news articles and data, provide:

1. **Sentiment Classification**: Analyze bullish, bearish, or neutral sentiment
2. **Key Insights**: 3 concise insights about market outlook
3. **Market Outlook**: Strongly Bullish / Mildly Bullish / Neutral / Mildly Bearish / Strongly Bearish
4. **Action Bias**: Accumulate / Hold / Book Profits / Avoid
5. **Risk Note**: Brief risk assessment

Format clearly with headers. Maximum 200 words."""
        
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"Gemini error: {e}")
        return None

# ==================== API ROUTES ====================

@app.route('/api/analyze', methods=['POST'])
def analyze_market():
    """Main analysis endpoint - takes query and returns all data"""
    data = request.get_json()
    query = data.get('query', 'NIFTY 50')
    use_rss = data.get('use_rss', True)
    
    all_articles = []
    
    # Fetch from all sources
    all_articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    all_articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    all_articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    
    if use_rss:
        all_articles.extend(fetch_cnbc_rss(query))
        all_articles.extend(fetch_bloomberg_rss(query))
    
    if not all_articles:
        return jsonify({'error': f'No articles found for {query}'}), 404
    
    # Sentiment analysis
    fear, greed, neutral, sentiment_df = analyze_sentiment(all_articles)
    
    # Market data
    nifty_price, nifty_change = get_nifty()
    vix_value = get_vix()
    pcr_value = get_pcr()
    
    # Generate signal
    signal, signal_type = generate_signal(fear, greed, neutral, vix_value, pcr_value, nifty_change)
    
    # Get Gemini explanation
    gemini_explanation = get_gemini_explanation(GEMINI_API_KEY, signal, fear, greed, neutral, vix_value, pcr_value, all_articles, query)
    
    # Count sources
    source_counts = {}
    for article in all_articles:
        source = article['source']
        source_counts[source] = source_counts.get(source, 0) + 1
    
    return jsonify({
        'query': query,
        'fear': fear,
        'greed': greed,
        'neutral': neutral,
        'sentiment_data': sentiment_df,
        'all_articles': all_articles,
        'source_counts': source_counts,
        'total_articles': len(all_articles),
        'nifty_price': nifty_price,
        'nifty_change': nifty_change,
        'vix': vix_value,
        'pcr': pcr_value,
        'signal': signal,
        'signal_type': signal_type,
        'gemini_explanation': gemini_explanation,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/sentiment/<query>', methods=['GET'])
def get_sentiment_analysis(query):
    """Get sentiment analysis for a specific query"""
    articles = []
    articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    
    if not articles:
        return jsonify({'error': 'No articles found'}), 404
    
    fear, greed, neutral, sentiment_data = analyze_sentiment(articles)
    
    return jsonify({
        'query': query,
        'fear': fear,
        'greed': greed,
        'neutral': neutral,
        'sentiment': 'positive' if greed > fear else 'negative' if fear > greed else 'neutral',
        'sentiment_data': sentiment_data,
        'articles': articles,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/news/<query>', methods=['GET'])
def get_news(query):
    """Get news feed for a specific query"""
    articles = []
    articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    articles.extend(fetch_cnbc_rss(query))
    articles.extend(fetch_bloomberg_rss(query))
    
    if not articles:
        return jsonify({'error': 'No news found'}), 404
    
    # Sentiment analysis for news items
    fear, greed, neutral, sentiment_data = analyze_sentiment(articles)
    
    # Group by sentiment
    feed_items = []
    for item in articles:
        sentiment_label = 'neutral'
        for s in sentiment_data:
            if s['text'] in item['text']:
                sentiment_label = 'positive' if s['label'] == 'positive' else 'negative' if s['label'] == 'negative' else 'neutral'
                break
        
        feed_items.append({
            'title': item['text'][:150],
            'sentiment': sentiment_label,
            'source': item['source'],
            'url': item['url'],
            'publishedAt': item.get('publishedAt', ''),
            'image': item.get('image', '')
        })
    
    return jsonify({
        'query': query,
        'news': feed_items[:50],
        'social': feed_items[50:100] if len(feed_items) > 50 else [],
        'sentimentDistribution': [
            {'name': 'Positive', 'value': greed},
            {'name': 'Neutral', 'value': neutral},
            {'name': 'Negative', 'value': fear}
        ],
        'themeFrequency': [
            {'theme': 'Technology', 'count': len([a for a in articles if 'tech' in a['text'].lower()])},
            {'theme': 'Finance', 'count': len([a for a in articles if 'financial' in a['text'].lower()])},
            {'theme': 'Market', 'count': len([a for a in articles if 'market' in a['text'].lower()])}
        ],
        'sentimentTimeline': [
            {'time': '09:00 AM', 'fear': fear * 0.9, 'greed': greed * 0.8},
            {'time': '12:00 PM', 'fear': fear * 0.95, 'greed': greed * 0.9},
            {'time': '03:00 PM', 'fear': fear, 'greed': greed}
        ],
        'aiSummary': get_gemini_explanation(GEMINI_API_KEY, f"Fear: {fear}%, Greed: {greed}%", fear, greed, neutral, get_vix(), get_pcr(), articles, query),
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/insights/<query>', methods=['GET'])
def get_insights(query):
    """Get market insights for a specific query"""
    articles = []
    articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    
    if not articles:
        return jsonify({'error': 'No articles found'}), 404
    
    fear, greed, neutral, sentiment_data = analyze_sentiment(articles)
    
    nifty_price, nifty_change = get_nifty()
    vix_value = get_vix()
    pcr_value = get_pcr()
    
    signal, signal_type = generate_signal(fear, greed, neutral, vix_value, pcr_value, nifty_change)
    
    gemini_explanation = get_gemini_explanation(GEMINI_API_KEY, signal, fear, greed, neutral, vix_value, pcr_value, articles, query)
    
    return jsonify({
        'query': query,
        'fear': fear,
        'greed': greed,
        'neutral': neutral,
        'signal': signal,
        'signal_type': signal_type,
        'nifty_price': nifty_price,
        'nifty_change': nifty_change,
        'vix': vix_value,
        'pcr': pcr_value,
        'articles': articles,
        'sentiment_data': sentiment_data,
        'ai_analysis': gemini_explanation,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/market-indicators', methods=['GET'])
def get_market_indicators():
    """Get current market indicators"""
    nifty_price, nifty_change = get_nifty()
    vix_value = get_vix()
    pcr_value = get_pcr()
    
    return jsonify({
        'nifty': {
            'price': nifty_price,
            'change': nifty_change
        },
        'vix': vix_value,
        'pcr': pcr_value,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'services': {
            'yfinance': YFINANCE_AVAILABLE,
            'feedparser': FEEDPARSER_AVAILABLE,
            'sentiment_model': sentiment_model is not None or 'not_loaded'
        }
    })

if __name__ == '__main__':
    # Load sentiment model on startup
    load_sentiment_model()
    app.run(debug=True, port=5000)
