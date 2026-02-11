export default function PhotoboothSection() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Our Photobooth Memories
        </h2>
        <p className="text-foreground/60">
          Fun times captured in a strip
        </p>
      </div>

      {/* Photobooth Strip Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Static Photobooth Strip */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-full aspect-auto bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl p-8 flex items-center justify-center border-4 border-primary/20">
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-lg">
                📸 Photobooth Strip Image
              </span>
            </div>
          </div>
          <p className="text-center text-sm text-foreground/60 font-medium">
            Our special moment captured
          </p>
        </div>

        {/* Animated GIF Photobooth Strip */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-full aspect-auto bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center border-4 border-secondary/20">
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-lg">
                🎬 Photobooth GIF
              </span>
            </div>
          </div>
          <p className="text-center text-sm text-foreground/60 font-medium">
            Watch it come alive
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white/60 rounded-2xl p-8 text-center space-y-3 border-2 border-primary/10">
        <p className="text-foreground/80 text-lg leading-relaxed">
          These are our favorite memories from the photobooth! Every smile, every silly face, and every moment of laughter captured forever. This is what makes you special to me.
        </p>
      </div>
    </div>
  )
}
