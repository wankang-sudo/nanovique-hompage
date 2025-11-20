'use client'

import { useEffect, useRef, useState } from 'react'

export default function LabOfficeDetailPage({ onClose }: { onClose: () => void }) {
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

  const facilities = [
    {
      title: "본사",
      subtitle: "Headquarters",
      description: "서울 최대 규모의 바이오단지인 서울바이오허브에 위치하고 있습니다.",
      address: "서울시 성북구 오패산로3길 12",
      images: ["btit1.jpg", "btit2.jpg", "btit3.jpg", "btit4.jpg"]
    },
    {
      title: "실험실",
      subtitle: "Laboratory",
      description: "신규 바이오허브로 추진 중인 광교 테크노밸리 내 경기바이오센터에 위치하고 있습니다.",
      address: "경기도 수원시 영통구 광교로147 경기바이오센터",
      images: ["biocenter1.jpg", "biocenter2.jpg", "biocenter3.jpg", "biocenter4.jpg"]
    },
    {
      title: "기업부설연구소",
      subtitle: "Corporate Research Institute",
      description: "나노전달체 연구에 최적화된 실험실과 회의실을 갖춘 기업부설연구소입니다.",
      address: "경기도 수원시 영통구 이의동 1286-1 에이스광교타워2차",
      images: ["ace.jpg"]
    }
  ]

  const labImages = [
    {
      title: "나노입자 합성실",
      description: "정밀한 나노입자 합성을 위한 전용 실험실"
    },
    {
      title: "분석실험실",
      description: "고성능 분석장비를 활용한 품질 검증"
    },
    {
      title: "세포실험실",
      description: "생체적합성 및 효능 평가를 위한 세포실험"
    },
    {
      title: "회의실",
      description: "창의적 아이디어가 모이는 협업 공간"
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-fit rounded-3xl relative"
      style={{ padding: '4rem', width: '100%' }}
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
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Lab &
            <span className="block text-brand">Office</span>
          </h1>
        </div>

        {/* Facility Tabs */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-slate-100 rounded-lg p-1">
              {facilities.map((facility, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === index
                      ? 'bg-brand text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {facility.title}
                </button>
              ))}
            </div>
          </div>

          {/* Facility Detail */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-12 border border-brand/20 h-[700px] overflow-y-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">{facilities[activeTab].title}</h2>
              <p className="text-brand text-xl font-medium mb-6">{facilities[activeTab].subtitle}</p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">{facilities[activeTab].description}</p>
              <p className="text-slate-700 text-lg font-medium">{facilities[activeTab].address}</p>

              {/* 사진 */}
              {facilities[activeTab].images.length === 1 ? (
                // 사진 1장 (세로형)
                <div className="flex justify-center mt-12">
                  <div className="rounded-xl overflow-hidden shadow-lg max-w-md">
                    <img
                      src={`/${facilities[activeTab].images[0]}`}
                      alt={facilities[activeTab].title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ) : (
                // 사진 4장 (2x2 그리드)
                <div className="grid grid-cols-2 gap-6 mt-12">
                  {facilities[activeTab].images.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={`/${image}`}
                        alt={`${facilities[activeTab].title} ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}