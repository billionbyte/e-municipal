import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SLIDES = [
  {
    id: 1,
    textKey: 'carousel1',
  },
  {
    id: 2,
    textKey: 'carousel2',
  },
  {
    id: 3,
    textKey: 'carousel3',
  },
]

export default function HomeCarousel() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full mb-8">
      <div className="relative h-48 bg-background border overflow-hidden">
        {/* Slides */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl font-semibold text-primary text-center px-4">
              {t(slide.textKey)}
            </p>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? 'bg-primary' : 'bg-secondary/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
