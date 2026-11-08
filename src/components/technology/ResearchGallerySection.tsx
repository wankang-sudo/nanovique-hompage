'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const images = [
  { src: '/tech/tech-flow.png', width: 1612, height: 920, ko: '유동', en: 'Flow' },
  { src: '/tech/tech-molecular.png', width: 1047, height: 547, ko: '분자 상호작용', en: 'Molecular Interactions' },
  { src: '/tech/tech-distribution.png', width: 2000, height: 1353, ko: '적재 분포', en: 'Payload Distribution' },
  { src: '/tech/tech-surface.png', width: 1800, height: 1116, ko: '표면', en: 'Surface' },
]

export default function ResearchGallerySection() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="research-gallery"
      ref={sectionRef}
      className="bg-slate-900 text-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Research
                <span className="block text-brand-light">Gallery</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {images.map((image, index) => {
                const caption = language === 'ko' ? image.ko : image.en
                return (
                  <figure
                    key={image.src}
                    className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{
                      transition: 'opacity 1s, transform 1s',
                      transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms',
                    }}
                  >
                    <div className="relative aspect-[16/10] bg-white rounded-xl overflow-hidden border border-slate-700 shadow-lg">
                      <Image
                        src={image.src}
                        alt={caption}
                        fill
                        sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-gray-300 font-medium">
                      {caption}
                    </figcaption>
                  </figure>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
