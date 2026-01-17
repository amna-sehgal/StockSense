# 🔗 Complete Code Connections Reference

## Search Page → Backend → Insights Flow

### 1️⃣ SEARCH PAGE (`app/components/StockSearchPage/search.tsx`)

**User enters stock symbol:**
```tsx
<motion.input
  type="text"
  placeholder="Search stocks..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyPress={(e) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  }}
/>
```

**Search handler sends to backend:**
```tsx
const handleSearch = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Save to localStorage
  localStorage.setItem('lastSearchQuery', searchQuery)
  
  // Send to backend
  const response = await fetch('http://localhost:5000/api/analyze', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: searchQuery,
      use_rss: true
    })
  })
  
  // Save response
  const analysisData = await response.json()
  localStorage.setItem('lastAnalysis', JSON.stringify(analysisData))
  
  // Navigate
  router.push('/insights')
}
```

**Stock card click handler:**
```tsx
const handleStockClick = (stock: any) => {
  localStorage.setItem('lastSearchQuery', stock.symbol)
  router.push('/insights')
}
```

---

### 2️⃣ BACKEND API (`api.py`)

**POST /api/analyze endpoint:**
```python
@app.route('/api/analyze', methods=['POST'])
def analyze_market():
    data = request.get_json()
    query = data.get('query', 'NIFTY 50')
    use_rss = data.get('use_rss', True)
    
    # Fetch from all sources
    all_articles = []
    all_articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    all_articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    all_articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    
    if use_rss:
        all_articles.extend(fetch_cnbc_rss(query))
        all_articles.extend(fetch_bloomberg_rss(query))
    
    # Sentiment analysis
    fear, greed, neutral, sentiment_df = analyze_sentiment(all_articles)
    
    # Market data
    nifty_price, nifty_change = get_nifty()
    vix_value = get_vix()
    pcr_value = get_pcr()
    
    # Generate signal
    signal, signal_type = generate_signal(fear, greed, neutral, vix_value, pcr_value, nifty_change)
    
    # AI analysis
    gemini_explanation = get_gemini_explanation(...)
    
    # Return response
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
```

---

### 3️⃣ INSIGHTS PAGE (`app/insights/page.tsx`)

**Fetch on page load:**
```tsx
useEffect(() => {
  const fetchInsightsData = async () => {
    try {
      // Get query from localStorage
      const lastQuery = localStorage.getItem('lastSearchQuery') || 'NIFTY 50'
      
      // Fetch from backend
      const response = await fetch(
        `http://localhost:5000/api/insights/${encodeURIComponent(lastQuery)}`
      )
      
      const insightsData = await response.json()
      
      // Set state
      setData({
        query: insightsData.query,
        fear: insightsData.fear,
        greed: insightsData.greed,
        neutral: insightsData.neutral,
        nifty_price: insightsData.nifty_price,
        nifty_change: insightsData.nifty_change,
        signal: insightsData.signal,
        all_articles: insightsData.articles
      })
    } catch (error) {
      // Fallback to localStorage
      const savedData = JSON.parse(localStorage.getItem('lastAnalysis') || '{}')
      setData(savedData)
    }
  }
  
  fetchInsightsData()
}, [])

// Display component
return (
  <InsightsSummary
    query={data.query}
    fear={data.fear}
    greed={data.greed}
    neutral={data.neutral}
    nifty_price={data.nifty_price}
    nifty_change={data.nifty_change}
    signal={data.signal}
    all_articles={data.all_articles}
  />
)
```

**Backend endpoint (called by insights page):**
```python
@app.route('/api/insights/<query>', methods=['GET'])
def get_insights(query):
    articles = []
    articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    
    fear, greed, neutral, sentiment_data = analyze_sentiment(articles)
    
    nifty_price, nifty_change = get_nifty()
    vix_value = get_vix()
    pcr_value = get_pcr()
    
    signal, signal_type = generate_signal(fear, greed, neutral, vix_value, pcr_value, nifty_change)
    
    gemini_explanation = get_gemini_explanation(...)
    
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
```

---

### 4️⃣ SENTIMENT PAGE (`app/sentiment/page.tsx`)

**Fetch sentiment data:**
```tsx
useEffect(() => {
  const fetchSentimentData = async () => {
    try {
      const lastQuery = localStorage.getItem('lastSearchQuery') || 'NIFTY 50'
      
      const response = await fetch(
        `http://localhost:5000/api/sentiment/${encodeURIComponent(lastQuery)}`
      )
      
      const data = await response.json()
      
      setFear(data.fear)
      setGreed(data.greed)
      
      // Determine sentiment
      let determinedSentiment: "positive" | "neutral" | "negative"
      if (data.greed > data.fear) {
        determinedSentiment = "positive"
      } else if (data.fear > data.greed) {
        determinedSentiment = "negative"
      } else {
        determinedSentiment = "neutral"
      }
      
      setSentiment(determinedSentiment)
    } catch (error) {
      // Fallback
      setSentiment("neutral")
    }
  }
  
  fetchSentimentData()
}, [])

return <SentiAnalysis sentiment={sentiment} />
```

**Backend endpoint:**
```python
@app.route('/api/sentiment/<query>', methods=['GET'])
def get_sentiment_analysis(query):
    articles = []
    articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    
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
```

---

### 5️⃣ NEWS PAGE (`app/components/news/newsFeed.tsx`)

**Fetch news data:**
```tsx
useEffect(() => {
  const fetchNewsFeed = async () => {
    try {
      const lastQuery = localStorage.getItem('lastSearchQuery') || 'NIFTY 50'
      
      const response = await fetch(
        `http://localhost:5000/api/news/${encodeURIComponent(lastQuery)}`
      )
      
      const data = await response.json()
      
      // Convert to FeedItem format
      const newsItems = data.news.map((article) => ({
        title: article.title,
        sentiment: article.sentiment,
        source: article.source,
        time: new Date(article.publishedAt).toLocaleTimeString(),
        image: article.image || defaultImage,
        theme: "Market News",
        impact: article.sentiment === "positive" ? "high" : "high"
      }))
      
      setFeed(activeTab === "news" ? newsItems : [])
      setSentimentStats(data.sentimentDistribution)
      setThemeStats(data.themeFrequency)
      setTimeline(data.sentimentTimeline)
      setAiSummary(data.aiSummary)
    } catch (error) {
      // Fallback to demo data
      setFeed(demoNews)
    }
  }
  
  fetchNewsFeed()
}, [activeTab])
```

**Backend endpoint:**
```python
@app.route('/api/news/<query>', methods=['GET'])
def get_news(query):
    articles = []
    articles.extend(fetch_gnews(GNEWS_API_KEY, query))
    articles.extend(fetch_newsapi(NEWSAPI_KEY, query))
    articles.extend(fetch_finnhub(FINNHUB_KEY, query))
    articles.extend(fetch_cnbc_rss(query))
    articles.extend(fetch_bloomberg_rss(query))
    
    fear, greed, neutral, sentiment_data = analyze_sentiment(articles)
    
    # Group by sentiment
    feed_items = [
        {
            'title': item['text'][:150],
            'sentiment': sentiment_label,
            'source': item['source'],
            'url': item['url'],
            'image': item.get('image', '')
        }
        for item in articles
    ]
    
    return jsonify({
        'query': query,
        'news': feed_items[:50],
        'social': feed_items[50:100],
        'sentimentDistribution': [
            {'name': 'Positive', 'value': greed},
            {'name': 'Neutral', 'value': neutral},
            {'name': 'Negative', 'value': fear}
        ],
        'themeFrequency': [
            {'theme': 'Technology', 'count': tech_count},
            {'theme': 'Finance', 'count': finance_count},
            {'theme': 'Market', 'count': market_count}
        ],
        'sentimentTimeline': [
            {'time': '09:00 AM', 'fear': fear * 0.9, 'greed': greed * 0.8},
            {'time': '12:00 PM', 'fear': fear * 0.95, 'greed': greed * 0.9},
            {'time': '03:00 PM', 'fear': fear, 'greed': greed}
        ],
        'aiSummary': get_gemini_explanation(...),
        'timestamp': datetime.now().isoformat()
    })
```

---

## 📊 Data Flow Summary

```
┌─────────────────────────────────────────┐
│  Search Page                            │
│  User: "RELIANCE"                       │
└────────────┬────────────────────────────┘
             │
             ├─→ localStorage['lastSearchQuery'] = "RELIANCE"
             │
             ▼
┌─────────────────────────────────────────┐
│  POST /api/analyze                      │
│  { query: "RELIANCE", use_rss: true }   │
└────────────┬────────────────────────────┘
             │
             ├─→ Fetch from 5 news sources (150+ articles)
             ├─→ Analyze sentiment (FinBERT)
             ├─→ Get market data (NIFTY, VIX)
             ├─→ Generate signal
             ├─→ Get AI insights (Gemini)
             │
             ▼
┌─────────────────────────────────────────┐
│  Response JSON                          │
│  { fear, greed, signal, articles... }   │
└────────────┬────────────────────────────┘
             │
             ├─→ localStorage['lastAnalysis'] = response
             │
             ▼
┌─────────────────────────────────────────┐
│  Redirect to /insights                  │
└────────────┬────────────────────────────┘
             │
             ├─→ GET /api/insights/RELIANCE
             ├─→ GET /api/sentiment/RELIANCE (sentiment page)
             ├─→ GET /api/news/RELIANCE (news page)
             │
             ▼
┌─────────────────────────────────────────┐
│  Display Results                        │
│  - Fear/Greed percentages               │
│  - Market signal                        │
│  - All articles with sentiment          │
│  - Charts and timeline                  │
│  - AI analysis                          │
└─────────────────────────────────────────┘
```

---

## 🔄 LocalStorage Data Management

```javascript
// After search
localStorage.setItem('lastSearchQuery', 'RELIANCE')
localStorage.setItem('lastAnalysis', JSON.stringify({
  query: 'RELIANCE',
  fear: 35.2,
  greed: 58.1,
  neutral: 6.7,
  signal: '📈 HIGH GREED: Consider Profit Booking',
  signal_type: 'warning',
  nifty_price: 18650.45,
  nifty_change: 0.85,
  vix: 14.3,
  pcr: 0.95,
  all_articles: [...],
  sentiment_data: [...],
  gemini_explanation: '...',
  timestamp: '2026-01-17T10:30:00'
}))

// Used by all pages
const query = localStorage.getItem('lastSearchQuery')
const analysis = JSON.parse(localStorage.getItem('lastAnalysis'))
```

---

## ✅ Complete Data Pipeline

```
Input: "RELIANCE"
  ↓
Search Page Handler
  ├─→ POST /api/analyze
  ├─→ Save response to localStorage
  └─→ Redirect to /insights
  ↓
Insights Page
  ├─→ Read lastSearchQuery from localStorage
  ├─→ GET /api/insights/RELIANCE
  ├─→ Display all metrics
  └─→ Links to Sentiment & News pages
  ↓
Sentiment Page
  ├─→ Read lastSearchQuery from localStorage
  ├─→ GET /api/sentiment/RELIANCE
  ├─→ Calculate sentiment (positive/negative/neutral)
  └─→ Display gauge
  ↓
News Page
  ├─→ Read lastSearchQuery from localStorage
  ├─→ GET /api/news/RELIANCE
  ├─→ Display feed with charts
  └─→ Show AI summary
```

---

## 🎯 Key Integration Points

1. **Search Input** → localStorage → API call
2. **API Response** → localStorage → Redirect
3. **Page Load** → Read localStorage → Fetch specific endpoint
4. **Error** → Use localStorage cache → Show fallback
5. **No Cache** → Show demo data

---

## 📝 Code Snippets by Use Case

### Fetch with fallback:
```tsx
try {
  const response = await fetch(url)
  const data = await response.json()
  setData(data)
} catch (error) {
  const cached = JSON.parse(localStorage.getItem('lastAnalysis') || '{}')
  setData(cached)
}
```

### Read from localStorage:
```tsx
const query = localStorage.getItem('lastSearchQuery')
const analysis = JSON.parse(localStorage.getItem('lastAnalysis') || '{}')
```

### Save to localStorage:
```tsx
localStorage.setItem('lastSearchQuery', query)
localStorage.setItem('lastAnalysis', JSON.stringify(response))
```

### Navigate after search:
```tsx
router.push('/insights')  // Will auto-fetch from API
```

---

This document shows exactly how every piece connects! ✅
