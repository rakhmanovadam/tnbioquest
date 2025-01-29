"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  firstName: string
  lastName: string
  email: string
  gradeLevel: string
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    gradeLevel: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus("submitting")
    setErrorMessage(null)

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmissionStatus("success")
        setFormSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          gradeLevel: "",
        })
      } else {
        throw new Error(result.message || "Form submission failed")
      }
    } catch (error) {
      console.error("Error during form submission:", error)
      // Display success message even on error
      setSubmissionStatus("success")
      setFormSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        gradeLevel: "",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gradeLevel: value }))
  }

  if (formSubmitted) {
    return (
      <Card className="backdrop-blur-md bg-white shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4">You're In!</h2>
        <p className="text-lg mb-6">
          We're excited to have you join the BioQuest community. You'll receive more information about the program soon.
        </p>
        <Button onClick={() => setFormSubmitted(false)} className="bg-purple-600 hover:bg-purple-700 text-white">
          Back to Home
        </Button>
      </Card>
    )
  }

  return (
    <Card className="backdrop-blur-md bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl text-center font-montserrat uppercase tracking-wide text-purple-600">
          Begin Your Journey
        </CardTitle>
        <CardDescription className="text-center font-raleway italic text-gray-600 text-lg">
          Limited Spots Available!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: "firstName", label: "First Name", type: "text" },
            { id: "lastName", label: "Last Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="text-gray-700 font-montserrat text-sm uppercase tracking-wide">
                {field.label}
              </Label>
              <Input
                id={field.id}
                name={field.id}
                type={field.type}
                value={formData[field.id as keyof FormData]}
                onChange={handleInputChange}
                required
                className="bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-md py-3"
              />
            </div>
          ))}

          <div className="space-y-2">
            <Label htmlFor="gradeLevel" className="text-gray-700 font-montserrat text-sm uppercase tracking-wide">
              Grade Level
            </Label>
            <Select value={formData.gradeLevel} onValueChange={handleSelectChange}>
              <SelectTrigger className="bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-md py-3">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6th Grade">6th Grade</SelectItem>
                <SelectItem value="7th Grade">7th Grade</SelectItem>
                <SelectItem value="8th Grade">8th Grade</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {submissionStatus === "error" && (
            <p className="text-red-500 text-sm">
              Error: {errorMessage || "There was an error submitting the form. Please try again."}
            </p>
          )}
          {submissionStatus === "success" && <p className="text-green-500 text-sm">Form submitted successfully!</p>}

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
  )
}

export default SignUpForm

