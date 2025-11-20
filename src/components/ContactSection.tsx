'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [partnerName, setPartnerName] = useState('')
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    industry: '',
    collaborationArea: '',
    contactName: '',
    contactPhone: '',
    email: ''
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (partnerName.trim()) {
      setShowApplicationForm(true)
    }
  }

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email body with all information
    const emailBody = `
파트너십 신청서

회사명: ${partnerName}
업종: ${formData.industry}
협업 희망 분야: ${formData.collaborationArea}
담당자 이름: ${formData.contactName}
담당자 연락처: ${formData.contactPhone}
회신받을 메일: ${formData.email}
    `.trim()

    // Open default email client with pre-filled information
    window.location.href = `mailto:contact@nanovique.com?subject=파트너십 신청 - ${partnerName}&body=${encodeURIComponent(emailBody)}`

    // Reset form and close modal
    setShowApplicationForm(false)
    setPartnerName('')
    setFormData({
      industry: '',
      collaborationArea: '',
      contactName: '',
      contactPhone: '',
      email: ''
    })
  }

  const handleCloseModal = () => {
    setShowApplicationForm(false)
  }

  return (
    <>
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl relative" style={{ padding: '3rem' }}>
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 text-slate-700 hover:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ fontSize: '18px', fontWeight: 'bold' }}
              >
                ✕
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">파트너십 신청서</h2>
                <p className="text-slate-600">
                  <span className="text-brand font-semibold">{partnerName}</span>과(와)의 파트너십을 위한 정보를 입력해주세요
                </p>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                {/* 업종 */}
                <div>
                  <label htmlFor="industry" className="block text-slate-700 font-semibold mb-2">
                    업종 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="예: 화장품, 제약, 식품 등"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:border-brand focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* 협업 희망 분야 */}
                <div>
                  <label htmlFor="collaborationArea" className="block text-slate-700 font-semibold mb-2">
                    협업 희망 분야 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="collaborationArea"
                    value={formData.collaborationArea}
                    onChange={(e) => setFormData({ ...formData, collaborationArea: e.target.value })}
                    placeholder="희망하시는 협업 분야를 자유롭게 작성해주세요"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:border-brand focus:outline-none transition-colors duration-300 min-h-[100px] resize-none"
                    required
                  />
                </div>

                {/* 담당자 이름 */}
                <div>
                  <label htmlFor="contactName" className="block text-slate-700 font-semibold mb-2">
                    담당자 이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="담당자 성함을 입력해주세요"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:border-brand focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* 담당자 연락처 */}
                <div>
                  <label htmlFor="contactPhone" className="block text-slate-700 font-semibold mb-2">
                    담당자 연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    placeholder="010-0000-0000"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:border-brand focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* 회신받을 메일 */}
                <div>
                  <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">
                    회신받을 메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@company.com"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:border-brand focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ backgroundColor: '#0058CF' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#1e6de8'
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#0058CF'
                  }}
                >
                  신청서 제출하기
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <section
        id="contact"
        ref={sectionRef}
        className="min-h-screen bg-slate-900 text-white py-20 flex items-center justify-center"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">

            <div className="mb-16">
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-brand">NANOVIQUE</span>
                <span className="text-white"> + </span>
                <span className="text-gray-400">[BLANK]</span>
              </h1>

              <p className={`text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                프리미엄화를 위한 바이오사이언스 파트너<br />
                나노비크와 함께하세요.
              </p>
            </div>

            <div className={`bg-slate-800/50 rounded-3xl p-12 border border-slate-700 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-left">
                  <label htmlFor="partnerName" className="block text-xl font-semibold mb-4 text-gray-300">
                    신청하기
                  </label>

                  <div className="flex items-center space-x-4 text-2xl sm:text-3xl font-bold">
                    <span className="text-gray-400">BLANK =</span>
                    <input
                      type="text"
                      id="partnerName"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      placeholder="회사명을 입력하세요"
                      className="flex-1 bg-slate-700 border-2 border-slate-600 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-brand focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-6 rounded-xl font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{backgroundColor: '#0058CF'}}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled) {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#1e6de8'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.disabled) {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#0058CF'
                    }
                  }}
                  disabled={!partnerName.trim()}
                >
                  파트너십 신청하기
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-slate-600">
                <p className="text-gray-400 text-lg">
                  문의사항이 있으시면 언제든 연락주세요
                </p>
                <a
                  href="mailto:contact@nanovique.com"
                  className="text-brand hover:text-brand-light transition-colors duration-200 text-lg font-semibold"
                >
                  contact@nanovique.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}