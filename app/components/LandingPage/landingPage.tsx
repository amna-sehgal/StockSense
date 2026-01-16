'use client'

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
        {}
        <div className={styles.leftContent}>
          <div className={styles.headingWrapper}>
            <TypingLine texts={headlines} />
          </div>

          <p className={styles.subtext}>
            Real-time sentiment from news & social signals.
          </p>
        </div>

        {}
        <div className={styles.rightContent}>
          <WorldSignals />
        </div>
      </div>
    </section>
  )
}



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







