import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import slider1 from '../assets/slider/1.png'
import slider2 from '../assets/slider/2.png'
import slider3 from '../assets/slider/3.png'
import slider4 from '../assets/slider/4.png'
import slider5 from '../assets/slider/5.png'

const SLIDES = [
  {
    id: 1,
    image: slider1,
    textKey: 'carousel1',
  },
  {
    id: 2,
    image: slider2,
    textKey: 'carousel2',
  },
  {
    id: 3,
    image: slider3,
    textKey: 'carousel3',
  },
  {
    id: 4,
    image: slider4,
    textKey: 'carousel1',
  },
  {
    id: 5,
    image: slider5,
    textKey: 'carousel2',
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
      <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
        {/* Slides */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/30 to-transparent pb-8">
              <p className="text-lg md:text-xl font-semibold text-white text-center px-4 shadow-sm">
                {t(slide.textKey)}
              </p>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index
                  ? 'bg-primary'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
