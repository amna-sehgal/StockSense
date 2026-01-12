'use client';
import { motion } from 'framer-motion';
import styles from './landing.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <motion.h2
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring' }}
      >
        Ready to See What the Market Thinks?
      </motion.h2>

      <motion.button
        className={styles.ctaButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Analyze a Stock Now
      </motion.button>

      <p className={styles.disclaimer}>
        For informational purposes only. Not financial advice.
      </p>
    </section>
  );
}
