'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Search, BrainCircuit, BarChart3 } from 'lucide-react';

import styles from './landing.module.css';
const cardPositions = {
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 2,
  },
  left: {
    x: -180,
    scale: 0.6,
    opacity: 0.4,
    zIndex: 1,
  },
  right: {
    x: 180,
    scale: 0.6,
    opacity: 0.4,
    zIndex: 1,
  },
};


const cards = [
  {
    icon: <Search size={32} />,
    title: 'Search Any Stock',
    desc: 'Enter a stock ticker like TSLA, AAPL, or MSFT.',
  },
  {
    icon: <BrainCircuit size={32} />,
    title: 'AI Analyzes the Market',
    desc: 'We scan news and social data using financial-grade AI.',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Get Instant Insights',
    desc: 'View sentiment scores, trends, and key themes instantly.',
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.howWrapper}>
      {/* LEFT SIDE */}
      <div className={styles.howLeft}>
        <h2 className={styles.howHeading}>How It Works</h2>
        <p className={styles.howSub}>
          One smooth flow. Three simple steps. Real-time AI insight.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.slider}>
        {cards.map((card, i) => {
          const position =
            i === active
              ? 'center'
              : i === (active + 1) % cards.length
              ? 'right'
              : 'left';

          return (
            <motion.div
              key={i}
              className={styles.howCard} // 🔥 your existing glowing card
              animate={position}
              variants={cardPositions}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.howIcon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}



