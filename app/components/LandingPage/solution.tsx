'use client';
import { motion } from 'framer-motion';
import styles from './landing.module.css';

export default function Solution() {
  return (
    <section className={styles.sectionGlow}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        One Dashboard. Complete Market Sentiment.
      </motion.h2>

      <motion.p
        className={styles.sectionText}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        StockSense AI aggregates real-time data from trusted news sources and
        social media, applies financial-grade AI sentiment analysis, and delivers
        a clear sentiment score.
        <br /><br />
        <strong>No noise. Just insight.</strong>
      </motion.p>
    </section>
  );
}
