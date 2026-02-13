export default function PhotoboothSection() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Our advance valentines day 2026
        </h2>
        <p className="text-foreground/60">
          
        </p>
      </div>

      {/* Photobooth Strip Container - Side by Side */}
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
         {/* Looping Video Photobooth Strip */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none p-8 flex items-center justify-center border-4 border-secondary/20 border-r-0 lg:border-r-4">
          <div className="w-auto h-auto bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <video
              src="/images/photobooth.MP4" // replace with your video path path
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Static Photobooth Strip */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-r-2xl lg:rounded-r-2xl lg:rounded-l-none p-8 flex items-center justify-center border-4 border-primary/20 border-l-0 lg:border-l-4">
          <div className="w-auto h-auto bg-muted rounded-lg flex items-center justify-center">
            <img
              src="/images/photobooth.JPG"
              alt="Photobooth Strip"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white/60 rounded-2xl p-8 text-center space-y-3 border-2 border-primary/10">
        <p className="text-foreground/80 text-lg leading-relaxed">
          we cute so muuuch!!
        </p>
      </div>
    </div>
  )
}
