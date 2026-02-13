'use client'

import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  emoji: string
  left: number
  duration: number
  delay: number
  size: string
}

const emojis = ['💕', '🐕', '🐈', '❤️', '🐶', '😸']

export default function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Generate random floating elements
    const generatedElements: FloatingElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 2,
      size: ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)],
    }))
    setElements(generatedElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} animate-pulse opacity-60`}
          style={{
            left: `${element.left}%`,
            bottom: '-50px',
            animation: `float ${element.duration}s ease-in infinite`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.emoji}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            bottom: -50px;
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            bottom: 100vh;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
