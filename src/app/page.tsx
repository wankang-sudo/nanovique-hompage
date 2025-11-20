import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProblemStatement from '@/components/ProblemStatement'
import SolutionSection from '@/components/SolutionSection'
import TeamSection from '@/components/TeamSection'
// import TechnologySection from '@/components/TechnologySection'
import NewsSection from '@/components/NewsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemStatement />
      <SolutionSection />
      <TeamSection />
      {/* <TechnologySection /> */}
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
