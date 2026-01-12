'use client';
import { motion } from 'framer-motion';
import { Clock, Eye, TrendingUp, Shield } from 'lucide-react';
import styles from './landing.module.css';

const values = [
  {
    icon: <Clock size={26} />,
    text: 'Save hours of research time',
  },
  {
    icon: <Eye size={26} />,
    text: 'Understand market mood at a glance',
  },
  {
    icon: <TrendingUp size={26} />,
    text: 'Identify bullish or bearish signals early',
  },
  {
    icon: <Shield size={26} />,
    text: 'Reduce emotional bias in investing',
  },
];

export default function Value() {
  return (
    <section className={styles.valueSection}>
      <motion.div
        className={styles.valueCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Make Smarter Decisions, Faster.</h2>

        <div className={styles.valueGrid}>
          {values.map((v, i) => (
            <motion.div
              key={i}
              className={styles.valueItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <span className={styles.valueIcon}>{v.icon}</span>
              <p>{v.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
