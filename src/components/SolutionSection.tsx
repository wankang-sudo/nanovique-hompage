'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SolutionSection() {
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
      id="solution"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative"
    >
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0f172a"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center relative z-10" style={{ minHeight: 'calc(100vh - 6rem)' }}>
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Precision Delivery
            <span className="block text-brand">Technology</span>
          </h2>
          <p className={`text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {language === 'ko'
              ? '나노비크의 혁신적 전달 솔루션으로 안정성과 효능을 동시에 확보합니다'
              : 'NANOVIQUE\'s innovative delivery solution ensures both stability and efficacy'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img
              src="/platformsystem.png"
              alt="Platform System"
              className="w-full h-auto shadow-lg border border-slate-600 rounded-xl"
            />
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6 shadow-lg border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {language === 'ko' ? '안정성 문제 극복' : 'Overcoming Stability Issues'}
                    </h4>
                    <p className="text-gray-300">
                      {language === 'ko'
                        ? '외부 환경 및 전달체간 접촉을 차단하여 나노전달체의 안정성 유지'
                        : 'Maintaining nanocarrier stability by blocking external environment and carrier-to-carrier contact'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 shadow-lg border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {language === 'ko' ? '고정밀 방출 제어' : 'High-Precision Release Control'}
                    </h4>
                    <p className="text-gray-300">
                      {language === 'ko'
                        ? '자극 감응형 방출 및 표적세포 고효율 전달'
                        : 'Stimulus-responsive release and highly efficient delivery to target cells'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 shadow-lg border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {language === 'ko' ? '다중 특성 구현' : 'Multi-Functional Properties'}
                    </h4>
                    <p className="text-gray-300">
                      {language === 'ko'
                        ? '높은 생체 점작성 및 투과성으로 높은 경피 효율 달성'
                        : 'Achieving high transdermal efficiency with superior bioadhesive and permeability properties'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center bg-slate-800/50 rounded-xl p-8 shadow-lg border border-slate-700">
            <div className="text-4xl font-bold text-brand mb-2">95%</div>
            <div className="text-gray-300">
              {language === 'ko' ? '안정성 향상' : 'Stability Improvement'}
            </div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-8 shadow-lg border border-slate-700">
            <div className="text-4xl font-bold text-brand mb-2">80%</div>
            <div className="text-gray-300">
              {language === 'ko' ? '효능 유지율' : 'Efficacy Retention'}
            </div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-8 shadow-lg border border-slate-700">
            <div className="text-4xl font-bold text-brand mb-2">97%</div>
            <div className="text-gray-300">
              {language === 'ko' ? '정밀 전달률' : 'Precision Delivery Rate'}
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}