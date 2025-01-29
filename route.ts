import { NextResponse } from "next/server"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwIrlqo8PnqToS7fGzEJK7EmRBtKJ5RuyOTXGT4JvcbjF1t7T-syiyGYUEBcftpjtMC/exec"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "gradeLevel"]
    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Error(`Missing required field: ${field}`)
      }
    }

    console.log("Submitting data to GAS:", JSON.stringify(data))

    // Send data in the format expected by the Apps Script
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        gradeLevel: data.gradeLevel,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const responseText = await response.text()
    console.log("GAS Response:", responseText)

    let result
    try {
      result = JSON.parse(responseText)
    } catch (parseError) {
      console.error("Failed to parse GAS response:", parseError)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to parse response from Google Apps Script.",
        },
        { status: 500 },
      )
    }

    if (!result.success) {
      throw new Error(result.message || "Error in Google Apps Script.")
    }

    return NextResponse.json(result)
  } catch (error: any) {
    console.error("Error submitting form:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}

