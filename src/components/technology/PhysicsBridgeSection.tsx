'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center shrink-0">
      <div className="w-px h-10 md:hidden bg-gradient-to-b from-slate-600 to-[#0058CF]" />
      <div className="hidden md:block h-px w-12 lg:w-20 bg-gradient-to-r from-slate-600 via-[#3b7ff0] to-slate-600" />
    </div>
  )
}

export default function PhysicsBridgeSection() {
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

  const axes = [
    {
      title: 'Digital Twin',
      descKo: '미시상태를 계산하는 기술',
      descEn: 'Computing microstates',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Precision Manufacturing',
      descKo: '형성이력을 제어하는 기술',
      descEn: 'Controlling how particles form',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  const renderAxis = (axis: (typeof axes)[number]) => (
    <div className="w-full md:flex-1 bg-slate-800/50 rounded-xl p-6 shadow-lg border border-slate-700">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#0058CF] to-[#1e6de8]">
          {axis.icon}
        </div>
        <div>
          <h3 className="font-semibold text-white text-lg mb-1">{axis.title}</h3>
          <p className="text-gray-300 break-keep">{language === 'ko' ? axis.descKo : axis.descEn}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section
      id="physicsbridge"
      ref={sectionRef}
      className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {language === 'ko' ? '플랫폼' : 'Our Platform'}
                <span className="block text-brand-light">PhysicsBridge</span>
              </h2>
            </div>

            <div
              role="figure"
              aria-label={
                language === 'ko'
                  ? 'Digital Twin과 Precision Manufacturing 두 축이 PhysicsBridge에서 만나는 구조'
                  : 'Digital Twin and Precision Manufacturing meeting at PhysicsBridge'
              }
              className={`flex flex-col md:flex-row items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {renderAxis(axes[0])}
              <Connector />
              <div className="shrink-0 animate-float">
                <div className="aspect-square w-40 md:w-48 lg:w-56 rounded-full border-2 border-[#3b7ff0] bg-gradient-to-br from-[#0058CF]/40 to-[#003da3]/40 shadow-[0_0_60px_rgba(0,88,207,0.45)] flex items-center justify-center p-4">
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center">
                    PhysicsBridge
                  </span>
                </div>
              </div>
              <Connector />
              {renderAxis(axes[1])}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
