'use client';
import { motion } from 'framer-motion';
import styles from './landing.module.css';


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
        </div>
      </motion.div>



      <div className={styles.rightSide} />
    </section>
  );
}
