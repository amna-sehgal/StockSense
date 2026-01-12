'use client';
import { motion } from 'framer-motion';
import styles from './navbar.module.css';

const links = [
  'Home',
  'Stock Search',
  'Sentiment Dashboard',
  'News + Social Feed',
  'Insights Summary',
];

export default function Navbar() {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* LEFT – BRAND */}
      <div className={styles.navLeft}>
        <span className={styles.brand}>StockSense</span>
      </div>

      {/* RIGHT – LINKS */}
      <div className={styles.navRight}>
        {links.map((link, i) => (
          <a key={i} href="#" className={styles.navLink}>
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
