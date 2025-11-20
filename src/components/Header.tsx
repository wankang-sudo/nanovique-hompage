'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOverLightSection, setIsOverLightSection] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const solutionSection = document.querySelector('#solution')
      const aboutSection = document.querySelector('#about')
      const newsSection = document.querySelector('#news')

      let overLight = false

      if (solutionSection) {
        const solutionRect = solutionSection.getBoundingClientRect()
        if (solutionRect.top <= 100 && solutionRect.bottom > 100) {
          overLight = true
        }
      }

      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect()
        if (aboutRect.top <= 100 && aboutRect.bottom > 100) {
          overLight = true
        }
      }

      if (newsSection) {
        const newsRect = newsSection.getBoundingClientRect()
        if (newsRect.top <= 100 && newsRect.bottom > 100) {
          overLight = true
        }
      }

      setIsOverLightSection(overLight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#solution', label: 'Technology' },
    { href: '#news', label: 'News' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOverLightSection
          ? 'backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isOverLightSection ? '#0058CF' + 'E6' : 'transparent'
      }}
    >
      <nav className="relative px-4 sm:px-6 lg:px-8">
        {/* 로고 - 화면 왼쪽 고정 */}
        <div className="absolute left-4 sm:left-6 lg:left-8 top-0 h-16 flex items-center z-20">
          <Link href="/" className="text-2xl font-bold flex items-center transition-colors duration-300 text-white">
            <img src="/nanovique_logo.png" alt="NANOVIQUE" className="h-12 w-auto" />
          </Link>
        </div>

        {/* 네비게이션 메뉴 - 화면 중앙 고정 */}
        <div className="hidden md:flex absolute inset-x-0 top-0 h-16 items-center justify-center z-10">
          <div className="flex items-baseline" style={{ gap: '7rem' }}>
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-lg font-medium transition-colors duration-300 text-white hover:text-brand-lighter"
                >
                  {item.label}
                </Link>

                {item.subItems && hoveredMenu === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.href}
                        onClick={() => {
                          if (subItem.label === '팀 멤버') {
                            // Dispatch custom event to open team modal
                            window.dispatchEvent(new CustomEvent('openTeamModal'))
                            setHoveredMenu(null)
                          } else {
                            // For other links, use regular navigation
                            window.location.href = subItem.href
                          }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-brand hover:text-white transition-colors duration-200"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 언어 버튼 - 화면 오른쪽 고정 */}
        <div className="hidden md:flex absolute right-4 sm:right-6 lg:right-8 top-0 h-16 items-center z-20">
          <div className="flex items-center space-x-4">
            <button className="text-lg font-medium transition-colors duration-300 text-white hover:text-brand-lighter">
              KR
            </button>
            <span className="transition-colors duration-300 text-white/50">|</span>
            <button className="text-lg font-medium transition-colors duration-300 text-white hover:text-brand-lighter">
              EN
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden absolute right-4 sm:right-6 lg:right-8 top-0 h-16 flex items-center z-20">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-300 text-white hover:text-brand-lighter focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 relative">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>
        </div>

        {/* 높이 확보용 더미 */}
        <div className="h-16"></div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm rounded-lg mt-2" style={{backgroundColor: '#0058CF' + 'F2'}}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-brand-lighter block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="text-white hover:text-brand-lighter text-sm font-medium">
                  KR
                </button>
                <span className="text-white/50">|</span>
                <button className="text-white hover:text-brand-lighter text-sm font-medium">
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}