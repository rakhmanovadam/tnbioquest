"use client"

import type React from "react"
import { GraduationCap, Users, Clock, Laptop } from "lucide-react"
import { motion } from "framer-motion"

const FeatureCard: React.FC<{
  icon: React.ElementType
  title: string
  description: string
}> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer group relative overflow-hidden"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Icon className="w-8 h-8 text-purple-600" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <motion.p
          className="text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert-Led Sessions",
      description:
        "Learn from top-tier educators in interactive, engaging online classes that foster critical thinking and scientific curiosity.",
    },
    {
      icon: Users,
      title: "Small Group Learning",
      description:
        "Benefit from personalized attention in collaborative groups, maximizing your potential through tailored support and peer interaction.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Access a comprehensive library of recorded sessions and materials at your convenience, allowing for self-paced, adaptive learning.",
    },
    {
      icon: Laptop,
      title: "100% Remote",
      description:
        "Join world-class biology instruction from anywhere, breaking down geographical barriers to access cutting-edge STEM education.",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-['Montserrat'] font-bold tracking-tight mb-4">Why Choose BioQuest?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive biology program designed for student success and scientific exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection

