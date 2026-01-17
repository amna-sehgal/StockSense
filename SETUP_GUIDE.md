# Stock Sense - Setup & Running Guide

## Quick Start

### Prerequisites
- Python 3.10+ (3.14.2 compatible)
- Node.js 18+ 
- npm or yarn

---

## Step 1: Setup Backend API

### Install Dependencies
```bash
# Navigate to project root
cd stocksense

# Install Python packages
pip install -r requirements.txt

# If using the updated requirements file with Flask
pip install Flask>=3.0.0 Flask-CORS>=4.0.0
```

### Verify Installation
```bash
# Check if all modules are available
python -c "import flask; import transformers; import yfinance; print('✅ All modules installed')"
```

### Run Backend API
```bash
# Start Flask server
python api.py

# Expected output:
# WARNING in app.run(): This is a development server. Do not use it in production applications.
# Running on http://127.0.0.1:5000
```

**The API will be available at:** `http://localhost:5000`

---

## Step 2: Setup Frontend

### Install Node Dependencies
```bash
# Install npm packages
npm install

# If you have issues:
npm install --legacy-peer-deps
```

### Configure Frontend
Create/update `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Run Development Server
```bash
# Start Next.js dev server
npm run dev

# Expected output:
# ▲ Next.js 14.x.x
# - Local: http://localhost:3000
```

**The app will be available at:** `http://localhost:3000`

---

## Step 3: Test the Integration

### Test 1: Check API Health
```bash
curl http://localhost:5000/api/health

# Expected response:
# {
#   "status": "healthy",
#   "services": {
#     "yfinance": true,
#     "feedparser": true,
#     "sentiment_model": true
#   }
# }
```

### Test 2: Perform Analysis
```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"query":"RELIANCE","use_rss":true}'

# This will return full analysis with sentiment, signals, and articles
```

### Test 3: Use Frontend
1. Open browser: `http://localhost:3000`
2. Click on "Search" page
3. Enter a stock symbol (e.g., "AAPL", "RELIANCE", "NIFTY 50")
4. Press Enter or click search
5. Wait for analysis (may take 5-10 seconds on first run)
6. View results on Insights page

---

## Running Both Servers

### Option 1: Two Terminal Windows

**Terminal 1 - Backend:**
```bash
cd stocksense
python api.py
```

**Terminal 2 - Frontend:**
```bash
cd stocksense
npm run dev
```

### Option 2: Using Terminal Manager (tmux/screen)

```bash
# Using tmux
tmux new-session -d -s stocksense

# Backend
tmux send-keys -t stocksense "cd stocksense && python api.py" Enter

# Frontend (in new window)
tmux new-window -t stocksense
tmux send-keys -t stocksense "cd stocksense && npm run dev" Enter

# View sessions
tmux list-sessions
```

---

## Troubleshooting

### Issue: API Connection Failed
**Error:** `Failed to fetch from http://localhost:5000`

**Solution:**
1. Check Flask server is running: `curl http://localhost:5000/api/health`
2. Check port 5000 is not blocked
3. Verify `.env.local` has correct API URL
4. Check browser console for CORS errors

### Issue: Model Loading Error
**Error:** `Error loading FinBERT model`

**Solution:**
```bash
# Re-install transformers
pip install --upgrade transformers torch

# On first run, model downloads automatically (may take 5-10 minutes)
# Check logs for download progress
```

### Issue: No Articles Found
**Error:** `No articles found for 'QUERY'`

**Solution:**
1. Check API keys are valid in `api.py`
2. Try different search terms
3. Check internet connection
4. Wait 15 minutes (API rate limiting)
5. Use test data (fallback in frontend)

### Issue: NIFTY/VIX Data Not Loading
**Error:** `'NoneType' object is not subscriptable`

**Solution:**
```bash
# Update yfinance
pip install --upgrade yfinance

# On Windows Python 3.14.x:
pip uninstall yfinance -y
pip install yfinance --no-cache-dir
```

### Issue: Port Already in Use
**Error:** `Address already in use`

**Solution:**
```bash
# Find process using port 5000
# Linux/Mac:
lsof -i :5000
kill -9 <PID>

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# OR use different port
# Edit api.py: app.run(port=5001)
```

---

## File Structure Reference

```
stocksense/
├── api.py                          # ✅ Flask backend with all APIs
├── app.py                          # Streamlit app (optional)
├── requirements.txt                # Python dependencies
├── package.json                    # Node dependencies
├── .env.local                      # Frontend config
├── API_INTEGRATION_GUIDE.md        # API documentation
├── SETUP_GUIDE.md                  # This file
│
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx
│   ├── sentiment/
│   │   └── page.tsx               # ✅ Connected: GET /api/sentiment
│   ├── insights/
│   │   └── page.tsx               # ✅ Connected: GET /api/insights
│   ├── news&feed/
│   │   └── page.tsx               # ✅ Connected: GET /api/news
│   ├── search/
│   │   └── page.tsx               # Search page
│   │
│   └── components/
│       ├── StockSearchPage/
│       │   └── search.tsx         # ✅ Connected: POST /api/analyze
│       ├── sentiments/
│       │   └── sentiAnalysis.tsx  # Sentiment gauge
│       ├── news/
│       │   └── newsFeed.tsx       # ✅ News feed component
│       └── Insights/
│           └── insight.tsx        # Insights display
│
└── public/
    └── media/                     # Images and videos
```

---

## API Endpoints Summary

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/analyze` | Main analysis endpoint |
| GET | `/api/sentiment/<query>` | Get sentiment for query |
| GET | `/api/news/<query>` | Get news feed |
| GET | `/api/insights/<query>` | Get detailed insights |
| GET | `/api/market-indicators` | Get market data |
| GET | `/api/health` | Health check |

---

## Expected Data Flow

```
1. User enters stock → Search page
   ↓
2. Frontend POST /api/analyze → Backend
   ↓
3. Backend processes:
   - Fetches news from 5 sources
   - Analyzes sentiment (FinBERT)
   - Gets market data (NIFTY, VIX)
   - Generates signal
   - Calls Gemini AI for analysis
   ↓
4. Response saved to localStorage
   ↓
5. Frontend redirects to Insights
   ↓
6. Other pages fetch specific data:
   - Sentiment: GET /api/sentiment
   - News: GET /api/news
   - Insights: GET /api/insights
```

---

## Performance Tips

### Caching
- First analysis takes 10-15 seconds (model loading + API calls)
- Subsequent queries are faster (cached)
- Clear cache: `localStorage.clear()` in browser console

### API Rate Limiting
- GNews: 100 requests/day
- NewsAPI: Limited by plan
- Finnhub: Limited by key
- Fallback to demo data if limit reached

### Optimization
- Close unused browser tabs
- Run backend and frontend on same machine
- Use Chrome DevTools to check response times

---

## Production Deployment

### Backend (Gunicorn)
```bash
# Install Gunicorn
pip install gunicorn

# Run with Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 api:app
```

### Frontend (Build & Deploy)
```bash
# Build for production
npm run build

# Start production server
npm start

# Or deploy to Vercel:
# 1. Push to GitHub
# 2. Connect to Vercel
# 3. Set API_URL environment variable
```

---

## Monitoring & Logs

### Backend Logs
- Flask logs appear in terminal
- Check for API errors
- Monitor rate limiting warnings

### Frontend Logs
- Browser console (`F12` → Console tab)
- Network tab for API calls
- Storage tab for localStorage

### Enable Debug Mode
```python
# In api.py
app.run(debug=True, port=5000)
```

---

## Stopping Servers

### Terminal
Press `Ctrl + C` in each terminal

### Process Manager
```bash
# Kill Flask
pkill -f "python api.py"

# Kill Node
pkill -f "npm run dev"
```

---

## Support & Resources

### Documentation Files
- `API_INTEGRATION_GUIDE.md` - Detailed API docs
- `SETUP_GUIDE.md` - This file
- `app.py` - Streamlit reference implementation
- `README.md` - Project overview

### External Resources
- Flask: https://flask.palletsprojects.com/
- Next.js: https://nextjs.org/docs
- FinBERT: https://huggingface.co/ProsusAI/finbert
- Gemini API: https://ai.google.dev/

---

## Quick Commands Reference

```bash
# Setup
pip install -r requirements.txt
npm install

# Run
python api.py          # Terminal 1 - Backend
npm run dev            # Terminal 2 - Frontend

# Test
curl http://localhost:5000/api/health
npm run build          # Check for build errors

# Debug
npm run lint           # Check code issues
python -m pytest api.py  # Test backend

# Clean
rm -rf node_modules .next
pip cache purge
```

---

**Status:** ✅ All systems integrated and ready to use!

For detailed integration information, see `API_INTEGRATION_GUIDE.md`
