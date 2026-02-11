'use client'

import { useState } from 'react'
import ValentineQuestion from '@/components/valentine-question'
import PhotoboothSection from '@/components/photobooth-section'
import GallerySection from '@/components/gallery-section'
import SpecialMessage from '@/components/special-message'

export default function Home() {
  const [showGallery, setShowGallery] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/10">
      {/* Hero Section with Valentine Question */}
      <section className="w-full px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <ValentineQuestion onYes={() => setShowGallery(true)} />
        </div>
      </section>

      {/* Photobooth Strip Section */}
      {showGallery && (
        <>
          <section className="w-full px-4 py-12 md:py-20 bg-white/50">
            <div className="max-w-4xl mx-auto">
              <PhotoboothSection />
            </div>
          </section>

          {/* Gallery Section */}
          <section className="w-full px-4 py-12 md:py-20">
            <div className="max-w-5xl mx-auto">
              <GallerySection />
            </div>
          </section>

          {/* Special Message Section */}
          <section className="w-full px-4 py-12 md:py-20 bg-white/50">
            <div className="max-w-3xl mx-auto">
              <SpecialMessage />
            </div>
          </section>
        </>
      )}
    </main>
  )
}
