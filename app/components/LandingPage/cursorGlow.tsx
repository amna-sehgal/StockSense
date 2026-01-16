'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './landing.module.css';

type Point = {
  x: number;
  y: number;
  type: 'bull' | 'bear';
  id: number;
};

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const lastY = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      // Determine direction: If Y is smaller, cursor moved UP (Bullish)
      const type = y < lastY.current ? 'bull' : 'bear';
      lastY.current = y;

      const newPoint: Point = { x, y, type, id: Date.now() };

      setPoints((prev) => {
        const updated = [...prev, newPoint];
        return updated.slice(-15); // Length of the trail
      });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className={styles.container}>
      {points.map((point, i) => (
        <div
          key={point.id}
          className={`${styles.candle} ${point.type === 'bull' ? styles.bull : styles.bear}`}
          style={{
            left: point.x,
            top: point.y,
            // Creates a trailing fade effect
            opacity: i / points.length,
            // Shrinks the older candles
            transform: `scale(${0.4 + (i / points.length) * 0.6})`,
          }}
        >
          {/* Vertical wick line */}
          <div className={styles.wick} />
        </div>
      ))}
    </div>
  );
}
