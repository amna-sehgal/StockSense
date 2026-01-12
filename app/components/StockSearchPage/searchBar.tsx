'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, TrendingUp, TrendingDown, X } from 'lucide-react';
import styles from './search.module.css';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const stocks = [
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.30, change: 15 },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.95, change: -8 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 380.45, change: 12 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 139.80, change: -7 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 181.20, change: 18 },
    { symbol: 'NVDA', name: 'Nvidia Corporation', price: 875.00, change: 22 },
    { symbol: 'META', name: 'Meta Platforms', price: 312.45, change: -10 },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: 245.60, change: -6 },
    { symbol: 'INTC', name: 'Intel Corporation', price: 34.50, change: 9 },
    { symbol: 'IBM', name: 'IBM Corporation', price: 198.75, change: 5 },
    { symbol: 'ORACLE', name: 'Oracle Corporation', price: 132.40, change: 8 },
    { symbol: 'SAP', name: 'SAP SE', price: 108.50, change: 3 },
  ];

  const filteredStocks = searchQuery.length > 0 
    ? stocks.filter(stock =>
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : stocks.slice(0, 4); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(true);
    setSelectedIndex(-1);
  };

  const handleSelectStock = (stock) => {
    setSearchQuery(stock.symbol);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
     suggestions to register
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev < filteredStocks.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev > 0 ? prev - 1 : filteredStocks.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelectStock(filteredStocks[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
      default:
        break;
    }
  };

  const StockNews = [
    {
      id: 1,
      title: 'Tesla Stock Surges 15% on Record Q4 Earnings',
      category: 'HIGH',
      trend: 'up',
      image: 'https://images.pexels.com/photos/3874587/pexels-photo-3874587.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 10, 2026',
      source: 'Financial Times',
      description: 'Tesla announces record quarterly earnings beating analyst expectations.',
    },
    {
      id: 2,
      title: 'Apple Faces Supply Chain Challenges, Stock Down 8%',
      category: 'LOW',
      trend: 'down',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 9, 2026',
      source: 'Bloomberg',
      description: 'Production delays impact Apple\'s stock performance this week.',
    },
    {
      id: 3,
      title: 'Microsoft Cloud Services Hit New Milestone, Stock UP 12%',
      category: 'HIGH',
      trend: 'up',
      image: 'https://tse1.mm.bing.net/th/id/OIP.sB7_77W2S66usae1gBnbpAHaEB?pid=Api&P=0&h=180',
      date: 'Jan 8, 2026',
      source: 'Reuters',
      description: 'Cloud revenue growth drives Microsoft to new all-time highs.',
    },
    {
      id: 4,
      title: 'Meta Stock Falls 10% Amid Regulatory Scrutiny',
      category: 'LOW',
      trend: 'down',
      image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 7, 2026',
      source: 'CNBC',
      description: 'New regulatory concerns weigh on Meta\'s market performance.',
    },
    {
      id: 5,
      title: 'Amazon Posts Strong Holiday Sales, Stock UP 18%',
      category: 'HIGH',
      trend: 'up',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 6, 2026',
      source: 'MarketWatch',
      description: 'E-commerce giant surpasses holiday sales projections significantly.',
    },
    {
      id: 6,
      title: 'Google Stock Declines 7% Over Antitrust Concerns',
      category: 'LOW',
      trend: 'down',
      image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 5, 2026',
      source: 'Wall Street Journal',
      description: 'Antitrust investigations raise concerns about Google\'s future.',
    },
    {
      id: 7,
      title: 'Nvidia AI Chip Sales Boom, Stock Reaches New Peak UP 22%',
      category: 'HIGH',
      trend: 'up',
      image: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 4, 2026',
      source: 'TechCrunch',
      description: 'Demand for AI processing chips drives Nvidia to record highs.',
    },
    {
      id: 8,
      title: 'Intel Announces New Processor Line, Stock UP 9%',
      category: 'HIGH',
      trend: 'up',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 3, 2026',
      source: 'Investopedia',
      description: 'Next-generation processors promise significant performance improvements.',
    },
    {
      id: 9,
      title: 'Netflix Stock Drops 6% Amid Subscriber Slowdown',
      category: 'LOW',
      trend: 'down',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      date: 'Jan 2, 2026',
      source: 'Yahoo Finance',
      description: 'Streaming giant reports lower than expected subscriber growth this quarter.',
    },
  ];

  return (
    <div className={styles.container}>
     
      <motion.div
        className={styles.searchContainer}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className={styles.searchBoxWrapper}>
          <div className={styles.searchBox}>
            <SearchIcon size={24} />
            <input
              type="text"
              placeholder="Search a stock (TSLA, AAPL, MSFT...)"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(true)}
              onBlur={handleBlur}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
                className={styles.clearButton}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Suggestions Dropdown */}
          <motion.div
            className={styles.suggestionsContainer}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: showSuggestions && filteredStocks.length > 0 ? 1 : 0,
              y: showSuggestions && filteredStocks.length > 0 ? 0 : -10,
            }}
            transition={{ duration: 0.2 }}
            style={{
              pointerEvents: showSuggestions && filteredStocks.length > 0 ? 'auto' : 'none',
            }}
          >
            {filteredStocks.slice(0, 8).map((stock, index) => (
              <motion.div
                key={stock.symbol}
                className={`${styles.suggestionItem} ${
                  selectedIndex === index ? styles.selected : ''
                }`}
                onClick={() => handleSelectStock(stock)}
                whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={styles.suggestionContent}>
                  <div className={styles.suggestionHeader}>
                    <span className={styles.symbol}>{stock.symbol}</span>
                    <span className={`${styles.stockChange} ${stock.change > 0 ? styles.positive : styles.negative}`}>
                      {stock.change > 0 ? '+' : ''}{stock.change}%
                    </span>
                  </div>
                  <div className={styles.suggestionName}>{stock.name}</div>
                  <div className={styles.suggestionPrice}>${stock.price.toFixed(2)}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      
      <motion.h2
        className={styles.newsTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        📰 Stock Market News & Insights
      </motion.h2>

     
      <motion.div
        className={styles.newsGrid}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {StockNews.map((article, index) => (
          <motion.div
            key={article.id}
            className={`${styles.newsCard} ${styles[article.category.toLowerCase()]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ translateY: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
          >
            
            <div className={styles.imageContainer}>
              <img src={article.image} alt={article.title} className={styles.articleImage} />
              <div className={`${styles.badge} ${styles[article.trend]}`}>
                {article.trend === 'up' ? (
                  <>
                    <TrendingUp size={16} /> UP
                  </>
                ) : (
                  <>
                    <TrendingDown size={16} /> DOWN
                  </>
                )}
              </div>
            </div>

            
            <div className={styles.cardContent}>
              <div className={styles.meta}>
                <span className={styles.date}>{article.date}</span>
                <span className={styles.source}>{article.source}</span>
              </div>

              <h3 className={styles.articleTitle}>{article.title}</h3>

              <p className={styles.description}>{article.description}</p>

              <motion.button
                className={styles.readMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}