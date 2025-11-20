'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProblemStatement() {
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
      id="problem"
      ref={sectionRef}
      className="min-h-screen bg-slate-900 text-white py-20 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              The Challenge
              <span className="block text-red-400">We&apos;re Solving</span>
            </h2>

            <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-300">
              <p>
                나노전달체는 실험실에서는 완벽하게 작동하지만,<br />
                <span className="text-red-400 font-semibold">실제 환경에서는 불안정</span>해집니다.
              </p>

              <p>
                온도, pH, 첨가물의 영향으화로 인해 나노입자가 응집되거나 파괴되어<br />
                <span className="text-red-400 font-semibold">전달 효과가 크게 감소</span>합니다.
              </p>

              <p>
                이는 수많은 나노전달체 기술들이<br />
                <span className="text-red-400 font-semibold">실제 효능 발현에 실패하는 핵심 원인</span> 중 하나입니다.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8" style={{ marginTop: '2rem' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">85%</div>
                <div className="text-sm text-gray-400">실험실 외 효능 감소</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
                <div className="text-sm text-gray-400">임상시험 실패율</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">90%</div>
                <div className="text-sm text-gray-400">안정성 문제</div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden border border-slate-600">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/np_issues.mp4" type="video/mp4" />
                브라우저가 비디오를 지원하지 않습니다.
              </video>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}