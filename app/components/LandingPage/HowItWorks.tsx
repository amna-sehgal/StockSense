'use client';
import { motion } from 'framer-motion';
import { Search, BrainCircuit, BarChart3 } from 'lucide-react';
import styles from './landing.module.css';

const steps = [
  {
    step: '01',
    icon: <Search size={32} />,
    title: 'Search Any Stock',
    desc: 'Enter a stock ticker like TSLA, AAPL, or MSFT.',
  },
  {
    step: '02',
    icon: <BrainCircuit size={32} />,
    title: 'AI Analyzes the Market',
    desc: 'We scan news and social data using financial-grade AI.',
  },
  {
    step: '03',
    icon: <BarChart3 size={32} />,
    title: 'Get Instant Insights',
    desc: 'View sentiment scores, trends, and key themes instantly.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      {steps.map((item, i) => (
        <motion.div
          key={i}
          className={styles.howCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
        >
          <div className={styles.howIcon}>{item.icon}</div>
          <span className={styles.step}>{item.step}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
