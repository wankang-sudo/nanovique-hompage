'use client'

import { useEffect, useRef, useState } from 'react'

export default function TechnologySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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

  const technologies = [
    {
      title: "기술 혁신",
      description: "차세대 나노전달체 플랫폼",
      features: [
        "자기조립 나노구조체 설계",
        "실시간 환경 반응 시스템",
        "바이오마커 기반 타겟팅",
        "지능형 약물 방출 제어"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "혁신 잠재력",
      description: "무한한 응용 가능성",
      features: [
        "암 치료제 정밀 전달",
        "유전자 치료 플랫폼",
        "면역치료 강화 시스템",
        "재생의학 응용 기술"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "미래 응용",
      description: "차세대 의료 혁신",
      features: [
        "개인맞춤형 치료법",
        "실시간 치료 모니터링",
        "예방의학 플랫폼",
        "디지털 치료 융합"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Breakthrough
            <span className="block bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className={`text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            나노전달체 기술의 새로운 패러다임을 제시합니다
          </p>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-slate-800 rounded-lg p-1">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === index
                      ? 'bg-brand text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {tech.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-light rounded-xl flex items-center justify-center text-white">
                    {technologies[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{technologies[activeTab].title}</h3>
                    <p className="text-brand text-lg">{technologies[activeTab].description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {technologies[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-8 border border-slate-600">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">기술 성숙도</span>
                      <span className="text-brand font-semibold">85%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-brand to-brand-light h-2 rounded-full w-[85%]"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">상용화 준비도</span>
                      <span className="text-brand font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-brand to-brand-light h-2 rounded-full w-[75%]"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">시장 적용성</span>
                      <span className="text-brand font-semibold">90%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-brand to-brand-light h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-sky-900/30 border border-sky-500/30 rounded-lg">
                    <div className="text-center text-sky-300">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <p className="text-sm font-semibold">Market-Ready Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-4xl font-bold text-brand mb-2">50+</div>
            <div className="text-gray-300">특허 출원</div>
            <div className="text-sm text-gray-400 mt-2">핵심 기술 보호</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-4xl font-bold text-brand mb-2">15+</div>
            <div className="text-gray-300">연구 논문</div>
            <div className="text-sm text-gray-400 mt-2">국제 학술지 발표</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-4xl font-bold text-brand mb-2">10+</div>
            <div className="text-gray-300">협력 기관</div>
            <div className="text-sm text-gray-400 mt-2">글로벌 파트너십</div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}