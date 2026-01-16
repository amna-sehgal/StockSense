'use client'

<<<<<<< HEAD
import { useEffect, useState } from 'react'
import styles from './landing.module.css'
import WorldSignals from './WorldSignals'

const headlines = [
  'Decode Market Sentiment',
  'Trade Smarter',
  'Clarity from Market Noise',
  'Market Noise, Made Actionable',
]

export default function LandingPage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        {/* LEFT */}
        <div className={styles.leftContent}>
          <div className={styles.headingWrapper}>
            <TypingLine texts={headlines} />
          </div>

          <p className={styles.subtext}>
            Real-time sentiment from news & social signals.
          </p>
=======

export default function Hero() {
  return (
    <section className={styles.hero}>
     
      <div className={styles.videoBackground}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/204292-923909617_small.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
        <div className={styles.videoOverlay} />
      </div>

      <motion.div
        className={styles.centeredText}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
       
        <motion.h1
          className={styles.heading}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
        >
          Understand the Market in Seconds, Not Hours.
        </motion.h1>

        
        <div className={styles.blurContainer}>
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            AI‑Powered Stock Market Sentiment Analysis
          </motion.p>

          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            StockSense AI analyzes thousands of news articles and social media posts
            to instantly reveal market sentiment around any stock — helping investors
            make faster, data‑driven decisions.
          </motion.p>
>>>>>>> 9e7a2c6308bc9cd5d2e1e6f18c08c0b406ba8808
        </div>

<<<<<<< HEAD
        {/* RIGHT */}
        <div className={styles.rightContent}>
          <WorldSignals />
        </div>
      </div>
=======


      <div className={styles.rightSide} />
>>>>>>> 9e7a2c6308bc9cd5d2e1e6f18c08c0b406ba8808
    </section>
  )
}

/* ---------- Typing Effect (UNCHANGED) ---------- */

function TypingLine({ texts }: { texts: string[] }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentText = texts[lineIndex]
  const displayedText = currentText.substring(0, charIndex)

  useEffect(() => {
    if (!isDeleting && charIndex === currentText.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1200)
      return () => clearTimeout(pause)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setLineIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1))
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentText, texts.length])

  return (
    <h1 className={styles.heading}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </h1>
  )
}







