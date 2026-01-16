'use client';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import styles from './landing.module.css';
=======
import styles from './searchPage.module.css';
>>>>>>> 3958ae753756ad285512d1c12b6e8d17fba4baa8

type Point = { x: number; y: number };

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPoints(prev => {
        const newPoint = { x: e.clientX, y: e.clientY };
        const updated = [...prev, newPoint];
        return updated.slice(-12); // TRAIL LENGTH
      });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {points.map((point, i) => (
        <span
          key={i}
          className={styles.cursorTrail}
          style={{
            left: point.x,
            top: point.y,
            opacity: i / points.length,
            transform: `scale(${i / points.length})`,
          }}
        />
      ))}
    </>
  );
}
