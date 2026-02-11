'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'

const funMessages = [
  "Are you sure? 💔",
  "Really?? 🥺",
  "Think about it... 💭",
  "Last chance! 😢",
  "You know you want to! 😉",
  "Come on... 💕",
  "Don't break my heart! 💔",
  "Please? 🙏",
  "I'm waiting... ⏳",
]

interface ValentineQuestionProps {
  onYes: () => void
}

export default function ValentineQuestion({ onYes }: ValentineQuestionProps) {
  const [noCount, setNoCount] = useState(0)
  const [yesSize, setYesSize] = useState(1)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [yesPosition, setYesPosition] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const yesButtonRef = useRef<HTMLButtonElement>(null)

  const handleNo = () => {
    setNoCount(noCount + 1)
    setYesSize(yesSize + 0.3)
  }

  const handleYes = () => {
    onYes()
  }

  const handleNoMouseEnter = () => {
    if (!noButtonRef.current) return

    const rect = noButtonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Generate random direction away from cursor for No button
    const angle = Math.random() * Math.PI * 2
    const distance = 80 + Math.random() * 60

    const newX = Math.cos(angle) * distance
    const newY = Math.sin(angle) * distance

    setNoPosition({ x: newX, y: newY })

    // Also move the Yes button to a random position
    const yesAngle = Math.random() * Math.PI * 2
    const yesDistance = 40 + Math.random() * 40

    const yesNewX = Math.cos(yesAngle) * yesDistance
    const yesNewY = Math.sin(yesAngle) * yesDistance

    setYesPosition({ x: yesNewX, y: yesNewY })
  }

  return (
    <div className="text-center space-y-12">
      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance">
          Will you be my Valentine?
        </h1>
        <p className="text-lg md:text-xl text-foreground/70">
          Click yes to see our memories together ❤️
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center flex-wrap items-center min-h-20 relative">
        <Button
          ref={yesButtonRef}
          onClick={handleYes}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 ease-out"
          style={{
            transform: `scale(${1 + yesSize * 0.2}) translate(${yesPosition.x}px, ${yesPosition.y}px)`,
          }}
        >
          Yes! 💕
        </Button>

        {noCount < 9 && (
          <Button
            ref={noButtonRef}
            onClick={handleNo}
            onMouseEnter={handleNoMouseEnter}
            size="lg"
            variant="outline"
            className="border-2 border-foreground/30 text-foreground hover:border-foreground/50 bg-transparent transition-transform duration-300 ease-out pointer-events-auto cursor-pointer"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            }}
          >
            No
          </Button>
        )}

        {noCount >= 9 && (
          <Button
            onClick={handleYes}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white animate-pulse"
          >
            Give in? 😄
          </Button>
        )}
      </div>

      {/* Fun messages */}
      {noCount > 0 && noCount < 9 && (
        <p className="text-primary text-lg font-medium animate-bounce">
          {funMessages[Math.min(noCount - 1, funMessages.length - 1)]}
        </p>
      )}

      {noCount >= 9 && (
        <p className="text-secondary text-xl font-bold">
          You know deep down you want to say yes! 😘
        </p>
      )}
    </div>
  )
}
