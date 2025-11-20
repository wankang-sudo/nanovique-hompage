'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NewsSection() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [showAllNews, setShowAllNews] = useState(false)
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

  const news = [
    {
      date: "2025.10.23",
      category: "기술이전",
      title: "경과원, 도내 바이오벤처에 혈당·항비만 원천기술 이전. 쓰리에이치랩스·나노비크에 기술이전 율무미강·푸코잔틴 조성물 2건, 상용화 추진 R&D·시제품·인증 컨설팅 등 후속 지원 연계",
      summary: "경기도 경제과학진흥원이 나노비크를 포함한 바이오벤처에 혈당·항비만 관련 원천기술을 이전하며 상용화를 지원합니다.",
      image: "/press4.jpg",
      badge: "기술이전",
      link: "https://www.etnews.com/20251023000001"
    },
    {
      date: "2025.05.22",
      category: "인터뷰",
      title: "나노비크 \"기존 나노전달체 한계 극복···바이오 융합 독보 기업 될 것\" [SNU-동서 스타트업 프로듀스34 5기 기업] 최성학 대표 \"화장품용 경피전달 시스템 개발중\"",
      summary: "최성학 대표가 나노비크의 독보적인 기술과 비전을 소개하며 화장품용 경피전달 시스템 개발 현황을 밝혔습니다.",
      image: "/press3.jpg",
      badge: "인터뷰",
      link: "https://zdnet.co.kr/view/?no=20250522222107"
    },
    {
      date: "2025.01.20",
      category: "인터뷰",
      title: "[서울대학교 시흥캠퍼스본부 스타트업 CEO] 고기능성 나노전달체와 시스템 탑재 솔루션 플랫폼을 개발하는 '나노비크'",
      summary: "서울대학교 시흥캠퍼스본부 스타트업 CEO 인터뷰에서 나노비크의 혁신적인 나노전달체 기술을 소개했습니다.",
      image: "/press2.jpg",
      badge: "인터뷰",
      link: "https://magazine.hankyung.com/job-joy/article/202501206001d"
    },
    {
      date: "2025.01.06",
      category: "선정",
      title: "나노비크, 아모레퍼시픽 '뉴뷰티 이노베이션 챌린지' 최종 선정",
      summary: "아모레퍼시픽의 뉴뷰티 이노베이션 챌린지에서 나노비크의 혁신 기술이 최종 선정되었습니다.",
      image: "/press1.jpg",
      badge: "선정",
      link: "http://m.yakup.com/news/index.html?mode=view&cat=12&nid=304655"
    }
  ]

  // 모달이 열려있으면 모달만 표시
  if (showAllNews) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={() => setShowAllNews(false)}
      >
        <div
          className="bg-white rounded-3xl shadow-2xl min-w-[600px] max-h-[90vh] overflow-y-auto relative mx-auto"
          style={{ maxWidth: '83.6rem', width: '83.6rem' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white min-h-fit rounded-3xl relative" style={{ padding: '4rem', width: '100%' }}>
            {/* Close Button */}
            <button
              onClick={() => setShowAllNews(false)}
              className="fixed top-6 right-6 z-20 bg-white hover:bg-gray-50 text-slate-700 hover:text-slate-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              ✕
            </button>

            <div className="w-full text-center flex flex-col items-center">
              <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
                  Press &
                  <span className="block text-brand">Media</span>
                </h1>
              </div>

              {/* All News Grid */}
              <div className="grid md:grid-cols-3 gap-8 w-full">
                {news.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-200 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-end mb-3">
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-brand transition-colors duration-200">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {item.summary}
                      </p>

                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover:text-brand-light font-semibold text-sm flex items-center space-x-2 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>{language === 'ko' ? '자세히 보기' : 'Read More'}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      ) : (
                        <button className="text-brand hover:text-brand-light font-semibold text-sm flex items-center space-x-2 transition-colors duration-200">
                          <span>{language === 'ko' ? '자세히 보기' : 'Read More'}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      id="news"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 py-20 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Press &
            <span className="block text-brand">Media</span>
          </h2>
          <p className={`text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {language === 'ko'
              ? '나노비크의 최신 연구 성과와 파트너십 소식을 확인하세요'
              : 'Discover our latest research achievements and partnership news'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-200 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group cursor-pointer`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-end mb-3">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-brand transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.summary}
                </p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-light font-semibold text-sm flex items-center space-x-2 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{language === 'ko' ? '자세히 보기' : 'Read More'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ) : (
                  <button className="text-brand hover:text-brand-light font-semibold text-sm flex items-center space-x-2 transition-colors duration-200">
                    <span>{language === 'ko' ? '자세히 보기' : 'Read More'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => setShowAllNews(true)}
            className="bg-brand hover:bg-brand-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {language === 'ko' ? '모든 뉴스 보기' : 'View All News'}
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}