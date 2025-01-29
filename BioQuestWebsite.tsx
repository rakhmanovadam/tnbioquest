import type React from "react"
import { useState } from "react"
import { ArrowRight, Instagram, Youtube, Menu, GraduationCap, Users, Clock, Laptop, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

const AtomLogo = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <defs>
      <radialGradient id="atom-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4">
          <animate attributeName="stopOpacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Electron orbits */}
    <g className="animate-[spin_10s_linear_infinite]">
      <ellipse cx="32" cy="32" rx="28" ry="14" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
    </g>
    <g className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "center", transform: "rotate(60deg)" }}>
      <ellipse cx="32" cy="32" rx="28" ry="14" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
    </g>
    <g
      className="animate-[spin_10s_linear_infinite]"
      style={{ transformOrigin: "center", transform: "rotate(-60deg)" }}
    >
      <ellipse cx="32" cy="32" rx="28" ry="14" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
    </g>

    {/* Nucleus */}
    <circle cx="32" cy="32" r="6" fill="#8B5CF6">
      <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Electrons */}
    <circle cx="4" cy="32" r="2" fill="#8B5CF6" className="animate-pulse" />
    <circle cx="60" cy="32" r="2" fill="#8B5CF6" className="animate-pulse [animation-delay:333ms]" />
    <circle cx="32" cy="4" r="2" fill="#8B5CF6" className="animate-pulse [animation-delay:666ms]" />
    <circle cx="32" cy="60" r="2" fill="#8B5CF6" className="animate-pulse [animation-delay:999ms]" />
  </svg>
)

const BioQuestWebsite = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    gradeLevel: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionStatus("submitting")

    const corsProxy = "https://cors-anywhere.herokuapp.com/"

    // Your Google Apps Script Web App URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzGjbqMa_ztcm9EntMHKKkHrqGLKBxi-QWtQI15X8M5YHWSKE0IhXihQs7BqslmdCgV/exec"

    // Complete URL with CORS Proxy
    const proxiedURL = `${corsProxy}${scriptURL}`

    try {
      const response = await fetch(proxiedURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // If the proxy requires additional headers, add them here
          // "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Form submitted successfully:", result.message)
        setSubmissionStatus("success")
        setFormSubmitted(true)
        // Optionally, reset the form
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          gradeLevel: "",
        })
      } else {
        const errorText = await response.text()
        console.error("Failed to submit the form:", response.status, response.statusText, errorText)
        setSubmissionStatus("error")
        alert(`Failed to submit the form. Status: ${response.status}. Please try again.`)
      }
    } catch (error: any) {
      console.error("Error during form submission:", error)
      setSubmissionStatus("error")
      alert(`An error occurred while submitting the form: ${error.message}. Please try again.`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, gradeLevel: value })
  }

  const curriculum = [
    {
      title: "Biochemistry",
      weeks: "Weeks 1-5",
      description: "Explore the building blocks of life",
      details: [
        "Atoms and Molecules: Basic units of life",
        "Organic Compounds: Carbohydrates, proteins, lipids, nucleic acids",
        "Enzymes: Biological catalysts",
        "Metabolism: Energy transfer in organisms",
      ],
      activities: ["Chemical Reactions in the Body", "Making a Model of a Molecule", "Food Tests for Nutrients"],
      progress: 100,
      icon: (
        <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
          <defs>
            <radialGradient id="molecule-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4">
                <animate attributeName="stopOpacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background glow */}
          <circle cx="32" cy="32" r="30" fill="url(#molecule-glow)" />

          {/* Molecule structure */}
          <g>
            <circle cx="32" cy="32" r="6" fill="#8B5CF6">
              <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="32" cy="16" r="4" fill="#10B981" className="animate-pulse" />
            <circle cx="48" cy="32" r="4" fill="#10B981" className="animate-pulse" />
            <circle cx="32" cy="48" r="4" fill="#10B981" className="animate-pulse" />
            <circle cx="16" cy="32" r="4" fill="#10B981" className="animate-pulse" />

            <path d="M32 16 L32 26" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
            <path d="M48 32 L38 32" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
            <path d="M32 48 L32 38" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
            <path d="M16 32 L26 32" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
          </g>

          {/* Electrons */}
          <circle cx="32" cy="16" r="2" fill="#8B5CF6">
            <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="48" cy="32" r="2" fill="#8B5CF6">
            <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" begin="0.25s" />
          </circle>
          <circle cx="32" cy="48" r="2" fill="#8B5CF6">
            <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="16" cy="32" r="2" fill="#8B5CF6">
            <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" begin="0.75s" />
          </circle>
        </svg>
      ),
    },
    {
      title: "Cells",
      weeks: "Weeks 6-9",
      description: "Dive into the basic unit of all living things",
      details: [
        "Cell Theory: Fundamental principles",
        "Types of Cells: Prokaryotic and eukaryotic",
        "Cell Structures: Nucleus, mitochondria, cell membrane, etc.",
        "Cell Functions: Energy production, transport, division",
      ],
      activities: ["Microscope Work: Examining plant and animal cells", "Cell Model Creation", "Osmosis Demonstration"],
      progress: 100,
      icon: (
        <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
          <defs>
            <radialGradient id="cell-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Cell membrane */}
          <circle cx="32" cy="32" r="28" fill="url(#cell-gradient)" className="animate-pulse" />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-[spin_20s_linear_infinite]"
          />

          {/* Nucleus */}
          <circle cx="32" cy="32" r="12" fill="#10B981" opacity="0.8" />

          {/* Organelles */}
          <g className="animate-[bounce_2s_ease-in-out_infinite]">
            <circle cx="20" cy="20" r="4" fill="#8B5CF6" opacity="0.6" />
            <circle cx="44" cy="24" r="3" fill="#8B5CF6" opacity="0.6" />
            <circle cx="24" cy="44" r="5" fill="#8B5CF6" opacity="0.6" />
            <circle cx="40" cy="40" r="3" fill="#8B5CF6" opacity="0.6" />
          </g>

          {/* Moving particles */}
          <circle cx="28" cy="16" r="1" fill="#10B981" className="animate-ping" />
          <circle cx="48" cy="32" r="1" fill="#10B981" className="animate-ping [animation-delay:500ms]" />
          <circle cx="32" cy="48" r="1" fill="#10B981" className="animate-ping [animation-delay:1000ms]" />
        </svg>
      ),
    },
    {
      title: "Genetics",
      weeks: "Weeks 10-13",
      description: "Understand the code of life",
      details: [
        "DNA and Genes: Structure and function",
        "Chromosomes: Organization of genetic material",
        "Mendel&apos;s Laws of Inheritance: Dominant and recessive traits",
        "Genetic Variation: Mutations and environmental factors",
      ],
      activities: ["Punnett Square Practice", "Genetics Inheritance Game", "DNA Extraction from Fruit"],
      progress: 100,
      icon: (
        <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
          <defs>
            <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Double Helix Animation */}
          <g>
            {/* First Strand */}
            <path
              d="M20 12 Q32 20, 44 12 Q56 4, 44 52 Q32 60, 20 52 Q8 44, 20 12"
              fill="none"
              stroke="url(#dna-gradient)"
              strokeWidth="2"
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="
                  M20 12 Q32 20, 44 12 Q56 4, 44 52 Q32 60, 20 52 Q8 44, 20 12;
                  M20 52 Q32 60, 44 52 Q56 44, 44 12 Q32 20, 20 12 Q8 4, 20 52;
                  M20 12 Q32 20, 44 12 Q56 4, 44 52 Q32 60, 20 52 Q8 44, 20 12"
              />
            </path>

            {/* Base Pairs */}
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                <line x1="24" y1={16 + i * 8} x2="40" y2={16 + i * 8} stroke="#8B5CF6" strokeWidth="1" />
                <circle cx="24" cy={16 + i * 8} r="2" fill="#10B981" />
                <circle cx="40" cy={16 + i * 8} r="2" fill="#10B981" />
              </g>
            ))}
          </g>
        </svg>
      ),
    },
    {
      title: "Plants and Animal Structures",
      weeks: "Weeks 14-19",
      description: "Explore the diversity of life forms",
      details: [
        "Plant Structures: Roots, stems, leaves, flowers",
        "Photosynthesis: The process of making food",
        "Animal Organ Systems: Digestive, circulatory, respiratory, nervous",
        "Vertebrates &amp; Invertebrates: Comparative anatomy", // Update 1
      ],
      activities: ["Plant Dissection", "Photosynthesis Experiment", "Animal Body System Model Creation"],
      progress: 100,
      icon: (
        <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
          {/* Tree */}
          <g className="animate-[bounce_3s_ease-in-out_infinite]">
            <path d="M32 8 L40 24 L24 24 Z" fill="#8B5CF6" opacity="0.8" />
            <path d="M32 16 L44 32 L20 32 Z" fill="#8B5CF6" opacity="0.9" />
            <path d="M32 24 L48 40 L16 40 Z" fill="#8B5CF6" />
            <rect x="30" y="40" width="4" height="16" fill="#10B981" />
          </g>

          {/* Animated leaves */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} className={`animate-[spin_${3 + i}s_linear_infinite]`}>
              <circle
                cx={24 + i * 8}
                cy={16 + i * 4}
                r="2"
                fill="#8B5CF6"
                className="animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            </g>
          ))}

          {/* Butterflies */}
          <g className="animate-[bounce_4s_ease-in-out_infinite]">
            <path d="M12 20 Q16 16, 20 20 Q16 24, 12 20" fill="#10B981" opacity="0.6" />
            <path d="M44 28 Q48 24, 52 28 Q48 32, 44 28" fill="#10B981" opacity="0.6">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 48 28"
                to="360 48 28"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white font-['Poppins', sans-serif] text-gray-800 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50"></div>

        {/* Middle Layers */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Large Hexagon */}
          <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="url(#hexGradient)" opacity="0.05">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="120s"
              repeatCount="indefinite"
            />
          </polygon>

          {/* Wave Patterns */}
          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#3B82F6" strokeWidth="0.5" opacity="0.1">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="0 20"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.1">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="0 -20"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>

          {/* Floating Circles */}
          {[...Array(20)].map((_, i) => (
            <circle key={i} r="0.5" fill="#3B82F6" opacity="0.3">
              <animate
                attributeName="cx"
                from={`${Math.random() * 100}`}
                to={`${Math.random() * 100}`}
                dur={`${10 + Math.random() * 20}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from={`${Math.random() * 100}`}
                to={`${Math.random() * 100}`}
                dur={`${10 + Math.random() * 20}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <AtomLogo />
                <span className="font-['Montserrat'] font-extrabold text-3xl text-gray-800 tracking-tight">
                  BioQuest
                </span>
              </div>

              <div className="hidden md:flex space-x-8">
                <a href="#signup" className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-2">
                  Sign Up
                </a>
                <a href="#curriculum" className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-2">
                  Curriculum
                </a>
                <a href="#mission" className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-2">
                  Our Mission
                </a>
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
                    <a href="#signup" className="block text-gray-600 hover:text-purple-600 transition-colors">
                      Sign Up
                    </a>
                    <a href="#curriculum" className="block text-gray-600 hover:text-purple-600 transition-colors">
                      Curriculum
                    </a>
                    <a href="#mission" className="block text-gray-600 hover:text-purple-600 transition-colors">
                      Our Mission
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Hero Section with Sign Up */}
        <section id="signup" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="font-['Montserrat'] text-5xl md:text-6xl font-semibold tracking-wide uppercase mb-6 text-gray-800">
                Inspiring the Next Generation of STEM Innovators
              </h1>
              <p className="text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-['Raleway'] italic mb-8">
                Join us on a journey of discovery and innovation in science
              </p>
            </div>
            <div className="lg:w-1/2">
              {formSubmitted ? (
                <Card className="backdrop-blur-md bg-white shadow-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">You&apos;re In!</h2>
                  <p className="text-lg mb-6">
                    We&apos;re excited to have you join the BioQuest community. You&apos;ll receive more information
                    about the program soon.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Back to Home
                  </Button>
                </Card>
              ) : (
                <Card className="backdrop-blur-md bg-white shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <CardTitle className="text-3xl text-center font-['Montserrat'] uppercase tracking-wide text-purple-600">
                      Begin Your Journey
                    </CardTitle>
                    <CardDescription className="text-center font-['Raleway'] italic text-gray-600 text-lg">
                      Limited Spots Available!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {[
                        { id: "studentName", label: "Student Name", type: "text" },
                        { id: "parentName", label: "Parent/Guardian Name", type: "text" },
                        { id: "email", label: "Email", type: "email" },
                      ].map((field) => (
                        <div key={field.id} className="space-y-2">
                          <Label
                            htmlFor={field.id}
                            className="text-gray-700 font-['Montserrat'] text-sm uppercase tracking-wide"
                          >
                            {field.label}
                          </Label>
                          <Input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            value={formData[field.id]}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-md py-3"
                          />
                        </div>
                      ))}

                      <div className="space-y-2">
                        <Label
                          htmlFor="gradeLevel"
                          className="text-gray-700 font-['Montserrat'] text-sm uppercase tracking-wide"
                        >
                          Grade Level
                        </Label>
                        <Select name="gradeLevel" value={formData.gradeLevel} onValueChange={handleSelectChange}>
                          <SelectTrigger className="bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-md py-3">
                            <SelectValue placeholder="Select Grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">6th Grade</SelectItem>
                            <SelectItem value="7">7th Grade</SelectItem>
                            <SelectItem value="8">8th Grade</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {submissionStatus === "error" && (
                        <p className="text-red-500 text-sm">
                          There was an error submitting the form. Please try again.
                        </p>
                      )}
                      {submissionStatus === "success" && (
                        <p className="text-green-500 text-sm">Form submitted successfully!</p>
                      )}

                      <Button
                        type="submit"
                        disabled={submissionStatus === "submitting"}
                        className="w-full text-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white transition-colors py-3 rounded-md font-bold"
                      >
                        {submissionStatus === "submitting" ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Submitting...
                          </>
                        ) : submissionStatus === "error" ? (
                          "Try Again"
                        ) : (
                          <>
                            Begin Your Journey
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-gradient-to-br from-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-['Montserrat'] font-bold tracking-tight mb-4">Why Choose BioQuest?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive biology program designed for student success
              </p>
            </div>

            <div className="relative">
              {/* Curved line */}
              <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d="M0,50 C25,0 75,100 100,50"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto relative z-10">
                <TooltipProvider>
                  {[
                    {
                      icon: GraduationCap,
                      title: "Expert-Led Sessions",
                      description: "Learn from experienced educators through interactive online sessions",
                    },
                    {
                      icon: Users,
                      title: "Small Group Learning",
                      description: "Join a supportive learning environment with personalized attention",
                    },
                    {
                      icon: Clock,
                      title: "Flexible Schedule",
                      description: "Access recorded sessions and materials at your convenience",
                    },
                    {
                      icon: Laptop,
                      title: "100% Remote",
                      description: "Learn from anywhere with just a computer and internet connection",
                    },
                  ].map(({ icon: Icon, title, description }, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <div className="text-center group">
                          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-10 h-10 text-purple-500" />
                          </div>
                          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">{description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-['Montserrat'] font-bold text-center uppercase tracking-wide mb-16 text-gray-800">
              Curriculum Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {curriculum.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 bg-white shadow-lg overflow-hidden"
                >
                  <CardHeader className="border-b border-gray-20">
                    <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl text-center font-['Montserrat'] group-hover:text-purple-600 transition-colors">
                      {item.title}
                      <Badge variant="secondary" className="ml-2">
                        {item.weeks}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 text-center mb-6">{item.description}</p>
                    <Progress value={item.progress} className="h-2 bg-gray-200" />
                    <Accordion type="single" collapsible className="mt-4">
                      <AccordionItem value="details">
                        <AccordionTrigger>View Details</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2">
                            {item.details.map((detail, i) => (
                              <li key={i} className="text-sm text-gray-600">
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <h4 className="font-semibold mt-4 mb-2">Activities:</h4>
                          <ul className="list-disc pl-5 space-y-2">
                            {item.activities.map((activity, i) => (
                              <li key={i} className="text-sm text-gray-600">
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-24 px-4 bg-gradient-to-br from-white to-purple-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-['Montserrat'] font-bold tracking-tight mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To inspire and empower the next generation of scientists through innovative and engaging biology
              education.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-800 py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <AtomLogo />
                <h3 className="font-['Montserrat'] text-2xl font-bold">BioQuest</h3>
              </div>
              <p className="text-gray-600">
                Empowering the next generation of scientists through innovative education.
              </p>
            </div>

            <div>
              <h4 className="font-['Montserrat'] text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-600">
                <p>Email: tnbioquest@gmail.com</p>
              </div>
              <div className="mt-6 flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-500">
            <p>&copy; 2025 BioQuest. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default BioQuestWebsite

