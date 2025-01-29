import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { curriculumData } from "../data/curriculum-data"

const CurriculumSection: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-['Montserrat'] font-bold text-center uppercase tracking-wide mb-16 text-gray-800">
          Curriculum Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curriculumData.map((item, index) => (
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
                  <span className="ml-2">{item.weeks}</span>
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
  )
}

export default CurriculumSection

