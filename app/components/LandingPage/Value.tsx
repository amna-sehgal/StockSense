'use client';

import React from 'react';
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import { Clock, Eye, TrendingUp, Shield } from 'lucide-react';
import styles from './value.module.css';

interface ValueItem {
  icon: React.ReactNode;
  text: string;
}

const values: ValueItem[] = [
  { icon: <Clock size={22} />, text: 'Save hours of research time' },
  { icon: <Eye size={22} />, text: 'Understand market mood at a glance' },
  { icon: <TrendingUp size={22} />, text: 'Identify bullish or bearish signals early' },
  { icon: <Shield size={22} />, text: 'Reduce emotional bias in investing' },
];


const cubicBezier = [0.4, 0, 0.2, 1] as const;

const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number): TargetAndTransition => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { 
        delay: i * 0.2, 
        duration: 1.4, 
        ease: cubicBezier 
      },
      opacity: { 
        delay: i * 0.2, 
        duration: 0.01 
      }
    },
  }),
};

export default function Value() {
  return (
    <section className={styles.valueSection}>
      <div className={styles.masterWrapper}>
        
        {}
        <svg className={styles.masterOutline} viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.rect
            x="0.5" y="0.5" width="99" height="99" rx="2"
            fill="none" 
            stroke="#10b981" 
            strokeWidth="0.2"
            variants={drawVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </svg>

        <div className={styles.valueCard}>
          <motion.h2
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6, duration: 0.8 }}
          >
            Make Smarter Decisions, Faster.
          </motion.h2>

          <div className={styles.valueGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.itemContainer}>
                
                {}
                <svg className={styles.itemOutline} viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.rect
                    x="1" y="1" width="98" height="98" rx="6"
                    fill="none" 
                    stroke="rgba(16, 185, 129, 0.4)"
                    strokeWidth="0.8"
                    variants={drawVariants}
                    custom={i + 2} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                </svg>

                {}
                <motion.div 
                  className={styles.valueItem}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ delay: (i + 3) * 0.3, duration: 0.6 }}
                >
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <p>{v.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}