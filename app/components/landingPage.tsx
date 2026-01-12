'use client';
import { motion } from 'framer-motion';
import styles from './landing.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} snap-start`}>
      {/* Video Background */}
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/13397910_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
      
      {/* Dark Overlay */}
      <div className={styles.overlay} />
      
      {/* Animated Text */}
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        <motion.h1
          className={styles.heading}
          initial={{ scale: 0.8, y: -50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.8 }}
        >
          Understand the Market in Seconds, Not Hours.
        </motion.h1>
        
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          AI‑Powered Stock Market Sentiment Analysis
        </motion.p>
        
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          StockSense AI analyzes thousands of news articles and social media posts to instantly reveal 
          market sentiment around any stock — helping investors make faster, data‑driven decisions.
        </motion.p>
      </motion.div>
    </section>
  );
}
