'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './searchPage.module.css'
import { motion } from 'framer-motion';

export default function search() {
    const router = useRouter();
    const texts = [
        "Analyzing market trends for opportunities.",
        "Real-time stock prices and news.",
        "Personalized investment recommendations.",
        "AI-based stock price predictions.",
        "In-depth market and financial reports."
    ]

  
    const stocksData = [
        {
            id: 1,
            symbol: "AAPL",
            name: "Apple Inc.",
            price: 189.45,
            change: 2.5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdEdZutLGhFalA274yXkte5G2gFp2ShGrOw&s",
            description: "Apple surpasses Q1 expectations with strong iPhone sales and services growth.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Low",
            trend: "Bullish",
            priceRange: "$50 - $100"
        },
        {
            id: 2,
            symbol: "TSLA",
            name: "Tesla Inc.",
            price: 242.84,
            change: -3.2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AIA0LYgXqoLcwS40DLo3IHfn32GbjUZNvQ&s",
            description: "Tesla faces production challenges but maintains market leadership in EVs.",
            marketCap: "Large",
            sector: "Technology",
            risk: "High",
            trend: "Bearish",
            priceRange: "Over $100"
        },
        {
            id: 3,
            symbol: "MSFT",
            name: "Microsoft",
            price: 378.91,
            change: 4.1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
            description: "Microsoft's cloud services drive record quarterly revenue growth.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Low",
            trend: "Bullish",
            priceRange: "Over $100"
        },
        {
            id: 4,
            symbol: "JPM",
            name: "JPMorgan Chase",
            price: 195.32,
            change: 1.8,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0RL2sNMqw5Hh3MOPNEmC-nPu22wX16oi7A&s",
            description: "Banking sector shows resilience with improved lending margins.",
            marketCap: "Large",
            sector: "Finance",
            risk: "Low",
            trend: "Bullish",
            priceRange: "$50 - $100"
        },
        {
            id: 5,
            symbol: "NVDA",
            name: "NVIDIA",
            price: 132.45,
            change: -1.5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu42wbJpv5_Bp0FNCQxq08MGZ6YnlQ9DT21Q&s",
            description: "AI chip demand moderates but long-term outlook remains strong.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Medium",
            trend: "Consolidation",
            priceRange: "$50 - $100"
        },
        {
            id: 6,
            symbol: "AMZN",
            name: "Amazon",
            price: 178.55,
            change: 2.9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
            description: "Amazon's AWS division posts impressive growth figures.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Medium",
            trend: "Breakout",
            priceRange: "$50 - $100"
        },
        {
            id: 7,
            symbol: "JNJ",
            name: "Johnson & Johnson",
            price: 152.78,
            change: 0.5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH-gVhyCawo77qEW7p40eLlMjzHX-OgI6rw&s",
            description: "Healthcare leader reports steady performance in pharma segment.",
            marketCap: "Large",
            sector: "Healthcare",
            risk: "Low",
            trend: "Consolidation",
            priceRange: "$50 - $100"
        },
        {
            id: 8,
            symbol: "MRNA",
            name: "Moderna",
            price: 28.40,
            change: 3.2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsL8XxnCNtJ-OaA-vrxk6OIztrY_dDHNxEA&s",
            description: "Moderna explores new vaccine candidates in emerging markets.",
            marketCap: "Mid",
            sector: "Healthcare",
            risk: "High",
            trend: "Breakout",
            priceRange: "$10 - $50"
        },
    ]

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [selectedMarketCap, setSelectedMarketCap] = useState("");
    const [selectedSector, setSelectedSector] = useState("");
    const [selectedRisk, setSelectedRisk] = useState("");
    const [selectedTrend, setSelectedTrend] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");

    const filteredStocks = stocksData.filter(stock => {
        if (selectedMarketCap && stock.marketCap !== selectedMarketCap) return false;
        if (selectedSector && stock.sector !== selectedSector) return false;
        if (selectedRisk && stock.risk !== selectedRisk) return false;
        if (selectedTrend && stock.trend !== selectedTrend) return false;
        if (selectedPrice && stock.priceRange !== selectedPrice) return false;
        return true;
    });

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !deleting) {
            setTimeout(() => setDeleting(true), 1200);
            return;
        }

        if (subIndex === 0 && deleting) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
            setText(texts[index].substring(0, subIndex));
        }, deleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);
    return (
        <>

            <motion.div className={styles.parent}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className={styles.div1}>
                    <motion.video
                        className={styles.bgVideo}
                        autoPlay
                        muted
                        loop
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <source src="/media/BGvIDEO.mp4" type="video/mp4" />
                    </motion.video>

                    <div className={styles.contentOverlay}>
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Makes your searching easy
                        </motion.h1>

                        <div className={styles.searchContainer}>
                            <motion.input
                                type="text"
                                placeholder="Search stocks..."
                                className={styles.searchInput}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            />
                            <motion.button
                                className={styles.enterButton}
                                onClick={() => router.push('/sentiments')}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enter
                            </motion.button>
                        </div>
                    </div>
                </div>

                <motion.div
                    className={styles.div2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.video
                        className={styles.div2Video}
                        autoPlay
                        muted
                        loop
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <source src="/media/character.mp4" type="video/mp4" />
                    </motion.video>
                    <motion.div
                        className={styles.div2Content}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <h1>Stock Market News & Insights</h1>
                        <h2>
                            {text}
                            |
                        </h2>
                    </motion.div>
                </motion.div>




                
                 <motion.div
      className={styles.div3}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.2 }}
    >
      <motion.h2
        className={styles.filterHeading}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Filter
      </motion.h2>

      <motion.div
        className={styles.filterSection}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className={styles.filterTitle}>Market Cap</h3>
        <div className={styles.filterOptions}>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="marketCap"
              value="Large"
              onChange={(e) => setSelectedMarketCap(e.target.value)}
              checked={selectedMarketCap === "Large"}
            />
            <span>Large</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="marketCap"
              value="Mid"
              onChange={(e) => setSelectedMarketCap(e.target.value)}
              checked={selectedMarketCap === "Mid"}
            />
            <span>Mid</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="marketCap"
              value="Small"
              onChange={(e) => setSelectedMarketCap(e.target.value)}
              checked={selectedMarketCap === "Small"}
            />
            <span>Small</span>
          </label>
        </div>
      </motion.div>

      <motion.div
        className={styles.filterSection}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className={styles.filterTitle}>Sector</h3>
        <div className={styles.filterOptions}>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="sector"
              value="Technology"
              onChange={(e) => setSelectedSector(e.target.value)}
              checked={selectedSector === "Technology"}
            />
            <span>Technology</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="sector"
              value="Finance"
              onChange={(e) => setSelectedSector(e.target.value)}
              checked={selectedSector === "Finance"}
            />
            <span>Finance</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="sector"
              value="Healthcare"
              onChange={(e) => setSelectedSector(e.target.value)}
              checked={selectedSector === "Healthcare"}
            />
            <span>Healthcare</span>
          </label>
        </div>
      </motion.div>

      <motion.div
        className={styles.filterSection}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className={styles.filterTitle}>Risk Level</h3>
        <div className={styles.filterOptions}>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="riskLevel"
              value="Low"
              onChange={(e) => setSelectedRisk(e.target.value)}
              checked={selectedRisk === "Low"}
            />
            <span>Low</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="riskLevel"
              value="Medium"
              onChange={(e) => setSelectedRisk(e.target.value)}
              checked={selectedRisk === "Medium"}
            />
            <span>Medium</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="riskLevel"
              value="High"
              onChange={(e) => setSelectedRisk(e.target.value)}
              checked={selectedRisk === "High"}
            />
            <span>High</span>
          </label>
        </div>
      </motion.div>

      <motion.div
        className={styles.filterSection}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className={styles.filterTitle}>By Trend</h3>
        <div className={styles.filterOptions}>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="trend"
              value="Bullish"
              onChange={(e) => setSelectedTrend(e.target.value)}
              checked={selectedTrend === "Bullish"}
            />
            <span>Bullish</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="trend"
              value="Bearish"
              onChange={(e) => setSelectedTrend(e.target.value)}
              checked={selectedTrend === "Bearish"}
            />
            <span>Bearish</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="trend"
              value="Breakout"
              onChange={(e) => setSelectedTrend(e.target.value)}
              checked={selectedTrend === "Breakout"}
            />
            <span>Breakout Stocks</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="trend"
              value="Consolidation"
              onChange={(e) => setSelectedTrend(e.target.value)}
              checked={selectedTrend === "Consolidation"}
            />
            <span>Consolidation</span>
          </label>
        </div>
      </motion.div>

      <motion.div
        className={styles.filterSection}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className={styles.filterTitle}>By Stock Price</h3>
        <div className={styles.filterOptions}>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="price"
              value="Under $10"
              onChange={(e) => setSelectedPrice(e.target.value)}
              checked={selectedPrice === "Under $10"}
            />
            <span>Under $10</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="price"
              value="$10 - $50"
              onChange={(e) => setSelectedPrice(e.target.value)}
              checked={selectedPrice === "$10 - $50"}
            />
            <span>$10 - $50</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="price"
              value="$50 - $100"
              onChange={(e) => setSelectedPrice(e.target.value)}
              checked={selectedPrice === "$50 - $100"}
            />
            <span>$50 - $100</span>
          </label>
          <label className={styles.filterOption}>
            <input
              type="radio"
              name="price"
              value="Over $100"
              onChange={(e) => setSelectedPrice(e.target.value)}
              checked={selectedPrice === "Over $100"}
            />
            <span>Over $100</span>
          </label>
        </div>
      </motion.div>
    </motion.div>




                   <div className={styles.div4}>
      <div className={styles.stocksContainer}>
        {filteredStocks.length > 0 ? (
          <h2 className={styles.stocksTitle}>
            Market Updates ({filteredStocks.length})
          </h2>
        ) : (
          <div className={styles.noDataContainer}>
            <h2 className={styles.stocksTitle}>No stocks match your filters</h2>
            <img
              src="/media/NO.jpg"
              alt="No Data"
              className={styles.noDataImage}
            />
          </div>
        )}

        <div className={styles.stocksGrid}>
          {filteredStocks.map((stock) => (
            <motion.div
              key={stock.id}
              className={styles.stockCard}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, ease: "easeOut", delay: stock.id * 0.05 }} 
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }} 
              whileTap={{ scale: 0.95 }} 
            >
              <div className={styles.stockHeader}>
                <img
                  src={stock.image}
                  alt={stock.symbol}
                  className={styles.stockImage}
                />
                <div className={styles.stockInfo}>
                  <div className={styles.symbolName}>
                    <h3 className={styles.symbol}>{stock.symbol}</h3>
                    <p className={styles.companyName}>{stock.name}</p>
                  </div>
                  <div
                    className={`${styles.changeIndicator} ${
                      stock.change >= 0 ? styles.up : styles.down
                    }`}
                  >
                    <span className={styles.arrow}>
                      {stock.change >= 0 ? "▲" : "▼"}
                    </span>
                    <span className={styles.changeValue}>
                      {Math.abs(stock.change)}%
                    </span>
                  </div>
                </div>
              </div>
              <p className={styles.stockDescription}>{stock.description}</p>
              <div className={styles.stockFooter}>
                <span className={styles.price}>
                  ${stock.price.toFixed(2)}
                </span>
                <span className={styles.riskBadge}>{stock.risk} Risk</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
            </motion.div>

        </>
    )
}