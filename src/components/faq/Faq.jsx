"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const faqData = [
  {
    question: "What Amazon account management services do you provide?",
    answer:
      "We offer comprehensive Amazon account management including listing optimization, inventory management, PPC campaign setup and management, review monitoring, competitor analysis, and performance reporting. Our team handles day-to-day operations so you can focus on growing your business.",
  },
  {
    question: "How do you help improve my Amazon product rankings?",
    answer:
      "We optimize your product listings with keyword research, compelling titles and descriptions, high-quality images, and strategic pricing. We also manage PPC campaigns to increase visibility and implement SEO best practices to improve organic rankings on Amazon search results.",
  },
  {
    question: "Can you help with Amazon PPC advertising?",
    answer:
      "Yes, we specialize in Amazon PPC management including Sponsored Products, Sponsored Brands, and Sponsored Display campaigns. We conduct keyword research, create targeted ad groups, optimize bids, and provide detailed performance reports to maximize your ROI.",
  },
  {
    question: "Do you provide Amazon inventory management?",
    answer:
      "Absolutely. We monitor your inventory levels, forecast demand, coordinate with suppliers, and ensure optimal stock levels to avoid stockouts or excess inventory. We also help with FBA shipment planning and inventory reconciliation.",
  },
  {
    question: "How do you handle negative reviews and customer feedback?",
    answer:
      "We monitor your reviews daily and respond professionally to customer concerns. We help resolve issues that lead to negative feedback, implement strategies to encourage positive reviews, and work on improving overall customer satisfaction scores.",
  },
  {
    question: "What reporting and analytics do you provide?",
    answer:
      "We provide comprehensive monthly reports including sales performance, traffic analytics, conversion rates, PPC campaign results, inventory status, and competitor analysis. All reports include actionable insights and recommendations for continued growth.",
  },
]

export default function Faq() {
  const [openItems, setOpenItems] = useState([0]) 

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      <div className="text-center mb-12">
        <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          TRUSTED BY BUSINESSES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently
          <br />
          Asked Questions
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our Amazon account management
          services.
        </p>
      </div>

      <div className="space-y-4 ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md",
              openItems.includes(index) ? "bg-gray-50" : "bg-white"
            )}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-150"
            >
              <span className="font-semibold text-gray-900 text-lg pr-4">
                {item.question}
              </span>
              <div
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200",
                  openItems.includes(index)
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400 text-black hover:bg-yellow-500"
                )}
              >
                {openItems.includes(index) ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>

            {openItems.includes(index) && (
              <div className="px-6 pb-6">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
{/* 
      <div className="mt-16 text-center">
        <div className="">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our Amazon experts are here to help you grow your business
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors duration-200">
            Contact Our Team
          </button>
        </div>
      </div> */}
    </div>
  )
}
