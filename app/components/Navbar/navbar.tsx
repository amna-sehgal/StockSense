'use client';
import { motion } from 'framer-motion';
import styles from './navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Stock Search', href: '/search' },
    { name: 'Sentiment Dashboard', href: 'https://sentimenta-sa.streamlit.app/' },
    { name: 'News + Social Feed', href: '/news&feed' },
    { name: 'Insights Summary', href: '/insights' },
  ];

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
  
      <div className={styles.navLeft}>
        <Link href="/" className={styles.brand}>
          StockSense
        </Link>
      </div>

      
      <div className={styles.navRight}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${
              pathname === link.href ? styles.active : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
