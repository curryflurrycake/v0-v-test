'use client'

import { useState } from 'react'
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

  const handleNo = () => {
    setNoCount(noCount + 1)
    setYesSize(yesSize + 0.3)
  }

  const handleYes = () => {
    onYes()
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
      <div className="flex gap-4 justify-center flex-wrap items-center min-h-16">
        <Button
          onClick={handleYes}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white transition-all duration-200"
          style={{
            transform: `scale(${1 + yesSize * 0.2})`,
          }}
        >
          Yes! 💕
        </Button>

        {noCount < 9 && (
          <Button
            onClick={handleNo}
            size="lg"
            variant="outline"
            className="border-2 border-foreground/30 text-foreground hover:border-foreground/50 bg-transparent"
            style={{
              transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
            }}
          >
            No
          </Button>
        )}

        {noCount === 9 && (
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

      {noCount === 9 && (
        <p className="text-secondary text-xl font-bold">
          You know deep down you want to say yes! 😘
        </p>
      )}
    </div>
  )
}
