import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TechParticleSection from '@/components/technology/TechParticleSection'
import PhysicsBridgeSection from '@/components/technology/PhysicsBridgeSection'
import ResearchGallerySection from '@/components/technology/ResearchGallerySection'

export const metadata: Metadata = {
  title: 'PhysicsBridge | NANOVIQUE',
  description: '평균값 너머, 입자 하나하나의 상태를 설계합니다. 나노비크의 PhysicsBridge 플랫폼을 소개합니다.',
  openGraph: {
    title: 'PhysicsBridge | NANOVIQUE',
    description: '평균값 너머, 입자 하나하나의 상태를 설계합니다.',
    url: 'https://nanovique.com/technology',
    siteName: 'NANOVIQUE',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <TechParticleSection />
      <PhysicsBridgeSection />
      <ResearchGallerySection />
      <Footer />
    </main>
  )
}
