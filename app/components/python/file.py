# components/python/file.py

# -------------------------------
# StockSense: Daily Sentiment Score
# -------------------------------

import snscrape.modules.twitter as sntwitter
import requests
import pandas as pd
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# -------------------------------
# 1. Settings
# -------------------------------
STOCK_KEYWORDS = ["TCS", "$TCS", "Tata Consultancy Services"]
MAX_TWEETS = 50  # Number of tweets to fetch
FINBERT_MODEL = "yiyanghkust/finbert-tone"  # FinBERT model

# -------------------------------
# 2. Load FinBERT Model
# -------------------------------
tokenizer = AutoTokenizer.from_pretrained(FINBERT_MODEL)
model = AutoModelForSequenceClassification.from_pretrained(FINBERT_MODEL)

# Map FinBERT output to numeric score
SENTIMENT_MAP = {
    0: -1.0,  # negative
    1: 0.0,   # neutral
    2: 1.0    # positive
}

# -------------------------------
# 3. Fetch Tweets
# -------------------------------
def fetch_tweets(keywords, max_tweets=50):
    tweets_list = []
    for kw in keywords:
        for i, tweet in enumerate(sntwitter.TwitterSearchScraper(f"{kw} lang:en").get_items()):
            if i >= max_tweets:
                break
            tweets_list.append(tweet.content)
    return tweets_list

# -------------------------------
# 4. Sentiment Analysis
# -------------------------------
def calculate_sentiment(texts):
    scores = []
    for text in texts:
        inputs = tokenizer(text, return_tensors="pt", truncation=True)
        outputs = model(**inputs)
        label = torch.argmax(outputs.logits, dim=1).item()
        score = SENTIMENT_MAP[label]
        scores.append(score)
    return scores

# -------------------------------
# 5. Aggregate Daily Sentiment
# -------------------------------
def daily_sentiment_score(scores):
    if len(scores) == 0:
        return 0
    return sum(scores) / len(scores)

# -------------------------------
# 6. Main
# -------------------------------
if __name__ == "__main__":
    print("Fetching tweets...")
    tweets = fetch_tweets(STOCK_KEYWORDS, MAX_TWEETS)
    print(f"Fetched {len(tweets)} tweets.")

    print("Calculating sentiment...")
    scores = calculate_sentiment(tweets)
    daily_score = daily_sentiment_score(scores)

    print(f"\nDaily Sentiment Score for TCS: {daily_score:.2f}")
