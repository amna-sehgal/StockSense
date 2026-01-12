'use client';
import { motion } from 'framer-motion';
import {
  LineChart,
  Radar,
  Sparkles,
  Brain
} from 'lucide-react';
import styles from './landing.module.css';

const features = [
  {
    title: 'Real-Time Sentiment Analysis',
    icon: <Radar size={32} />,
  },
  {
    title: 'Multi-Source Data',
    icon: <LineChart size={32} />,
  },
  {
    title: 'Visual Insights',
    icon: <Sparkles size={32} />,
  },
  {
    title: 'AI-Generated Summary',
    icon: <Brain size={32} />,
  },
];

export default function Features() {
  return (
    <section className={styles.featureGrid}>
      {features.map((f, i) => (
        <motion.div
          key={i}
          className={styles.featureCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
        >
          <div className={styles.iconBox}>
            {f.icon}
          </div>
          <h3>{f.title}</h3>
        </motion.div>
      ))}
    </section>
  );
}

