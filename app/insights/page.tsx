'use client'

import { useState, useEffect } from 'react'
import InsightsSummary from '@/app/components/Insights/insight'

export default function InsightsPage() {
  const [data, setData] = useState({
    query: 'NIFTY 50',
    fear: 30,
    greed: 60,
    neutral: 10,
    nifty_price: 18500,
    nifty_change: 0.8,
    signal: 'Positive',
    probability: '75%',
    winningFactor: '68%',
    all_articles: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInsightsData = async () => {
      try {
        setLoading(true)
        
        // Get query from localStorage or use default
        const lastQuery = localStorage.getItem('lastSearchQuery') || localStorage.getItem('lastAnalysis') ? 
          JSON.parse(localStorage.getItem('lastAnalysis') || '{}').query || 'NIFTY 50' : 'NIFTY 50'
        
        // Fetch from backend API
        const response = await fetch(`http://localhost:5000/api/insights/${encodeURIComponent(lastQuery)}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch insights data')
        }

        const insightsData = await response.json()
        
        setData({
          query: insightsData.query || 'NIFTY 50',
          fear: insightsData.fear || 30,
          greed: insightsData.greed || 60,
          neutral: insightsData.neutral || 10,
          nifty_price: insightsData.nifty_price || 18500,
          nifty_change: insightsData.nifty_change || 0.8,
          signal: insightsData.signal || 'Positive',
          probability: insightsData.probability || '75%',
          winningFactor: insightsData.winningFactor || '68%',
          all_articles: insightsData.articles || []
        })

        // Save to localStorage for reference
        localStorage.setItem('lastAnalysis', JSON.stringify(insightsData))
      } catch (error) {
        console.error('Error fetching insights:', error)
        
        // Fallback to localStorage data or defaults
        const savedData = typeof window !== 'undefined'
          ? JSON.parse(localStorage.getItem('lastAnalysis') || '{}')
          : {}
        
        setData({
          query: savedData.query || 'NIFTY 50',
          fear: savedData.fear || 30,
          greed: savedData.greed || 60,
          neutral: savedData.neutral || 10,
          nifty_price: savedData.nifty_price || 18500,
          nifty_change: savedData.nifty_change || 0.8,
          signal: savedData.signal || 'Positive',
          probability: savedData.probability || '75%',
          winningFactor: savedData.winningFactor || '68%',
          all_articles: savedData.all_articles || []
        })
      } finally {
        setLoading(false)
      }
    }

    fetchInsightsData()
  }, [])

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading insights...</div>
  }

  return (
    <InsightsSummary
      query={data.query}
      fear={data.fear}
      greed={data.greed}
      neutral={data.neutral}
      nifty_price={data.nifty_price}
      nifty_change={data.nifty_change}
      signal={data.signal}
      probability={data.probability}
      winningFactor={data.winningFactor}
      all_articles={data.all_articles}
    />
  )
}

