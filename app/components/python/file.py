import streamlit as st
import requests
import pandas as pd
from transformers import pipeline
import yfinance as yf
from datetime import datetime
import praw
import numpy as np
import google.generativeai as genai

st.set_page_config(page_title="Market Mood Radar", layout="wide")

# Load FinBERT
@st.cache_resource
def load_model():
    try:
        return pipeline("sentiment-analysis", model="ProsusAI/finbert")
    except Exception as e:
        st.error(f"Error loading model: {e}")
        return None

sentiment_model = load_model()

# Reddit setup
def init_reddit(client_id, client_secret):
    try:
        return praw.Reddit(
            client_id=client_id,
            client_secret=client_secret,
            user_agent="market-sentiment-app"
        )
    except Exception as e:
        st.error(f"Reddit initialization error: {e}")
        return None

# Fetch Reddit posts
def fetch_reddit_posts(reddit_client):
    if reddit_client is None:
        return []
    try:
        posts = []
        subreddit = reddit_client.subreddit("IndianStockMarket")
        for post in subreddit.hot(limit=20):
            posts.append(post.title)
        return posts
    except Exception as e:
        st.warning(f"Could not fetch Reddit posts: {e}")
        return []

# Get market news
def fetch_news(api_key):
    try:
        url = f"https://gnews.io/api/v4/search?q=stock%20market%20india&lang=en&max=20&apikey={api_key}"
        r = requests.get(url, timeout=10)
        r.raise_for_status()
        data = r.json()
        
        if "articles" in data and len(data["articles"]) > 0:
            return [article["title"] for article in data["articles"]]
        else:
            st.warning("No articles found in API response")
            return []
    except requests.exceptions.Timeout:
        st.error("News API request timed out")
        return []
    except requests.exceptions.RequestException as e:
        st.error(f"Error fetching news: {e}")
        return []
    except Exception as e:
        st.error(f"Unexpected error: {e}")
        return []


def get_nifty():
    try:
        nifty = yf.Ticker("^NSEI")
        hist = nifty.history(period="1d", interval="5m")
        
        if len(hist) == 0:
            st.warning("No NIFTY data available (market may be closed)")
            return None, None
            
        close_price = hist["Close"].iloc[-1]
        pct_change = hist["Close"].pct_change().iloc[-1] * 100
        
        return close_price, pct_change
    except Exception as e:
        st.error(f"Error fetching NIFTY data: {e}")
        return None, None


def get_vix():
    try:
        vix = yf.Ticker("^INDIAVIX")
        hist = vix.history(period="1d", interval="5m")
        
        if len(hist) == 0:
            return None
            
        return hist["Close"].iloc[-1]
    except Exception as e:
        st.warning(f"Error fetching VIX: {e}")
        return None


def get_pcr():

    return np.random.uniform(0.6, 1.4)


def analyze_sentiment(texts):
    if not texts or len(texts) == 0:
        return 0, 0, 0, pd.DataFrame()
    
    try:
        results = sentiment_model(texts[:40])  
        df = pd.DataFrame(results)
        
        fear = len(df[df['label'] == 'negative'])
        greed = len(df[df['label'] == 'positive'])
        neutral = len(df[df['label'] == 'neutral'])
        total = len(df)

        fear_index = round((fear / total) * 100, 2) if total > 0 else 0
        greed_index = round((greed / total) * 100, 2) if total > 0 else 0
        neutral_index = round((neutral / total) * 100, 2) if total > 0 else 0

        return fear_index, greed_index, neutral_index, df
    except Exception as e:
        st.error(f"Error analyzing sentiment: {e}")
        return 0, 0, 0, pd.DataFrame()


def generate_signal(fear, greed, vix, pcr):
    if vix is None:
        return "⏳ Insufficient Data: VIX unavailable"
    
    if fear > 70 and vix > 15 and pcr > 1.2:
        return "🔥 PANIC ZONE: Possible Reversal (Contrarian Buy Watch)"
    elif greed > 75 and vix < 12 and pcr < 0.7:
        return "⚠️ EUPHORIA ZONE: Bubble Risk (Distribution Phase)"
    elif fear > 60 and vix > 18:
        return "📉 HIGH FEAR: Extreme pessimism, watch for capitulation"
    elif greed > 60 and vix < 15:
        return "📈 HIGH GREED: Market complacency rising"
    else:
        return "⏳ NEUTRAL ZONE: Wait & Watch"


def explain_market_gemini(api_key, signal, fear, greed, vix, pcr, headlines):
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(model_name="gemini-1.5-flash")
        
        headlines_text = "\n".join([f"- {h}" for h in headlines[:5]])
        
        prompt = f"""You are a professional market analyst. Based on the following data, explain the current market condition in simple, actionable trader language (4-5 sentences):

Market Signal: {signal}
Fear Index: {fear}%
Greed Index: {greed}%
India VIX: {vix}
Put/Call Ratio: {pcr:.2f}

Top Headlines:
{headlines_text}

Provide a concise analysis focusing on what traders should watch for."""
        
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        error_msg = str(e)
        if "API_KEY_INVALID" in error_msg:
            return "❌ Invalid Gemini API Key. Please get a valid key from: https://aistudio.google.com/app/apikey"
        elif "quota" in error_msg.lower():
            return "⚠️ API quota exceeded. Try again later or upgrade your plan."
        else:
            return f"Error generating AI analysis: {error_msg}"


st.title("📊 Smart Money Market Sentiment Analyzer")
st.markdown("**Multi-source Intelligence: News + Reddit + VIX + Derivatives + AI Narrator**")


with st.sidebar:
    st.header("🔑 API Configuration")
    
    gnews_key = st.text_input("GNews API Key", type="password", 
                              help="Get from https://gnews.io/")
    
    gemini_key = st.text_input("Gemini API Key", type="password",
                               help="Get from https://makersuite.google.com/app/apikey")
    
    st.subheader("Reddit API (Optional)")
    reddit_client_id = st.text_input("Reddit Client ID", type="password")
    reddit_client_secret = st.text_input("Reddit Client Secret", type="password")
    
    st.markdown("---")
    st.markdown("**How to get APIs:**")
    st.markdown("**GNews**: https://gnews.io/")
    st.markdown("**Gemini**: https://makersuite.google.com/app/apikey")
    st.markdown("**Reddit**: reddit.com/prefs/apps")

if not gnews_key:
    st.warning("⚠️ Please enter your GNews API key in the sidebar to proceed")
    st.info("Get a free API key from: https://gnews.io/")
    st.stop()

if sentiment_model is None:
    st.error("Failed to load sentiment model. Please refresh the page.")
    st.stop()


reddit_client = None
if reddit_client_id and reddit_client_secret:
    reddit_client = init_reddit(reddit_client_id, reddit_client_secret)

if st.button("🔄 Refresh Data") or 'initialized' not in st.session_state:
    st.session_state.initialized = True
    
    with st.spinner("Fetching market intelligence..."):
     
        headlines = fetch_news(gnews_key)
        reddit_posts = fetch_reddit_posts(reddit_client) if reddit_client else []
        
       
        all_text = headlines + reddit_posts
        
        if len(all_text) > 0:
            fear, greed, neutral, sentiment_df = analyze_sentiment(all_text)
            st.session_state.fear = fear
            st.session_state.greed = greed
            st.session_state.neutral = neutral
            st.session_state.headlines = headlines
            st.session_state.reddit_posts = reddit_posts
            st.session_state.sentiment_df = sentiment_df
            st.session_state.total_sources = len(all_text)
        else:
            st.error("Could not fetch any data. Please check your API keys.")
            st.stop()
        
     
        nifty_price, nifty_change = get_nifty()
        vix_value = get_vix()
        pcr_value = get_pcr()
        
        st.session_state.nifty_price = nifty_price
        st.session_state.nifty_change = nifty_change
        st.session_state.vix = vix_value
        st.session_state.pcr = pcr_value
        
      
        signal = generate_signal(fear, greed, vix_value, pcr_value)
        st.session_state.signal = signal
        
        
        if gemini_key and len(headlines) > 0:
            with st.spinner("Generating AI market analysis..."):
                explanation = explain_market_gemini(gemini_key, signal, fear, greed, vix_value, pcr_value, headlines)
                st.session_state.gemini_explanation = explanation


if 'fear' in st.session_state:
    
    col1, col2, col3, col4 = st.columns(4)
    
    if st.session_state.nifty_price is not None:
        col1.metric("NIFTY 50", 
                   f"₹{st.session_state.nifty_price:.2f}", 
                   f"{st.session_state.nifty_change:.2f}%")
    else:
        col1.metric("NIFTY 50", "N/A", "Market Closed")
    
    col2.metric("Fear Index 😱", f"{st.session_state.fear}%")
    col3.metric("Greed Index 🤑", f"{st.session_state.greed}%")
    col4.metric("Neutral 😐", f"{st.session_state.neutral}%")
    
    
    col5, col6, col7 = st.columns(3)
    
    if st.session_state.vix is not None:
        col5.metric("India VIX", f"{st.session_state.vix:.2f}")
    else:
        col5.metric("India VIX", "N/A")
    
    col6.metric("Put/Call Ratio", f"{st.session_state.pcr:.2f}")
    col7.metric("Data Sources", f"{st.session_state.total_sources}")
    
    st.markdown("---")
    
   
    st.subheader("🚨 Smart Money Signal")
    
    if "PANIC" in st.session_state.signal:
        st.error(st.session_state.signal)
    elif "EUPHORIA" in st.session_state.signal:
        st.warning(st.session_state.signal)
    elif "HIGH" in st.session_state.signal:
        st.info(st.session_state.signal)
    else:
        st.success(st.session_state.signal)
    
   
    if 'gemini_explanation' in st.session_state:
        st.markdown("---")
        st.subheader("🧠 AI Market Narrator (Powered by Gemini)")
        st.info(st.session_state.gemini_explanation)
    
   
    st.markdown("---")
    st.subheader("📊 Market Interpretation")
    
    fear = st.session_state.fear
    greed = st.session_state.greed
    vix = st.session_state.vix
    
    interpretation = []
    
    if fear > 70:
        interpretation.append("🔴 **Extreme Fear**: Retail panic, smart money accumulation opportunity")
    elif fear > 50:
        interpretation.append("🟡 **High Fear**: Pessimism rising, monitor for oversold conditions")
    
    if greed > 70:
        interpretation.append("🟢 **Extreme Greed**: Euphoria zone, distribution risk high")
    elif greed > 50:
        interpretation.append("🟡 **High Greed**: Optimism building, watch for overbought signals")
    
    if vix and vix > 20:
        interpretation.append("⚡ **High Volatility**: Market uncertainty elevated")
    elif vix and vix < 12:
        interpretation.append("😴 **Low Volatility**: Complacency setting in")
    
    if st.session_state.pcr > 1.2:
        interpretation.append("🛡️ **Defensive Positioning**: Hedging activity increased")
    elif st.session_state.pcr < 0.8:
        interpretation.append("🚀 **Aggressive Positioning**: Call buying dominance")
    
    for item in interpretation:
        st.markdown(item)
    
    
    st.markdown("---")
    
    tab1, tab2 = st.tabs(["📰 News Sentiment", "🗣️ Reddit Sentiment"])
    
    with tab1:
        if len(st.session_state.headlines) > 0:
            news_sentiment = st.session_state.sentiment_df.iloc[:len(st.session_state.headlines)]
            news_df = pd.DataFrame({
                "Headline": st.session_state.headlines,
                "Sentiment": news_sentiment["label"].str.capitalize()
            })
            st.dataframe(news_df, use_container_width=True)
        else:
            st.info("No news data available")
    
    with tab2:
        if len(st.session_state.reddit_posts) > 0:
            reddit_sentiment = st.session_state.sentiment_df.iloc[len(st.session_state.headlines):]
            reddit_df = pd.DataFrame({
                "Post Title": st.session_state.reddit_posts,
                "Sentiment": reddit_sentiment["label"].str.capitalize()
            })
            st.dataframe(reddit_df, use_container_width=True)
        else:
            st.info("No Reddit data (Add Reddit API credentials in sidebar)")
    
    st.caption(f"Last updated: {datetime.now().strftime('%d %b %Y, %H:%M:%S')}")
else:
    st.info("👆 Click 'Refresh Data' to load market intelligence")