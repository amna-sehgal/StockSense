'use client';
import { motion, Variants } from 'framer-motion';
import { LineChart, Radar, Sparkles, Brain } from 'lucide-react';
import styles from './landing.module.css';

const features = [
  { title: 'Real-Time Sentiment Analysis', icon: <Radar size={32} /> },
  { title: 'Multi-Source Data', icon: <LineChart size={32} /> },
  { title: 'Visual Insights', icon: <Sparkles size={32} /> },
  { title: 'AI-Generated Summary', icon: <Brain size={32} /> },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section className={styles.featuresWrapper}>
      {}
      <motion.h2
        className={styles.featuresHeading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Features
      </motion.h2>

      <div className={styles.timelineWrapper}>
        {}
        <motion.div
          className={styles.timelineLine}
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className={styles.cardsContainer}
        >
          {features.map((f, i) => {
            const side = i % 2 === 0 ? 'right' : 'left';
            const rodWidth = side === 'right' ? 40 : 50;

            return (
              <motion.div
                key={i}
                className={`${styles.featureCard} ${styles[side]}`}
                variants={cardVariants}
              >
                {}
                <motion.div
                  className={styles.subRod}
                  initial={{ width: 0 }}
                  whileInView={{ width: rodWidth }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                />

                {}
                <motion.div
                  className={styles.cardContent}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                >
                  <div className={styles.iconBox}>{f.icon}</div>
                  <h3>{f.title}</h3>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}




