"use client"

import type React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import AtomLogo from "./atom-logo"

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <AtomLogo />
            <span className="font-['Montserrat'] font-extrabold text-3xl text-gray-800 tracking-tight">BioQuest</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("signup")}
              className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-2"
            >
              Sign Up
            </button>
            <button
              onClick={() => scrollToSection("curriculum")}
              className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-2"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-2"
            >
              Our Mission
            </button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through our website</SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <button
                  onClick={() => scrollToSection("signup")}
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => scrollToSection("curriculum")}
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Curriculum
                </button>
                <button
                  onClick={() => scrollToSection("mission")}
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Our Mission
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

