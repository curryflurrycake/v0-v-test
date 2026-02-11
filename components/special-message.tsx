export default function SpecialMessage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          A Message From My Heart
        </h2>
      </div>

      {/* Message Card */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border-3 border-primary/20 shadow-lg">
        <div className="space-y-6 text-center">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            From the moment I met you, I knew my life would never be the same. You bring light to my darkest days and make every moment special—even the ordinary ones become extraordinary.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto opacity-60" />

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Thank you for being you. Thank you for the laughter, the comfort, and the unconditional love. You are not just my Valentine—you are my favorite person, my best friend, and my home.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto opacity-60" />

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            On this day of love, I want you to know that every day with you is a gift. Here's to more memories, more laughter, more adventures, and a lifetime of loving you.
          </p>

          <div className="pt-6">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Forever yours ❤️
            </p>
            <p className="text-lg text-foreground/70 mt-2">
              Yours on Valentine's Day and every day
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-center gap-4 text-4xl">
        <span className="animate-bounce" style={{ animationDelay: '0s' }}>
          💕
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
          💗
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>
          💖
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>
          💝
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>
          💓
        </span>
      </div>
    </div>
  )
}
