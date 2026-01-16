"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styles from "./senti.module.css";

type Sentiment = "negative" | "neutral" | "positive";

interface Props {
  sentiment: Sentiment;
}

export default function SentiAnalysis({ sentiment }: Props) {
  const controls = useAnimation();

  useEffect(() => {
    const angleMap: Record<Sentiment, number> = {
      negative: -60, 
      neutral: 0,    
      positive: 60,  
    };

    controls.start({
      rotate: angleMap[sentiment],
      transition: { type: "spring", stiffness: 100, damping: 12 },
    });
  }, [sentiment, controls]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.gaugeContainer}>
        
        <div className={styles.gaugeArc}></div>

     
        <div className={styles.labelsContainer}>
          <span className={styles.labelNeg}>Negative</span>
          <span className={styles.labelNeu}>Neutral</span>
          <span className={styles.labelPos}>Positive</span>
        </div>

     
        <div className={styles.needleWrapper}>
          <motion.div
            className={styles.needle}
            animate={controls}
            initial={{ rotate: 0 }}
          />
          <div className={styles.needleCap} />
        </div>
      </div>
    </div>
  );
}