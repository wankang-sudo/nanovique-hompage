'use client'

import { useEffect, useRef, useState } from 'react'
import TeamDetailPage from './TeamDetailPage'
import CompanyDetailPage from './CompanyDetailPage'
import LabOfficeDetailPage from './LabOfficeDetailPage'

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTeamDetail, setShowTeamDetail] = useState(false)
  const [showCompanyDetail, setShowCompanyDetail] = useState(false)
  const [showLabOfficeDetail, setShowLabOfficeDetail] = useState(false)
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

  useEffect(() => {
    // Check URL parameters to open modals on initial load
    const checkUrlParams = () => {
      console.log('Checking URL params...')
      console.log('Current URL:', window.location.href)
      const urlParams = new URLSearchParams(window.location.search)
      const team = urlParams.get('team')
      console.log('Team parameter:', team)

      if (team === 'true') {
        console.log('Opening team modal...')
        setShowTeamDetail(true)
        // Scroll to about section
        setTimeout(() => {
          const aboutSection = document.querySelector('#about')
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }

    checkUrlParams()

    // Listen for custom event from header
    const handleOpenTeamModal = () => {
      console.log('Custom event received - opening team modal')
      setShowTeamDetail(true)
      // Scroll to about section
      setTimeout(() => {
        const aboutSection = document.querySelector('#about')
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }

    window.addEventListener('openTeamModal', handleOpenTeamModal)

    return () => {
      window.removeEventListener('openTeamModal', handleOpenTeamModal)
    }
  }, [])

  const closeModal = () => {
    setShowTeamDetail(false)
    setShowCompanyDetail(false)
    setShowLabOfficeDetail(false)
    // Clean up URL parameters
    const url = new URL(window.location.href)
    url.searchParams.delete('team')
    window.history.replaceState({}, '', url.pathname + (url.hash || ''))
  }


  if (showTeamDetail) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl shadow-2xl min-w-[600px] max-h-[90vh] overflow-y-auto relative mx-auto"
          style={{ maxWidth: '83.6rem', width: '83.6rem' }}
          onClick={(e) => e.stopPropagation()}
        >
          <TeamDetailPage onClose={closeModal} />
        </div>
      </div>
    )
  }

  if (showCompanyDetail) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl shadow-2xl min-w-[600px] max-h-[90vh] overflow-y-auto relative mx-auto"
          style={{ maxWidth: '83.6rem', width: '83.6rem' }}
          onClick={(e) => e.stopPropagation()}
        >
          <CompanyDetailPage onClose={closeModal} />
        </div>
      </div>
    )
  }

  if (showLabOfficeDetail) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl shadow-2xl min-w-[600px] max-h-[90vh] overflow-y-auto relative mx-auto"
          style={{ maxWidth: '83.6rem', width: '83.6rem' }}
          onClick={(e) => e.stopPropagation()}
        >
          <LabOfficeDetailPage onClose={closeModal} />
        </div>
      </div>
    )
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-white py-20 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ marginBottom: '2rem' }}
          >
            <div className="flex flex-col items-center">
              {/* Original content backup for easy restoration:
              <img src="/nanovique_blue.png" alt="NANOVIQUE" className="h-24 md:h-32 w-auto mb-4" />
              <p className="text-slate-500 text-base md:text-lg font-medium tracking-wide">
                Precision Delivery, Remarkable Outcomes
              </p>
              */}

              {/* About title image */}
              <img
                src="/about-title.png"
                alt="About Nanovique"
                className="max-w-full h-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Team Button */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group text-center`}>
              <button
                onClick={() => setShowTeamDetail(true)}
                className="group relative inline-flex items-center justify-between text-lg lg:text-xl font-medium bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-60 lg:w-72"
                style={{
                  color: '#0058CF',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem'
                }}
                onMouseEnter={(e) => {
                  const button = e.currentTarget
                  button.style.backgroundColor = '#0058CF'
                  const span = button.querySelector('.button-text')
                  const arrow = button.querySelector('.button-arrow')
                  if (span) (span as HTMLElement).style.color = 'white'
                  if (arrow) (arrow as HTMLElement).style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  const button = e.currentTarget
                  button.style.backgroundColor = 'white'
                  const span = button.querySelector('.button-text')
                  const arrow = button.querySelector('.button-arrow')
                  if (span) (span as HTMLElement).style.color = '#0058CF'
                  if (arrow) (arrow as HTMLElement).style.color = '#0058CF'
                }}
              >
                <span className="button-text">Pioneering Team</span>
                <span className="button-arrow transition-all duration-300 ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1">&gt;&gt;</span>
              </button>
              <p className="text-slate-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                작지만 강한 팀과 함께합니다.
              </p>
            </div>

            {/* Company Button */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group text-center`}>
              <button
                onClick={() => setShowCompanyDetail(true)}
                className="group relative inline-flex items-center justify-between text-lg lg:text-xl font-medium bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-60 lg:w-72"
                style={{
                  color: '#0058CF',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem'
                }}
                onMouseEnter={(e) => {
                  const button = e.currentTarget
                  button.style.backgroundColor = '#0058CF'
                  const span = button.querySelector('.button-text')
                  const arrow = button.querySelector('.button-arrow')
                  if (span) (span as HTMLElement).style.color = 'white'
                  if (arrow) (arrow as HTMLElement).style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  const button = e.currentTarget
                  button.style.backgroundColor = 'white'
                  const span = button.querySelector('.button-text')
                  const arrow = button.querySelector('.button-arrow')
                  if (span) (span as HTMLElement).style.color = '#0058CF'
                  if (arrow) (arrow as HTMLElement).style.color = '#0058CF'
                }}
              >
                <span className="button-text">Company History</span>
                <span className="button-arrow transition-all duration-300 ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1">&gt;&gt;</span>
              </button>
              <p className="text-slate-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                혁신으로 도약하고 결과로 증명합니다.
              </p>
            </div>

            {/* Lab & Office Button */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group text-center`}>
              <button
                onClick={() => setShowLabOfficeDetail(true)}
                className="group relative inline-flex items-center justify-between text-lg lg:text-xl font-medium bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-60 lg:w-72"
                style={{
                  color: '#0058CF',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem'
                }}
                onMouseEnter={(e) => {
                  const button = e.currentTarget
                  button.style.backgroundColor = '#0058CF'
                  const span = button.querySelector('.button-text')
                  const arrow = button.querySelector('.button-arrow')
                  if (span) (span as HTMLElement).style.color = 'white'
                  if (arrow) (arrow as HTMLElement).style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  const button = e.currentTarget
                  button.style.backgroundColor = 'white'
                  const span = button.querySelector('.button-text')
                  const arrow = button.querySelector('.button-arrow')
                  if (span) (span as HTMLElement).style.color = '#0058CF'
                  if (arrow) (arrow as HTMLElement).style.color = '#0058CF'
                }}
              >
                <span className="button-text">Lab & Office</span>
                <span className="button-arrow transition-all duration-300 ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1">&gt;&gt;</span>
              </button>
              <p className="text-slate-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                발견이 모이고, 성장이 펼쳐집니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}