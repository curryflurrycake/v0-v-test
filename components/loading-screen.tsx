'use client'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-accent/10 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated hearts */}
        <div className="flex justify-center gap-3">
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>
            💕
          </div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.1s' }}>
            💕
          </div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>
            💕
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <p className="text-xl font-semibold text-primary">
            Loading your love story...
          </p>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: '0.1s' }}
            ></div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: '0.2s' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
