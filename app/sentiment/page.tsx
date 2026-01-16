"use client";

import { useEffect, useState } from "react";
import SentiAnalysis from "@/app/components/sentiments/sentiAnalysis";
import CursorGlow from "@/app/components/sentiments/cursor";
import NavBar from "../components/Navbar/navbar";

export default function SearchPage() {
  const [sentiment, setSentiment] = useState<"positive" | "neutral" | "negative">("neutral");

  useEffect(() => {
    // Simulate real sentiment coming from backend on page load
    const sentiments: Array<"positive" | "neutral" | "negative"> = [
      "negative",
      "neutral",
      "positive",
    ];

    const randomSentiment =
      sentiments[Math.floor(Math.random() * sentiments.length)];

    setSentiment(randomSentiment);
  }, []);

  return (
    <div>
      <CursorGlow />
      <NavBar />
      <SentiAnalysis sentiment={sentiment} />
    </div>
  );
}
