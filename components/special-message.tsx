export default function SpecialMessage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          💌
        </h2>
      </div>

      {/* Message Card */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border-3 border-primary/20 shadow-lg">
        <div className="space-y-6 text-center">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Hi love, so here I am working wt this HAHAHAH like ano oras na ginagawa ko pa to. sooo time check, 3:56am ng Feb 14 hehe. pero okay lang :D
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto opacity-60" />

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            This vdays is kinda diff for us kasi super adv natin sya naceleb and everything bc you have many ganaps but it is okaaay. Babu ko, I love you, thank you for being just you love. Sobrang grateful ko talaga sayo po.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto opacity-60" />

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Always remember this babu ko, I love everything about you and everything that we do. All your so-called flaws and everything. Walang bawas, laging dagdag lang
            sa pagmamahal ko sayo. I will always take care of you po.. You'll always have me!
          </p>

          <div className="pt-6">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Ikaw at ikaw lang, babu ko. ❤️
            </p>
            <p className="text-lg text-foreground/70 mt-2">
              Mahal na mahal po kita, wifey ;)
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
