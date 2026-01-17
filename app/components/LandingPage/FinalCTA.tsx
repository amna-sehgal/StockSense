'use client';
import { motion } from 'framer-motion';
import styles from './landing.module.css';
import Link from 'next/dist/client/link';

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
        <Link href="/search">Analyze a Stock Now</Link>
      </motion.button>

      <p className={styles.disclaimer}>
        For informational purposes only. Not financial advice.
      </p>
      <p className={styles.disclaimer1}>
        Made with ❤️ by DebugDivas for BrAInWave
      </p>
      
    </section>
  );
}
