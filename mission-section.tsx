"use client"

import type React from "react"
import { Book, Rocket, Microscope, Users, Brain } from "lucide-react"
import { motion } from "framer-motion"

const MissionSection: React.FC = () => {
  const coreValues = [
    {
      icon: Book,
      value: "Educational Excellence",
      description: "Delivering innovative, high-quality STEM education",
    },
    {
      icon: Microscope,
      value: "Scientific Discovery",
      description: "Fostering hands-on exploration and experimentation",
    },
    {
      icon: Rocket,
      value: "Future-Ready Skills",
      description: "Preparing students for advanced scientific careers",
    },
    {
      icon: Users,
      value: "Collaborative Learning",
      description: "Building a community of young scientists",
    },
    {
      icon: Brain,
      value: "Critical Thinking",
      description: "Developing analytical and problem-solving abilities",
    },
  ]

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At BioQuest, we inspire and empower the next generation of scientists through innovative and engaging
            biology education.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="w-48 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4"
                whileHover={{ y: -10, backgroundColor: "#E9D5FF" }}
                transition={{ duration: 0.3 }}
              >
                <value.icon className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{value.value}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection

