

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 mt-40">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Virtual Assistant Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto ">
            Expert solutions for Amazon sellers to enhance your business performance and drive growth
          </p>
        </div>

        {/* Top Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Product Listing */}
          <Card className="bg-cyan-100 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Listing</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Creating Certified Amazon Product Listings to Boost Visibility, Improve Search Rankings, and Drive
                Higher Conversions for Amazon Success.
              </p>
            </CardContent>
          </Card>

          {/* Product Segmentation */}
          <Card className="bg-cyan-100 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Segmentation</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Data Analysis with the help of selling, sales, rank, and performance metrics to optimize inventory,
                marketing, and Profitable sales and Strategies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Central Diagram */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[500px] h-[400px]">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-sm font-bold">LISTING</div>
                <div className="text-sm font-bold">OPTIMIZATION</div>
              </div>
            </div>

            {/* Service Bubbles - positioned to match screenshot */}
            {/* Product Listing - top */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-cyan-200 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Product Listing</span>
            </div>

            {/* Backend Search Terms - top right */}
            <div className="absolute top-8 right-12 w-20 h-14 bg-purple-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Backend Search Terms</span>
            </div>

            {/* Keyword Research - right */}
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-20 h-14 bg-red-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Keyword Research</span>
            </div>

            {/* Bullet Points - bottom right */}
            <div className="absolute bottom-8 right-12 w-18 h-14 bg-orange-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Bullet Points</span>
            </div>

            {/* Product Description - bottom */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-yellow-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Product Description</span>
            </div>

            {/* A+ Content with EBC - bottom left */}
            <div className="absolute bottom-8 left-12 w-18 h-14 bg-green-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">A+ Content with EBC</span>
            </div>

            {/* Content Creation - left */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-20 h-14 bg-blue-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Content Creation</span>
            </div>

            {/* Competitive Analysis - top left */}
            <div className="absolute top-8 left-12 w-20 h-14 bg-indigo-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Competitive Analysis</span>
            </div>

            {/* Accurate Product Details - top right inner */}
            {/* <div className="absolute top-16 right-24 w-16 h-12 bg-pink-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">Accurate Product Details</span>
            </div> */}

            {/* High-Quality Product Images - bottom right inner */}
            {/* <div className="absolute bottom-16 right-24 w-16 h-12 bg-teal-300 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs text-center font-medium px-1">High-Quality Product Images</span>
            </div> */}
          </div>
        </div>

        {/* Bottom Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Listing Audit */}
          <Card className="bg-cyan-100 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Listing Audit</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Comprehensive Amazon Listing Audit to Identify Gaps, Optimize Content, and Enhance Performance for
                Increased Visibility and Conversions.
              </p>

              {/* Amazon Audit Graphic */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 flex items-center justify-between mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="text-white relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-orange-700 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">A</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">54</div>
                      <div className="text-xs">AUDIT POINTS</div>
                    </div>
                  </div>
                  <div className="text-xs">FIND OUT</div>
                  <div className="text-xs">RECOMMENDATIONS</div>
                  <div className="text-xs">PLAN OF ACTION</div>
                </div>
                <div className="text-white text-right relative z-10">
                  <div className="text-lg font-bold">AMAZON LISTING</div>
                  <div className="text-lg font-bold">AUDIT</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 bg-orange-300 rounded"></div>
                    <div className="w-6 h-6 bg-yellow-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Data Table */}
              <div className="bg-white rounded border overflow-hidden">
                <div className="bg-yellow-400 p-2">
                  <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
                    <div>Audit Points</div>
                    <div className="text-center">Status</div>
                    <div className="text-center">Priority</div>
                    <div className="text-center">Action Required</div>
                  </div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-4 gap-2 p-2 text-xs">
                    <div>Title Optimization</div>
                    <div className="text-center text-green-600">✓</div>
                    <div className="text-center">
                      <span className="bg-green-200 px-2 py-1 rounded">High</span>
                    </div>
                    <div className="text-center">Complete</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 p-2 text-xs">
                    <div>Bullet Points</div>
                    <div className="text-center text-red-600">✗</div>
                    <div className="text-center">
                      <span className="bg-red-200 px-2 py-1 rounded">High</span>
                    </div>
                    <div className="text-center">Update</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 p-2 text-xs">
                    <div>Product Images</div>
                    <div className="text-center text-green-600">✓</div>
                    <div className="text-center">
                      <span className="bg-yellow-200 px-2 py-1 rounded">Med</span>
                    </div>
                    <div className="text-center">Optimize</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 p-2 text-xs">
                    <div>Backend Keywords</div>
                    <div className="text-center text-red-600">✗</div>
                    <div className="text-center">
                      <span className="bg-green-200 px-2 py-1 rounded">High</span>
                    </div>
                    <div className="text-center">Add</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PPC Services */}
          <div className="space-y-6">
            {/* Strategic Pay Per Click Advertising */}
            <Card className="bg-cyan-100 border-cyan-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Pay Per Click Advertising (PPC)</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Expert Amazon PPC management to identify high-performing keywords and optimize ad spend for maximum
                  ROI and increased sales.
                </p>

                {/* Enhanced PPC Data Table */}
                <div className="bg-white rounded border overflow-hidden">
                  <div className="bg-red-500 text-white p-2">
                    <div className="grid grid-cols-5 gap-2 text-xs font-semibold">
                      <div>Campaign</div>
                      <div className="text-center">Impressions</div>
                      <div className="text-center">Clicks</div>
                      <div className="text-center">CTR</div>
                      <div className="text-center">CPC</div>
                    </div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-5 gap-2 p-2 text-xs">
                      <div>Auto Campaign</div>
                      <div className="text-center">12,450</div>
                      <div className="text-center">234</div>
                      <div className="text-center">1.88%</div>
                      <div className="text-center">$0.45</div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 p-2 text-xs bg-yellow-50">
                      <div>Manual Campaign</div>
                      <div className="text-center">8,920</div>
                      <div className="text-center">178</div>
                      <div className="text-center">2.00%</div>
                      <div className="text-center">$0.52</div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 p-2 text-xs">
                      <div>Brand Campaign</div>
                      <div className="text-center">5,670</div>
                      <div className="text-center">145</div>
                      <div className="text-center">2.56%</div>
                      <div className="text-center">$0.38</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PPC Performance Audit */}
            <Card className="bg-cyan-100 border-cyan-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">PPC Performance Audit</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Evaluate your Amazon PPC campaigns to identify optimization opportunities, reduce wasted spend, and
                  maximize advertising efficiency.
                </p>

                {/* Enhanced Performance Metrics */}
                <div className="space-y-3">
                  <div className="bg-blue-600 text-white p-2 rounded text-center text-sm font-medium">
                    By Search Type
                  </div>
                  <div className="bg-white rounded border overflow-hidden">
                    <div className="divide-y">
                      <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50 font-semibold">
                        <div>Match Type</div>
                        <div className="text-center">Share</div>
                        <div className="text-center">Spend</div>
                        <div className="text-center">Orders</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 p-2 text-xs">
                        <div>Broad Match</div>
                        <div className="text-center">45%</div>
                        <div className="text-center">$234</div>
                        <div className="text-center">12</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50">
                        <div>Phrase Match</div>
                        <div className="text-center">35%</div>
                        <div className="text-center">$189</div>
                        <div className="text-center">8</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 p-2 text-xs">
                        <div>Exact Match</div>
                        <div className="text-center">20%</div>
                        <div className="text-center">$145</div>
                        <div className="text-center">15</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-600 text-white p-2 rounded text-center text-sm font-medium">By Targeting</div>
                  <div className="bg-white rounded border overflow-hidden">
                    <div className="divide-y">
                      <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50 font-semibold">
                        <div>Target Type</div>
                        <div className="text-center">Share</div>
                        <div className="text-center">Spend</div>
                        <div className="text-center">ROAS</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 p-2 text-xs">
                        <div>Auto Targeting</div>
                        <div className="text-center">60%</div>
                        <div className="text-center">$345</div>
                        <div className="text-center">1.8x</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50">
                        <div>Manual Targeting</div>
                        <div className="text-center">40%</div>
                        <div className="text-center">$223</div>
                        <div className="text-center">2.2x</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Customer Review */}
        <Card className="bg-white border-gray-200 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                B
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-900">blogger107</span>
                  <span className="text-sm text-gray-500">Romania</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">7 months ago</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Ahmad Ali is a fantastic Amazon virtual assistant. He transformed my product listing with top-notch
                  keyword research, competitor analysis, and a compelling description. His expertise boosted my
                  visibility and sales. Highly recommend!
                </p>
                <div className="flex items-center gap-8 text-sm text-gray-600">
                  <div>
                    <div className="font-medium">Up to $60</div>
                    <div className="text-xs">Price</div>
                  </div>
                  <div>
                    <div className="font-medium">1 day</div>
                    <div className="text-xs">Duration</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
