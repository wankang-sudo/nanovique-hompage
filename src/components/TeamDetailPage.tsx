'use client'

import { useEffect, useRef, useState } from 'react'

export default function TeamDetailPage({ onClose }: { onClose: () => void }) {
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

  const ceo = {
    name: "최성학",
    role: "CEO & Co-Founder",
    education: [
      "서울대학교 물리학 학사",
      "서울대학교 기계공학 박사"
    ],
    experience: [
      "전) 엔바이오셀 연구소장",
      "전) 서울대학교 연구교수"
    ],
    achievements: [
      "국제학술지 논문 10건",
      "특허 6건",
      "학술관련 수상 3건"
    ]
  }

  const executives = [
    {
      name: "강완",
      role: "사업총괄이사",
      background: "서울대학교 기계공학과 학사",
      experience: [
        "전) 매스프레소 SaaS Squad Lead",
        "전) 매스프레소 Adaptive Content Group Business Unit Lead"
      ]
    },
    {
      name: "강봉수",
      role: "연구소장",
      background: "경북대학교 기계공학 박사",
      experience: [
        "전) 엔바이오셀 책임연구원",
        "전) 서울대학교 선임연구원"
      ]
    }
  ]

  const allMembers = [
    {
      name: "이규희",
      role: "수석 연구원",
      background: "서울대학교 기계공학 박사",
      hasPhd: true
    },
    {
      name: "권태욱",
      role: "선임 연구원",
      background: "중앙대학교 약학 박사",
      hasPhd: true
    },
    {
      name: "김수진",
      role: "주임 연구원",
      background: "",
      hasPhd: false
    },
    {
      name: "고희진",
      role: "주임 연구원",
      background: "",
      hasPhd: false
    },
    {
      name: "윤선빈",
      role: "연구원",
      background: "",
      hasPhd: false
    },
    {
      name: "김민주",
      role: "연구원",
      background: "",
      hasPhd: false
    }
  ]

  return (
      <section
        ref={sectionRef}
        className="bg-white min-h-fit rounded-3xl relative p-6 md:p-16 w-full"
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
          <div className="text-center mt-8" style={{ marginBottom: '4rem' }}>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Pioneering
              <span className="block text-brand">Team</span>
            </h1>
          </div>

          {/* CEO Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full max-w-[56.76rem]`}
            style={{ marginBottom: '3rem' }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 w-full">
                {/* 프로필 정보 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16 mb-8 md:mb-12">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/CEO.png"
                      alt="최성학 CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                      {ceo.name} <span className="text-slate-500 font-normal text-lg md:text-xl">Ph.D.</span>
                    </h2>
                    <p className="text-brand font-bold text-base md:text-lg">{ceo.role}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
                  {/* 학력 */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 text-left" style={{ marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>학력</h3>
                    <ul className="space-y-2 text-left">
                      {ceo.education.map((edu, index) => (
                        <li key={index} className="flex items-center" style={{ gap: '0.75rem' }}>
                          <div className="w-1 h-1 bg-brand rounded-full flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 경력 */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 text-left" style={{ marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>경력</h3>
                    <ul className="space-y-2 text-left">
                      {ceo.experience.map((exp, index) => (
                        <li key={index} className="flex items-center" style={{ gap: '0.75rem' }}>
                          <div className="w-1 h-1 bg-brand rounded-full flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 주요 성과 */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 text-left" style={{ marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>주요 성과</h3>
                    <ul className="space-y-2 text-left">
                      {ceo.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center" style={{ gap: '0.75rem' }}>
                          <div className="w-1 h-1 bg-brand rounded-full flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            </div>
          </div>

          {/* Executives Section */}
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div className="flex flex-col lg:flex-row justify-center mx-auto gap-6 lg:gap-12 max-w-full lg:max-w-[58.08rem]">
              {executives.map((exec, index) => (
                <div
                  key={exec.name}
                  className={`bg-white rounded-2xl shadow-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full lg:w-auto lg:flex-1 p-6 lg:p-8`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                {/* 프로필 정보 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 mb-6 sm:mb-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    {exec.role === '사업총괄이사' ? (
                      <img
                        src="/CBO.png"
                        alt={`${exec.name} ${exec.role}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="/kbs.png"
                        alt={`${exec.name} ${exec.role}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                      {exec.name}{exec.role === '연구소장' && <span className="text-slate-500 font-normal text-sm sm:text-base"> Ph.D.</span>}
                    </h3>
                    <p className="text-brand font-bold text-sm sm:text-base mb-2">{exec.role}</p>
                    <p className="text-xs sm:text-sm text-slate-600">{exec.background}</p>
                  </div>
                </div>

                {/* 상세 정보 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-left" style={{ marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>경력</h4>
                    <ul className="space-y-2 text-left">
                      {exec.experience.map((exp, index) => (
                        <li key={index} className="flex items-center" style={{ gap: '0.75rem' }}>
                          <div className="w-1 h-1 bg-brand rounded-full flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 text-center mb-6 sm:mb-8">Members</h2>

            {/* First Row - Ph.D. Members */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8">
              {allMembers.filter(m => m.hasPhd).map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 w-full sm:w-56"
                >
                  <div className="w-24 h-24 rounded-xl mx-auto overflow-hidden" style={{ marginBottom: '1.5rem' }}>
                    <img
                      src="/basicprofile.png"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base font-bold text-slate-800" style={{ marginBottom: '0.75rem' }}>
                    {member.name}{member.hasPhd && <span className="text-slate-500 font-normal text-sm"> Ph.D.</span>}
                  </h4>
                  <p className="text-brand font-medium text-xs" style={{ marginBottom: '1rem' }}>{member.role}</p>
                  {member.background && (
                    <p className="text-xs text-slate-600">{member.background}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Second Row - Other Members */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-16">
              {allMembers.filter(m => !m.hasPhd).map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 w-full max-w-[10rem]"
                >
                  <div className="w-20 h-20 rounded-xl mx-auto overflow-hidden" style={{ marginBottom: '1.5rem' }}>
                    <img
                      src="/basicprofile.png"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base font-bold text-slate-800" style={{ marginBottom: '0.75rem' }}>
                    {member.name}
                  </h4>
                  <p className="text-brand font-medium text-xs" style={{ marginBottom: '1rem' }}>{member.role}</p>
                  {member.background && (
                    <p className="text-xs text-slate-600">{member.background}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}