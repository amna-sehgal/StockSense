# Stock Sense - Backend API & Frontend Integration Guide

## Overview
This document details how the backend (Flask API) connects with the frontend (Next.js) to provide real-time stock market sentiment analysis, news feeds, and financial insights.

---

## Backend Architecture (`api.py`)

### Core Components

#### 1. **News Fetching Functions**
- **`fetch_gnews(api_key, query)`** - Fetches from GNews API
- **`fetch_newsapi(api_key, query)`** - Fetches from NewsAPI (Bloomberg, CNBC, WSJ)
- **`fetch_finnhub(api_key, query)`** - Fetches from Finnhub News API
- **`fetch_cnbc_rss(query)`** - Fetches from CNBC RSS feed
- **`fetch_bloomberg_rss(query)`** - Fetches from Bloomberg RSS feed

Each function returns articles with:
```json
{
  "text": "Article headline + description",
  "source": "News source name",
  "url": "Article URL",
  "publishedAt": "ISO timestamp",
  "image": "Article image URL"
}
```

#### 2. **Market Data Functions**
- **`get_nifty()`** - Returns NIFTY 50 price and % change
- **`get_vix()`** - Returns VIX (Volatility Index)
- **`get_pcr()`** - Returns Put-Call Ratio

#### 3. **Sentiment Analysis**
- **`analyze_sentiment(articles)`** - Uses FinBERT model to classify articles
- Returns: Fear %, Greed %, Neutral % and detailed sentiment data

#### 4. **Signal Generation**
- **`generate_signal()`** - Combines all indicators to produce market signal
  - Signals range from "EXTREME PANIC" to "EXTREME EUPHORIA"
  - Signal types: danger, warning, info, neutral

#### 5. **AI Analysis**
- **`get_gemini_explanation()`** - Uses Google Gemini AI to provide financial insights

---

## API Endpoints

### Base URL
```
http://localhost:5000
```

### 1. Main Analysis Endpoint
**POST** `/api/analyze`

**Request:**
```json
{
  "query": "NIFTY 50",
  "use_rss": true
}
```

**Response:**
```json
{
  "query": "NIFTY 50",
  "fear": 35.5,
  "greed": 55.2,
  "neutral": 9.3,
  "sentiment_data": [...],
  "all_articles": [...],
  "source_counts": {
    "GNews": 15,
    "NewsAPI": 12,
    "Finnhub": 8
  },
  "nifty_price": 18650.45,
  "nifty_change": 0.85,
  "vix": 14.3,
  "pcr": 0.95,
  "signal": "MODERATE GREED: Stay Alert",
  "signal_type": "info",
  "gemini_explanation": "AI analysis...",
  "timestamp": "2026-01-17T10:30:00"
}
```

### 2. Sentiment Analysis Endpoint
**GET** `/api/sentiment/<query>`

Returns sentiment breakdown for a specific stock/query.

### 3. News Feed Endpoint
**GET** `/api/news/<query>`

Returns structured news feed with:
- News items array
- Social media sentiment
- Sentiment distribution
- Theme frequency
- Fear vs Greed timeline
- AI summary

### 4. Insights Endpoint
**GET** `/api/insights/<query>`

Returns comprehensive analysis including:
- Sentiment metrics
- Market indicators
- Trading signal
- All articles
- AI analysis

### 5. Market Indicators Endpoint
**GET** `/api/market-indicators`

Returns current market data:
- NIFTY price and change
- VIX value
- PCR value

### 6. Health Check
**GET** `/api/health`

Confirms API status and service availability.

---

## Frontend Pages & Data Flow

### 1. **Search Page** (`/search`)
**File:** `app/components/StockSearchPage/search.tsx`

**Data Flow:**
1. User enters stock symbol (e.g., "RELIANCE", "AAPL")
2. On Enter key or form submit:
   - Saves query to `localStorage` as `lastSearchQuery`
   - Calls `POST /api/analyze` with query
   - Response is saved to `localStorage` as `lastAnalysis`
   - Navigates to `/insights` page

**Key Functions:**
```tsx
const handleSearch = async (e: React.FormEvent) => {
  // Save search and fetch analysis from backend
  // Navigate to insights
}

const handleStockClick = (stock) => {
  // Navigate to insights for selected stock
}
```

### 2. **Insights Page** (`/insights`)
**File:** `app/insights/page.tsx`

**Data Flow:**
1. On page load:
   - Retrieves `lastSearchQuery` from localStorage
   - Calls `GET /api/insights/{query}`
   - Displays full analysis with:
     - Fear/Greed/Neutral percentages
     - NIFTY indicators
     - Market signal
     - All articles
     - AI analysis

**Data Structure:**
```tsx
{
  query: string
  fear: number
  greed: number
  neutral: number
  nifty_price: number
  nifty_change: number
  signal: string
  all_articles: Article[]
}
```

### 3. **Sentiment Page** (`/sentiment`)
**File:** `app/sentiment/page.tsx`

**Data Flow:**
1. On page load:
   - Calls `GET /api/sentiment/{lastSearchQuery}`
   - Receives Fear/Greed percentages
   - Calculates sentiment (positive/negative/neutral)
   - Displays sentiment gauge

**Sentiment Logic:**
```
if (greed > fear) → "positive"
if (fear > greed) → "negative"
else → "neutral"
```

### 4. **News Page** (`/news&feed`)
**File:** `app/news&feed/page.tsx`

**Data Flow:**
1. On page load:
   - Calls `GET /api/news/{lastSearchQuery}`
   - Receives:
     - News items with sentiment
     - Social media items
     - Sentiment distribution
     - Theme frequency
     - Timeline data
   - Displays in News/Social tabs
   - Shows charts and AI summary

**Data Structure:**
```tsx
{
  news: FeedItem[]
  social: FeedItem[]
  sentimentDistribution: SentimentStat[]
  themeFrequency: ThemeStat[]
  sentimentTimeline: TimelinePoint[]
  aiSummary: string
}
```

---

## LocalStorage Data Management

### Keys Used:

1. **`lastSearchQuery`**
   - Stores the most recent search term
   - Used across all pages to fetch relevant data

2. **`lastAnalysis`**
   - Stores complete analysis response
   - Used as fallback when API unavailable
   - Contains all metrics and articles

---

## Data Flow Diagram

```
┌─────────────────┐
│  Search Page    │
│  (User Input)   │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│  POST /api/analyze          │
│  (Search Query)             │
└────────┬────────────────────┘
         │
         ├─→ fetch_gnews()
         ├─→ fetch_newsapi()
         ├─→ fetch_finnhub()
         ├─→ fetch_cnbc_rss()
         └─→ fetch_bloomberg_rss()
         │
         ├─→ analyze_sentiment()
         │   (FinBERT)
         │
         ├─→ get_nifty()
         ├─→ get_vix()
         ├─→ get_pcr()
         │
         ├─→ generate_signal()
         │
         └─→ get_gemini_explanation()
              (AI Analysis)
         │
         ▼
┌──────────────────────────────┐
│  Response Data (localStorage)│
└────────┬─────────────────────┘
         │
         ├─→ Insights Page  (/api/insights)
         ├─→ Sentiment Page (/api/sentiment)
         └─→ News Page      (/api/news)
```

---

## Key Data Structures

### Article Format
```tsx
interface Article {
  text: string           // Headline + description
  source: string         // "GNews", "Bloomberg", etc
  url: string           // Direct link
  publishedAt: string   // ISO timestamp
  image: string         // Article image
}
```

### FeedItem Format
```tsx
interface FeedItem {
  title: string
  sentiment: "positive" | "negative" | "neutral"
  source: string
  time: string
  image: string
  theme: string
  impact: "high" | "medium" | "low"
}
```

### Signal Format
```
Signal: "EXTREME PANIC: Strong Reversal Potential"
Type: "danger" | "warning" | "info" | "neutral"
```

---

## API Response Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 404 | No data found |
| 500 | Server error |

---

## Error Handling

### Frontend Fallback Strategy:
1. Try to fetch from API
2. If fails, use localStorage data
3. If localStorage empty, use demo/default data
4. User always sees data (cached or demo)

### Backend Error Handling:
- Rate limiting: Returns partial results from other sources
- Missing articles: Uses available sources
- Model loading: Continues without sentiment analysis

---

## Running the System

### Backend (Flask API)
```bash
python api.py
# Runs on http://localhost:5000
```

### Frontend (Next.js)
```bash
npm run dev
# Runs on http://localhost:3000
```

### API Testing
```bash
# Test search endpoint
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"query":"NIFTY 50","use_rss":true}'

# Test sentiment endpoint
curl http://localhost:5000/api/sentiment/RELIANCE

# Test news endpoint
curl http://localhost:5000/api/news/AAPL

# Test health
curl http://localhost:5000/api/health
```

---

## API Keys & Configuration

All API keys are configured in `api.py`:
- **GNews**: `526f2459fb3004c82394028e0016062d`
- **NewsAPI**: `b93745fa81e844fca42bcd0617f9cecb`
- **Gemini**: `AIzaSyBSSAoYrUVwpVYqHUT6KptqcbpiMWdYY18`
- **Finnhub**: `d5la779r01qgqufl9bg0d5la779r01qgqufl9bgg`

---

## Frontend Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## Summary

The system works as follows:

1. **User searches** for a stock/query on search page
2. **Frontend sends** POST request with query to `/api/analyze`
3. **Backend fetches** news from 5 sources + market data + AI analysis
4. **Data is saved** to localStorage and returned to frontend
5. **Frontend redirects** to insights page
6. **Insights page** displays full analysis with charts and metrics
7. **Other pages** (sentiment, news) fetch relevant data from API endpoints
8. **All pages** show cached data if API unavailable

---

## Files Modified

✅ **Created:**
- `api.py` - Flask backend with all API endpoints

✅ **Updated:**
- `app/sentiment/page.tsx` - Connected to `/api/sentiment`
- `app/insights/page.tsx` - Connected to `/api/insights`
- `app/components/news/newsFeed.tsx` - Connected to `/api/news`
- `app/components/StockSearchPage/search.tsx` - Integrated search with `/api/analyze`

---

## Next Steps

1. Ensure Flask server is running: `python api.py`
2. Verify API is accessible: `curl http://localhost:5000/api/health`
3. Test search functionality through UI
4. Monitor console for any errors
5. Check localStorage for cached data

---

For questions or issues, check the backend console logs and browser DevTools Network tab.
