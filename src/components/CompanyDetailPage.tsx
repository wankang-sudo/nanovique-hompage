'use client'

import { useEffect, useRef, useState } from 'react'

export default function CompanyDetailPage({ onClose }: { onClose: () => void }) {
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

  type Achievement = {
    date: string
    title: string
    amount?: string
    isKeyMilestone?: boolean
  }

  const achievements2024: Achievement[] = [
    {
      date: "2024.04",
      title: "예비창업패키지(서울대학교) 선정",
    },
    {
      date: "2024.07",
      title: "서울바이오허브 입주기업 선정",
    },
    {
      date: "2024.08",
      title: "나노비크 주식회사 법인 설립",
      isKeyMilestone: true
    },
    {
      date: "2024.10",
      title: "경기도 랩스테이션 사업 선정",
    },
    {
      date: "2024.10",
      title: "창업성장 기술개발사업(디딤돌 R&D) 선정",
    },
    {
      date: "2024.12",
      title: "기술보증기금 Kibo-Star 밸리 선정",
      amount: "10억 원",
      isKeyMilestone: true
    },
    {
      date: "2024.12",
      title: "아모레퍼시픽 뉴뷰티 이노베이션 기업 선정",
    }
  ]

  const achievements2025: Achievement[] = [
    {
      date: "2025.03",
      title: "(주)아모레퍼시픽홀딩 전략적 투자유치",
      isKeyMilestone: true
    },
    {
      date: "2025.04",
      title: "초기창업패키지 선정",
    },
    {
      date: "2025.04",
      title: "지역혁신선도 R&D사업 선정",
    },
    {
      date: "2025.04",
      title: "강원Bridge 바이오헬스케어 사업 선정",
    },
    {
      date: "2025.05",
      title: "SNU 동서프로듀스 창업경진대회 1위",
      isKeyMilestone: true
    },
    {
      date: "2025.07",
      title: "창업성장 기술개발사업 TIPS 선정",
    }
  ]

  const allAchievements = [...achievements2024, ...achievements2025].sort((a, b) => {
    return new Date(a.date.replace('.', '-')).getTime() - new Date(b.date.replace('.', '-')).getTime()
  })

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-fit rounded-3xl relative p-6 md:p-12 lg:p-16 w-full"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-20 bg-white hover:bg-gray-50 text-slate-700 hover:text-slate-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
        style={{ fontSize: '18px', fontWeight: 'bold' }}
      >
        ✕
      </button>

      <div className="w-full text-center flex flex-col items-center">
        <div className="text-center mt-4 sm:mt-8">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8 sm:mb-12 lg:mb-16`}
          >
            Company
            <span className="block text-brand">History</span>
          </h1>
        </div>

        {/* Company Basic Info */}
        <div className={`bg-white rounded-2xl p-6 sm:p-8 w-full max-w-4xl mx-auto shadow-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">나노비크 주식회사</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-left">
            <div className="py-1">
              <span className="font-semibold text-slate-700">회사명:</span>
              <span className="text-slate-600 ml-2">나노비크 주식회사</span>
            </div>
            <div className="py-1">
              <span className="font-semibold text-slate-700">사업자등록번호:</span>
              <span className="text-slate-600 ml-2">234-81-11701</span>
            </div>
            <div className="py-1">
              <span className="font-semibold text-slate-700">대표이사:</span>
              <span className="text-slate-600 ml-2">최성학</span>
            </div>
            <div className="py-1">
              <span className="font-semibold text-slate-700">업종:</span>
              <span className="text-slate-600 ml-2">전문, 과학 및 기술서비스업</span>
            </div>
            <div className="py-1">
              <span className="font-semibold text-slate-700">법인 설립:</span>
              <span className="text-slate-600 ml-2">2024년 8월 14일</span>
            </div>
            <div className="py-1">
              <span className="font-semibold text-slate-700">소재지:</span>
              <span className="text-slate-600 ml-2">서울시 성북구 오패산로 3길 12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Timeline Table */}
      <div className="w-full mt-16">
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
                <div className="flex gap-4">
                  <div className="w-20 sm:w-24 flex-shrink-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">날짜</h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">주요 연혁</h3>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-100">
                {allAchievements.map((achievement, index) => (
                  <div
                    key={achievement.date + achievement.title}
                    className={`px-4 sm:px-6 py-4 hover:bg-slate-50 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-25'
                    } ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{
                      transitionDelay: (600 + index * 100) + 'ms',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="flex gap-4 items-start">
                      {/* Date Column */}
                      <div className="w-20 sm:w-24 flex-shrink-0">
                        <span className="text-xs sm:text-sm font-medium text-slate-600 bg-slate-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap inline-block">
                          {achievement.date}
                        </span>
                      </div>

                      {/* Achievement Column */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 flex-wrap">
                          <span className="text-sm sm:text-base font-semibold text-slate-800">
                            {achievement.title}
                            {achievement.amount && (
                              <span className="text-sm sm:text-base font-semibold text-slate-800 ml-2">
                                ({achievement.amount})
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-brand to-brand-light rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">미래 비전</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              나노비크는 앞으로도 혁신적인 나노전달체 기술을 통해 인류의 건강과 삶의 질 향상에 기여하며,
              글로벌 바이오제약 시장에서 선도적인 역할을 수행하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}