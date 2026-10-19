import { useState, useEffect } from 'react'
import { imageSrc, imageSrcSet } from '../utils/images'

// Rasmlar Wikimedia Commons'dan olingan, mualliflari Footer'da ko'rsatilgan.
// Brauzer ekran kengligiga mos o'lchamni o'zi tanlaydi.
// Birinchi slayd index.html'da oldindan yuklanadi (preload) — uni almashtirsangiz, u yerni ham yangilang.
const WIDTHS = [960, 1280, 1920]

const slides = ['hero/ichan-qala-1', 'hero/ichan-qala-2', 'hero/gharbiy-darvoza'].map((name) => ({
  src: imageSrc(name, 1280),
  srcSet: imageSrcSet(name, WIDTHS),
}))

const SLIDE_DURATION_MS = 5000

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Har bir slayd o'zgarganda taymer qaytadan boshlanadi — qo'lda bosilganda ham
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION_MS)

    return () => clearTimeout(timer)
  }, [activeIndex])

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          srcSet={slide.srcSet}
          sizes="100vw"
          alt=""
          decoding="async"
          // eslint-disable-next-line react/no-unknown-property -- React 18 `fetchPriority`ni tanimaydi, kichik harf kerak
          fetchpriority={index === 0 ? 'high' : 'low'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-10">
        <p className="text-sm text-white/80">Ichan qal'a · Xiva</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-6xl">
          Xiva xonligi tarixi
        </h1>
        <p className="mt-4 max-w-lg text-white/80">
          Xiva xonligi davridan saqlanib qolgan tarixiy binolarning 3D ko'rinishi
        </p>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${index + 1}-rasmga o'tish`}
            aria-current={index === activeIndex}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
