"use client";

import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { ArrowLeft, TrendingUp } from "lucide-react";

// -------------------- Types --------------------
type Sentiment = "positive" | "negative" | "neutral";

interface FeedItem {
  title: string;
  sentiment: Sentiment;
  source: string;
  time: string;
  image: string;
  theme: string;
  impact: "high" | "medium" | "low";
}

interface ThemeStat {
  theme: string;
  count: number;
}

interface SentimentStat {
  name: string;
  value: number;
  [key: string]: string | number;
}


interface TimelinePoint {
  time: string;
  fear: number;
  greed: number;
}


// -------------------- Page --------------------
export default function MarketFeedPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"news" | "social">("news");
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [sentimentStats, setSentimentStats] = useState<
    { name: string; value: number }[]
  >([]);
  const [themeStats, setThemeStats] = useState<ThemeStat[]>([]);
  const [timeline, setTimeline] = useState<TimelinePoint[]>([]);

  const [aiSummary, setAiSummary] = useState(
    "Overall sentiment is moderately positive, driven by strong earnings outlook and stable macro indicators. Social media shows optimism with cautious positioning from smart money."
  );

  // -------------------- Data Loader --------------------
  useEffect(() => {
    const fetchNewsFeed = async () => {
      try {
        // Get query from localStorage or use default
        const lastQuery = localStorage.getItem('lastSearchQuery') || 'NIFTY 50';

        // Fetch data from backend
        const response = await fetch(`http://localhost:5000/api/news/${encodeURIComponent(lastQuery)}`);

        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }

        const data = await response.json();

        // Convert backend data to FeedItem format
        const newsItems: FeedItem[] = data.news.map((article: any) => ({
          title: article.title,
          sentiment: article.sentiment as Sentiment,
          source: article.source,
          time: new Date(article.publishedAt).toLocaleTimeString() || "N/A",
          image: article.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
          theme: "Market News",
          impact: article.sentiment === "positive" ? "high" : article.sentiment === "negative" ? "high" : "medium"
        }));

        const socialItems: FeedItem[] = data.social.map((article: any) => ({
          title: article.title,
          sentiment: article.sentiment as Sentiment,
          source: article.source,
          time: new Date(article.publishedAt).toLocaleTimeString() || "N/A",
          image: article.image || "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
          theme: "Social Media",
          impact: "medium"
        }));

        setFeed(activeTab === "news" ? newsItems : socialItems);
        setSentimentStats(data.sentimentDistribution || []);
        setThemeStats(data.themeFrequency || []);
        setTimeline(data.sentimentTimeline || []);
        setAiSummary(data.aiSummary || "AI analysis unavailable at this moment.");
      } catch (error) {
        console.error('Error fetching news data:', error);

        // -------------------- DEMO FALLBACK --------------------
        const demoNews: FeedItem[] = [
          {
            title: "Reliance Q3 profit beats estimates, stock jumps",
            sentiment: "positive",
            source: "Moneycontrol",
            time: "09:45 AM",
            image:
              "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
            theme: "Earnings",
            impact: "high",
          },
          {
            title: "IT stocks fall after weak US tech outlook",
            sentiment: "negative",
            source: "Economic Times",
            time: "10:20 AM",
            image:
              "https://images.unsplash.com/photo-1559526324-593bc073d938",
            theme: "Global Tech",
            impact: "medium",
          },
          {
            title: "Banks steady ahead of RBI policy decision",
            sentiment: "neutral",
            source: "Business Standard",
            time: "11:00 AM",
            image:
              "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9",
            theme: "RBI Policy",
            impact: "low",
          },
        ];

        const demoSocial: FeedItem[] = [
          {
            title: "Traders bullish on NIFTY breakout",
            sentiment: "positive",
            source: "Twitter",
            time: "10:05 AM",
            image:
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
            theme: "Market Trend",
            impact: "medium",
          },
          {
            title: "Reddit users fear correction after rally",
            sentiment: "negative",
            source: "Reddit",
            time: "10:40 AM",
            image:
              "https://images.unsplash.com/photo-1604594849809-dfedbc827105",
            theme: "Sentiment",
            impact: "medium",
          },
          {
            title: "Finfluencers advise holding large caps",
            sentiment: "neutral",
            source: "YouTube",
            time: "11:15 AM",
            image:
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            theme: "Advice",
            impact: "low",
          },
        ];

        setFeed(activeTab === "news" ? demoNews : demoSocial);

        setSentimentStats([
          { name: "Positive", value: 52 },
          { name: "Negative", value: 28 },
          { name: "Neutral", value: 20 },
        ]);

        setThemeStats([
          { theme: "Earnings", count: 8 },
          { theme: "RBI Policy", count: 5 },
          { theme: "Global Tech", count: 6 },
        ]);

        setTimeline([
          { time: "09:30", fear: 42, greed: 58 },
          { time: "10:30", fear: 38, greed: 62 },
          { time: "11:30", fear: 45, greed: 55 },
        ]);
      }
    };

    fetchNewsFeed();
  }, [activeTab]);

  // -------------------- UI Starts --------------------
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => {
            window.location.href = 'https://sentimenta-sa.streamlit.app/'
          }}
        >
          <ArrowLeft size={18} /> Back to Dashboard
        </button>
        <h1>Market News & Social Sentiment</h1>
        <button className={styles.insightBtn} onClick={() => router.push('/insights')}>
          Insights Summary <TrendingUp size={16} />
        </button>
      </div>
      {/* ================== CHARTS ================== */}
      <div className={styles.chartGrid}>
        {/* Sentiment Donut */}
        <div className={styles.chartCard}>
          <h3>Market Mood</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={sentimentStats}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
              >
                {sentimentStats.map((_, idx) => {
                  const COLORS = ["#00ff99", "#ff4d4d", "#aaaaaa"];
                  return <Cell key={idx} fill={COLORS[idx]} />;
                })}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Theme Bar */}
        <div className={styles.chartCard}>
          <h3>Key Themes</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={themeStats}>
              <XAxis dataKey="theme" stroke="#00ff99" />
              <YAxis stroke="#00ff99" />
              <Tooltip />
              <Bar dataKey="count" fill="#00ff99" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Fear vs Greed Area */}
        <div className={styles.chartCard}>
          <h3>Fear vs Greed Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={timeline}>
              <XAxis dataKey="time" stroke="#00ff99" />
              <YAxis stroke="#00ff99" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="fear"
                stroke="#ff4d4d"
                fill="#ff4d4d33"
              />
              <Area
                type="monotone"
                dataKey="greed"
                stroke="#00ff99"
                fill="#00ff9933"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================== TABS ================== */}
      <div className={styles.tabs}>
        <button
          className={activeTab === "news" ? styles.activeTab : ""}
          onClick={() => setActiveTab("news")}
        >
          News
        </button>
        <button
          className={activeTab === "social" ? styles.activeTab : ""}
          onClick={() => setActiveTab("social")}
        >
          Social Media
        </button>
      </div>

      {/* ================== FEED CARDS ================== */}
      <div className={styles.feedGrid}>
        {feed.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={styles.card}
          >
            <img src={item.image} alt={item.title} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <span
                className={`${styles.badge} ${item.sentiment === "positive"
                  ? styles.positive
                  : item.sentiment === "negative"
                    ? styles.negative
                    : styles.neutral
                  }`}
              >
                {item.sentiment.toUpperCase()}
              </span>
              <h4>{item.title}</h4>
              <p className={styles.meta}>
                {item.source} • {item.time} • {item.theme}
              </p>
              <p className={styles.aiHint}>
                🤖 AI Insight: {item.sentiment} sentiment with {item.impact} impact
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================== AI SUMMARY ================== */}
      <div className={styles.chartCard} style={{ marginTop: "2rem" }}>
        <h3>🧠 AI Market Summary</h3>
        <p>{aiSummary}</p>
      </div>

      {/* ================== DISCLAIMER ================== */}
      <div className={styles.disclaimer}>
        ⚠️ Disclaimer: This data is for educational/demo purposes only. Always verify with official market sources before making financial decisions.
      </div>

      {/* ================== LAST UPDATED ================== */}
      <div style={{ marginTop: "1rem", fontSize: "0.8rem", opacity: 0.7 }}>
        Last updated: {new Date().toLocaleString()}
      </div>
    </div>
  );
}

