'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import styles from './insight.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Article {
  source: string
  text: string
  url?: string
  publishedAt?: string
}

interface InsightsProps {
  query?: string
  fear?: number
  greed?: number
  neutral?: number
  nifty_price?: number
  nifty_change?: number
  signal?: string
  probability?: string
  winningFactor?: string
  all_articles?: Article[]
}

export default function InsightsSummary({
  query = 'N/A',
  fear = 30,
  greed = 60,
  neutral = 10,
  nifty_price = 18500,
  nifty_change = 0.8,
  signal = 'Positive',
  probability = '75%',
  winningFactor = '68%',
  all_articles = [],
}: InsightsProps) {
  const router = useRouter()

  /* ------------------ PIE DATA (UNCHANGED LOGIC) ------------------ */
  const getDoughnutData = (value: number) => ({
    labels: ['Value', 'Rest'],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#00ff88', '#111'],
        borderWidth: 0,
      },
    ],
  })

  /* ------------------ FIXED SIZE PIE OPTIONS ------------------ */
  const doughnutOptions = {
    cutout: '72%',
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* ------------------ TOP BUTTONS ------------------ */}
      <div className={styles.topButtons}>
        <button
          className={styles.backButton}
          onClick={() => router.push('/dashboard')}
        >
          ⬅️ Back to Dashboard
        </button>

        <div /> {/* spacer column */}

        <button
          className={styles.analyzeButton}
          onClick={() => router.push('/dashboard')}
        >
          🔄 Analyze Another Stock
        </button>
      </div>

      {/* ------------------ OVERALL INSIGHT ------------------ */}
      <motion.div
        className={styles.overallInsight}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.glowyHeading}>
          Overall Market Signal: {signal}
        </h1>
        <p className={styles.queryText}>
          Analyzed Stock: <strong>{query}</strong>
        </p>
      </motion.div>

      {/* ------------------ METRICS ------------------ */}
      <motion.div
        className={styles.metrics}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {[
          { label: '😨 Fear Index', value: fear },
          { label: '🤑 Greed Index', value: greed },
          { label: '😐 Neutral', value: neutral },
          {
            label: '📈 NIFTY 50',
            value: Math.abs(nifty_change),
            price: nifty_price,
            change: nifty_change,
          },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <h3>{metric.label}</h3>

            {metric.price !== undefined ? (
              <p>
                ₹{metric.price.toLocaleString()} (
                {metric.change! > 0 ? '+' : ''}
                {metric.change}%)
              </p>
            ) : (
              <p>{metric.value}%</p>
            )}

            {/* ✅ SMALL, EQUAL, ANIMATED PIE */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.6 + idx * 0.1,
                type: 'spring',
                stiffness: 120,
              }}
            >
              <Doughnut
                data={getDoughnutData(metric.value)}
                options={doughnutOptions}
                width={64}
                height={64}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ------------------ PROBABILITY ------------------ */}
      <div className={styles.probabilityContainer}>
        <div className={styles.probCard}>
          <h3>🎯 Probability</h3>
          <p>{probability}</p>
        </div>
        <div className={styles.probCard}>
          <h3>🏆 Winning Factor</h3>
          <p>{winningFactor}</p>
        </div>
      </div>

      {/* ------------------ ARTICLES ------------------ */}
      <div className={styles.articlesSection}>
        <h2 className={styles.glowyHeading}>📰 Recent Articles</h2>

        <div className={styles.articleList}>
          {(all_articles.length
            ? all_articles
            : [
                {
                  source: 'Bloomberg',
                  text: 'Stocks surge as market optimism returns...',
                  publishedAt: '2026-01-17',
                  url: '#',
                },
              ]
          ).map((a, idx) => (
            <div key={idx} className={styles.articleCard}>
              <p>
                <strong>[{a.source}]</strong> {a.text}
              </p>
              <p className={styles.published}>{a.publishedAt}</p>
              {a.url && (
                <a href={a.url} target="_blank" rel="noopener noreferrer">
                  🔗 Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ------------------ DISCLAIMER ------------------ */}
      <div className={styles.disclaimer}>
        ⚠️ This tool is for educational purposes only. Not financial advice.
      </div>
    </motion.div>
  )
}
