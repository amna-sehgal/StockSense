'use client';
import { motion } from 'framer-motion';
import styles from './landing.module.css';

export default function Problem() {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Too Much Information. Too Little Clarity.
      </motion.h2>

      <motion.p
        className={styles.sectionText}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Retail investors are overwhelmed. Every day, hundreds of news articles
        and thousands of social media posts influence stock prices.
        <br /><br />
        Investors need a faster way to understand what the market really feels.
      </motion.p>
    </section>
  );
}