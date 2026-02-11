'use client'

import { useState } from 'react'

const galleryYears = [
  {
    year: 2024,
    count: 4,
    description: 'Our first Valentine\'s Day moments',
  },
  {
    year: 2025,
    count: 4,
    description: 'More beautiful memories this year',
  },
]

export default function GallerySection() {
  const [activeYear, setActiveYear] = useState(2024)

  const currentYear = galleryYears.find((y) => y.year === activeYear)

  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Our Valentine's Gallery
        </h2>
        <p className="text-foreground/60">
          A collection of our favorite moments together
        </p>
      </div>

      {/* Year Tabs */}
      <div className="flex gap-4 justify-center flex-wrap">
        {galleryYears.map((item) => (
          <button
            key={item.year}
            onClick={() => setActiveYear(item.year)}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 text-lg ${
              activeYear === item.year
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white/60 text-foreground border-2 border-primary/20 hover:border-primary/40'
            }`}
          >
            {item.year}
            <span className="ml-2 text-sm opacity-75">({item.count})</span>
          </button>
        ))}
      </div>

      {/* Year Description */}
      {currentYear && (
        <p className="text-center text-lg text-foreground/70 italic">
          {currentYear.description}
        </p>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: currentYear?.count || 4 }).map((_, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-muted aspect-square hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-3 border-primary/10"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/30 to-secondary/30">
              <div className="text-center space-y-2">
                <span className="text-4xl block">📷</span>
                <span className="text-sm text-foreground/60">
                  Memory {index + 1}
                </span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {activeYear}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Info */}
      <div className="bg-white/60 rounded-2xl p-8 text-center space-y-3 border-2 border-primary/10">
        <h3 className="text-2xl font-bold text-primary">
          ❤️ These Memories Mean Everything
        </h3>
        <p className="text-foreground/80 text-lg leading-relaxed">
          Every photo tells a story of us. From silly moments to tender looks, each picture is a reminder of how much you mean to me. Being your Valentine is the greatest gift.
        </p>
      </div>
    </div>
  )
}
