import type React from "react"
import dynamic from "next/dynamic"

const SignUpForm = dynamic(() => import("./sign-up-form"), { ssr: false })

const HeroSection: React.FC = () => {
  return (
    <section id="signup" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-['Montserrat'] text-5xl md:text-6xl font-semibold tracking-wide uppercase mb-6 text-gray-800">
            Inspiring the Next Generation of STEM Innovators
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-['Raleway'] italic mb-4">
            Join us on a journey of discovery and innovation in science
          </p>
          <p className="text-xl text-purple-600 font-semibold mb-8">
            Program starts March 3rd - Limited spots available!
          </p>
        </div>
        <div className="lg:w-1/2">
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

