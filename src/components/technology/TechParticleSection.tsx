'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const keywords = [
  { ko: '분자 배치', en: 'Molecular Arrangement' },
  { ko: '적재 분포', en: 'Payload Distribution' },
  { ko: '계면 구조', en: 'Interfacial Structure' },
]

export default function TechParticleSection() {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="tech-particle"
      ref={sectionRef}
      className="min-h-screen bg-slate-900 text-white pt-32 pb-20 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <p
              className={`text-brand-light font-semibold tracking-widest uppercase text-sm mb-10 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {language === 'ko' ? '기술 업데이트' : 'Technology Update'}
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <div className="relative bg-black rounded-xl overflow-hidden border border-slate-700 shadow-lg">
                  <Image
                    src="/tech/tech-particle.png"
                    alt={language === 'ko' ? '입자 이미지' : 'Particle image'}
                    width={1080}
                    height={632}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 break-keep">
                  {language === 'ko' ? (
                    <>
                      평균값 너머,
                      <span className="block text-brand-light">입자 하나하나의 상태를 설계합니다</span>
                    </>
                  ) : (
                    <>
                      Beyond averages —
                      <span className="block text-brand-light">engineering the state of every particle.</span>
                    </>
                  )}
                </h1>

                <ul className="flex flex-wrap gap-3">
                  {keywords.map((keyword) => (
                    <li
                      key={keyword.en}
                      className="border border-[#0058CF]/60 bg-[#0058CF]/15 text-sky-200 rounded-full px-4 py-2 text-sm sm:text-base font-medium"
                    >
                      {language === 'ko' ? keyword.ko : keyword.en}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
