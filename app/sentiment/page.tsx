"use client";

import { useEffect, useState } from "react";
import SentiAnalysis from "@/app/components/sentiments/sentiAnalysis";
import CursorGlow from "@/app/components/sentiments/cursor";
import NavBar from "../components/Navbar/navbar";

export default function SentimentPage() {
  const [sentiment, setSentiment] = useState<"positive" | "neutral" | "negative">("neutral");
  const [fear, setFear] = useState(0);
  const [greed, setGreed] = useState(0);
  const [query, setQuery] = useState("NIFTY 50");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSentimentData = async () => {
      try {
        setLoading(true);
        // Get query from localStorage or use default
        const lastQuery = localStorage.getItem('lastSearchQuery') || 'NIFTY 50';
        setQuery(lastQuery);

        const response = await fetch(`http://localhost:5000/api/sentiment/${encodeURIComponent(lastQuery)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch sentiment data');
        }

        const data = await response.json();
        
        setFear(data.fear || 0);
        setGreed(data.greed || 0);
        
        // Determine sentiment based on fear vs greed
        let determinedSentiment: "positive" | "neutral" | "negative";
        if (data.greed > data.fear) {
          determinedSentiment = "positive";
        } else if (data.fear > data.greed) {
          determinedSentiment = "negative";
        } else {
          determinedSentiment = "neutral";
        }
        
        setSentiment(determinedSentiment);
      } catch (error) {
        console.error('Error fetching sentiment data:', error);
        // Fallback to random sentiment
        const sentiments: Array<"positive" | "neutral" | "negative"> = [
          "negative",
          "neutral",
          "positive",
        ];
        setSentiment(sentiments[Math.floor(Math.random() * sentiments.length)]);
      } finally {
        setLoading(false);
      }
    };

    fetchSentimentData();
  }, []);

  return (
    <div>
      <CursorGlow />
      <NavBar />
      {loading ? (
        <div style={{ padding: '2rem', textAlign: 'center' }}>Loading sentiment data...</div>
      ) : (
        <div>
          <div style={{ padding: '1rem', textAlign: 'center', color: '#888' }}>
            <p>Analyzing: <strong>{query}</strong></p>
            <p>Fear: {fear.toFixed(2)}% | Greed: {greed.toFixed(2)}%</p>
          </div>
          <SentiAnalysis sentiment={sentiment} />
        </div>
      )}
    </div>
  );
}
