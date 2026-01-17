'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Strictly Stock Market Reds and Greens
const colors = ['#22c55e', '#ef4444', '#10b981', '#f87171'] 
const totalPoints = 40
const xPoints = Array.from({ length: totalPoints }, (_, i) => 20 + i * (370 / totalPoints))
const baseY = 270 
const originX = 20 
const paddingTop = 20

export default function ProfessionalStockChart() {
  const [linesData, setLinesData] = useState(() => 
    colors.map(() => ({
      points: Array.from({ length: totalPoints }, () => baseY),
      velocity: 0
    }))
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setLinesData((prevLines) =>
        prevLines.map((line) => {
          const lastPoint = line.points[line.points.length - 1]
          
          // Volatile Physics
          let acceleration = (Math.random() - 0.5) * 15
          
          // High-impact spikes/falls (8% chance)
          if (Math.random() > 0.92) {
            acceleration = (Math.random() - 0.5) * 110 
          }

          let newVelocity = (line.velocity + acceleration) * 0.65
          let nextPoint = lastPoint + newVelocity

          // Floor/Ceiling constraints
          if (nextPoint < paddingTop) { nextPoint = paddingTop; newVelocity = 30 }
          if (nextPoint > baseY) { nextPoint = baseY; newVelocity = -30 }

          return { 
            points: [...line.points.slice(1), nextPoint], 
            velocity: newVelocity 
          }
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Forces the first point of every path to be the Origin (OriginX, BaseY)
  const pathFromPoints = (yPoints: number[]) =>
    yPoints.map((y, i) => (i === 0 ? `M${originX},${baseY}` : `L${xPoints[i]},${y}`)).join(' ')

  return (
    <div style={{ backgroundColor: '#000000', padding: '60px', display: 'inline-block' }}>
      <svg width={420} height={320} viewBox="0 0 420 320" style={{ overflow: 'visible', background: '#000' }}>
        <defs>
          {colors.map((color, i) => (
            <marker
              key={`arrow-${i}`}
              id={`arrow-${i}`}
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 Z" fill={color} />
            </marker>
          ))}
          {/* Neon Bloom effect for the lines */}
          <filter id="bloom">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* BOLD LIGHT AXES */}
        {/* Y-Axis */}
        <line x1={originX} y1={paddingTop - 10} x2={originX} y2={baseY} stroke="#ffffffb7" strokeWidth="3" strokeLinecap="round" />
        {/* X-Axis */}
        <line x1={originX} y1={baseY} x2={400} y2={baseY} stroke="#ffffffad" strokeWidth="3" strokeLinecap="round" />

        {linesData.map((data, idx) => (
          <motion.path
            key={idx}
            initial={false}
            animate={{ d: pathFromPoints(data.points) }}
            transition={{ duration: 0.05, ease: "linear" }}
            fill="transparent"
            stroke={colors[idx]}
            strokeWidth={2.5}
            filter="url(#bloom)"
            markerEnd={`url(#arrow-${idx})`}
            style={{ opacity: 0.9 }}
          />
        ))}
      </svg>
    </div>
  )
}



