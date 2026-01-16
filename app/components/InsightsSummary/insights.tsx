import React from "react";
import { TrendingUp, TrendingDown, Activity, Info, Zap } from "lucide-react";

/**
 * InsightsSummary Component
 * A responsive financial sentiment dashboard using React and Tailwind CSS.
 * Displays market pulse, confidence scores, and sentiment drivers.
 */
const InsightsSummary = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 p-4 md:p-8 font-sans">
      {/* Header Section */}
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Market Insights
          </h1>
          <p className="text-gray-500 text-sm mt-1">Real-time sentiment analysis summary</p>
        </div>
        <div className="hidden md:block">
          <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            Last updated: Just now
          </span>
        </div>
      </header>

      {/* Top Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Market Pulse Card */}
        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Market Pulse</p>
            <Activity className="w-5 h-5 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-green-400">
            Bullish Bias
          </h2>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Positive sentiment driven by strong earnings optimism and favorable social momentum across tech sectors.
          </p>
        </div>

        {/* Confidence Meter Card */}
        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Market Confidence</p>
            <Info className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-bold text-white">72%</h2>
            <span className="text-green-400 text-sm font-medium">High</span>
          </div>
          <div className="w-full bg-zinc-800 h-3 rounded-full mt-6 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full transition-all duration-1000 ease-out" 
              style={{ width: '72%' }} 
            />
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">Calculated based on 15+ data streams</p>
        </div>
      </div>

      {/* Signals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Positive Signals */}
        <div className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Top Positive Signals</h3>
          </div>
          <ul className="space-y-4">
            {[
              { name: "RELIANCE", value: "+0.48", trend: "up" },
              { name: "TCS", value: "+0.32", trend: "up" },
              { name: "INFY", value: "+0.27", trend: "up" }
            ].map((signal, idx) => (
              <li key={idx} className="flex justify-between items-center p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors">
                <span className="font-medium tracking-tight text-gray-200">{signal.name}</span>
                <span className="text-green-400 font-mono font-bold">{signal.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Negative Signals */}
        <div className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <TrendingDown className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Top Negative Signals</h3>
          </div>
          <ul className="space-y-4">
            {[
              { name: "HDFC BANK", value: "-0.41", trend: "down" },
              { name: "AXIS BANK", value: "-0.29", trend: "down" }
            ].map((signal, idx) => (
              <li key={idx} className="flex justify-between items-center p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors">
                <span className="font-medium tracking-tight text-gray-200">{signal.name}</span>
                <span className="text-red-400 font-mono font-bold">{signal.value}</span>
              </li>
            ))}
            {/* Empty state placeholder if fewer signals */}
            <li className="p-3 rounded-xl border border-dashed border-zinc-800 flex items-center justify-center text-zinc-600 text-sm">
              No other major negative signals detected
            </li>
          </ul>
        </div>
      </div>

      {/* Sentiment Drivers Section */}
      <div className="bg-zinc-900/40 rounded-2xl p-6 mb-8 border border-zinc-800">
        <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-500" />
          Key Sentiment Drivers
        </h3>
        <div className="space-y-4">
          {[
            "Strong Q3 earnings expectations across the IT services sector",
            "Positive social sentiment surrounding domestic infrastructure spending",
            "Muted banking sentiment due to recent regulatory uncertainty"
          ].map((driver, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{driver}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Actionable Insight Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 via-zinc-900 to-black border border-green-500/30 rounded-2xl p-6 md:p-8">
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
            Strategic Outlook
          </h3>
          <p className="text-gray-100 text-lg leading-relaxed max-w-3xl">
            Market sentiment currently favors <span className="text-white font-semibold underline decoration-green-500/50 decoration-2 underline-offset-4">IT and Energy stocks</span> in the short term. 
            Exercise caution in the Banking sector until regulatory signals stabilize.
          </p>
        </div>
        {/* Abstract background glow */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default InsightsSummary;