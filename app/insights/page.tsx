'use client'

import InsightsSummary from '@/app/components/Insights/insight'

export default function InsightsPage() {
  const data =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('lastAnalysis') || '{}')
      : {}

  return (
    <InsightsSummary
      query={data.query || 'AAPL'}
      fear={data.fear || 30}
      greed={data.greed || 60}
      neutral={data.neutral || 10}
      nifty_price={data.nifty_price || 18500}
      nifty_change={data.nifty_change || 0.8}
      signal={data.signal || 'Positive'}
      probability={data.probability || '75%'}
      winningFactor={data.winningFactor || '68%'}
      all_articles={data.all_articles || []}
    />
  )
}

