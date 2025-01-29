import type React from "react"
import dynamic from "next/dynamic"
import Navigation from "./components/navigation"
import HeroSection from "./components/hero-section"
import CurriculumSection from "./components/curriculum-section"
import Footer from "./components/footer"
import BackgroundAnimation from "./components/background-animation"

const AboutSection = dynamic(() => import("./components/about-section"), { ssr: false })
const MissionSection = dynamic(() => import("./components/mission-section"), { ssr: false })

const BioQuestWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Poppins', sans-serif] text-gray-800 overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <CurriculumSection />
        <MissionSection />
        <Footer />
      </div>
    </div>
  )
}

export default BioQuestWebsite

