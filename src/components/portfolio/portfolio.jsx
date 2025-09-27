

// import { Card, CardContent } from "@/components/ui/card"
// import { Star } from "lucide-react"

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen  py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12 mt-14">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Virtual Assistant Services</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto ">
//             Expert solutions for Amazon sellers to enhance your business performance and drive growth
//           </p>
//         </div>

//         {/* Top Service Cards */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           {/* Product Listing */}
//           <Card className="bg-cyan-100 border-cyan-200">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Listing</h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 Creating Certified Amazon Product Listings to Boost Visibility, Improve Search Rankings, and Drive
//                 Higher Conversions for Amazon Success.
//               </p>
//             </CardContent>
//           </Card>

//           {/* Product Segmentation */}
//           <Card className="bg-cyan-100 border-cyan-200">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Segmentation</h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 Data Analysis with the help of selling, sales, rank, and performance metrics to optimize inventory,
//                 marketing, and Profitable sales and Strategies.
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Central Diagram */}
//         <div className="flex justify-center">
     
           
        
//         <div className="rounded-lg">
//           <img
//             src="/assets/portfolio.jpg"
//             alt="Modern workspace with laptop, coffee cup, and notebook"
//             className="w-full h-[600px]  rounded-lg "
//           />
//         </div>
    

            
           

           

          

         
//         </div>

//         {/* Bottom Service Cards */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           {/* Listing Audit */}
//           <Card className="bg-cyan-100 border-cyan-200">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">Listing Audit</h3>
//               <p className="text-gray-700 text-sm leading-relaxed mb-4">
//                 Comprehensive Amazon Listing Audit to Identify Gaps, Optimize Content, and Enhance Performance for
//                 Increased Visibility and Conversions.
//               </p>

//               {/* Amazon Audit Graphic */}
//               <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 flex items-center justify-between mb-4 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black opacity-10"></div>
//                 <div className="text-white relative z-10">
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="w-8 h-8 bg-orange-700 rounded-full flex items-center justify-center">
//                       <span className="text-xs font-bold">A</span>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold">54</div>
//                       <div className="text-xs">AUDIT POINTS</div>
//                     </div>
//                   </div>
//                   <div className="text-xs">FIND OUT</div>
//                   <div className="text-xs">RECOMMENDATIONS</div>
//                   <div className="text-xs">PLAN OF ACTION</div>
//                 </div>
//                 <div className="text-white text-right relative z-10">
//                   <div className="text-lg font-bold">AMAZON LISTING</div>
//                   <div className="text-lg font-bold">AUDIT</div>
//                   <div className="flex items-center gap-2 mt-2">
//                     <div className="w-6 h-6 bg-orange-300 rounded"></div>
//                     <div className="w-6 h-6 bg-yellow-300 rounded"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Enhanced Data Table */}
//               <div className="bg-white rounded border overflow-hidden">
//                 <div className="bg-yellow-400 p-2">
//                   <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
//                     <div>Audit Points</div>
//                     <div className="text-center">Status</div>
//                     <div className="text-center">Priority</div>
//                     <div className="text-center">Action Required</div>
//                   </div>
//                 </div>
//                 <div className="divide-y">
//                   <div className="grid grid-cols-4 gap-2 p-2 text-xs">
//                     <div>Title Optimization</div>
//                     <div className="text-center text-green-600">✓</div>
//                     <div className="text-center">
//                       <span className="bg-green-200 px-2 py-1 rounded">High</span>
//                     </div>
//                     <div className="text-center">Complete</div>
//                   </div>
//                   <div className="grid grid-cols-4 gap-2 p-2 text-xs">
//                     <div>Bullet Points</div>
//                     <div className="text-center text-red-600">✗</div>
//                     <div className="text-center">
//                       <span className="bg-red-200 px-2 py-1 rounded">High</span>
//                     </div>
//                     <div className="text-center">Update</div>
//                   </div>
//                   <div className="grid grid-cols-4 gap-2 p-2 text-xs">
//                     <div>Product Images</div>
//                     <div className="text-center text-green-600">✓</div>
//                     <div className="text-center">
//                       <span className="bg-yellow-200 px-2 py-1 rounded">Med</span>
//                     </div>
//                     <div className="text-center">Optimize</div>
//                   </div>
//                   <div className="grid grid-cols-4 gap-2 p-2 text-xs">
//                     <div>Backend Keywords</div>
//                     <div className="text-center text-red-600">✗</div>
//                     <div className="text-center">
//                       <span className="bg-green-200 px-2 py-1 rounded">High</span>
//                     </div>
//                     <div className="text-center">Add</div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* PPC Services */}
//           <div className="space-y-6">
//             {/* Strategic Pay Per Click Advertising */}
//             <Card className="bg-cyan-100 border-cyan-200">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Pay Per Click Advertising (PPC)</h3>
//                 <p className="text-gray-700 text-sm leading-relaxed mb-4">
//                   Expert Amazon PPC management to identify high-performing keywords and optimize ad spend for maximum
//                   ROI and increased sales.
//                 </p>

//                 {/* Enhanced PPC Data Table */}
//                 <div className="bg-white rounded border overflow-hidden">
//                   <div className="bg-red-500 text-white p-2">
//                     <div className="grid grid-cols-5 gap-2 text-xs font-semibold">
//                       <div>Campaign</div>
//                       <div className="text-center">Impressions</div>
//                       <div className="text-center">Clicks</div>
//                       <div className="text-center">CTR</div>
//                       <div className="text-center">CPC</div>
//                     </div>
//                   </div>
//                   <div className="divide-y">
//                     <div className="grid grid-cols-5 gap-2 p-2 text-xs">
//                       <div>Auto Campaign</div>
//                       <div className="text-center">12,450</div>
//                       <div className="text-center">234</div>
//                       <div className="text-center">1.88%</div>
//                       <div className="text-center">$0.45</div>
//                     </div>
//                     <div className="grid grid-cols-5 gap-2 p-2 text-xs bg-yellow-50">
//                       <div>Manual Campaign</div>
//                       <div className="text-center">8,920</div>
//                       <div className="text-center">178</div>
//                       <div className="text-center">2.00%</div>
//                       <div className="text-center">$0.52</div>
//                     </div>
//                     <div className="grid grid-cols-5 gap-2 p-2 text-xs">
//                       <div>Brand Campaign</div>
//                       <div className="text-center">5,670</div>
//                       <div className="text-center">145</div>
//                       <div className="text-center">2.56%</div>
//                       <div className="text-center">$0.38</div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* PPC Performance Audit */}
//             <Card className="bg-cyan-100 border-cyan-200">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">PPC Performance Audit</h3>
//                 <p className="text-gray-700 text-sm leading-relaxed mb-4">
//                   Evaluate your Amazon PPC campaigns to identify optimization opportunities, reduce wasted spend, and
//                   maximize advertising efficiency.
//                 </p>

//                 {/* Enhanced Performance Metrics */}
//                 <div className="space-y-3">
//                   <div className="bg-blue-600 text-white p-2 rounded text-center text-sm font-medium">
//                     By Search Type
//                   </div>
//                   <div className="bg-white rounded border overflow-hidden">
//                     <div className="divide-y">
//                       <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50 font-semibold">
//                         <div>Match Type</div>
//                         <div className="text-center">Share</div>
//                         <div className="text-center">Spend</div>
//                         <div className="text-center">Orders</div>
//                       </div>
//                       <div className="grid grid-cols-4 gap-2 p-2 text-xs">
//                         <div>Broad Match</div>
//                         <div className="text-center">45%</div>
//                         <div className="text-center">$234</div>
//                         <div className="text-center">12</div>
//                       </div>
//                       <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50">
//                         <div>Phrase Match</div>
//                         <div className="text-center">35%</div>
//                         <div className="text-center">$189</div>
//                         <div className="text-center">8</div>
//                       </div>
//                       <div className="grid grid-cols-4 gap-2 p-2 text-xs">
//                         <div>Exact Match</div>
//                         <div className="text-center">20%</div>
//                         <div className="text-center">$145</div>
//                         <div className="text-center">15</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-blue-600 text-white p-2 rounded text-center text-sm font-medium">By Targeting</div>
//                   <div className="bg-white rounded border overflow-hidden">
//                     <div className="divide-y">
//                       <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50 font-semibold">
//                         <div>Target Type</div>
//                         <div className="text-center">Share</div>
//                         <div className="text-center">Spend</div>
//                         <div className="text-center">ROAS</div>
//                       </div>
//                       <div className="grid grid-cols-4 gap-2 p-2 text-xs">
//                         <div>Auto Targeting</div>
//                         <div className="text-center">60%</div>
//                         <div className="text-center">$345</div>
//                         <div className="text-center">1.8x</div>
//                       </div>
//                       <div className="grid grid-cols-4 gap-2 p-2 text-xs bg-gray-50">
//                         <div>Manual Targeting</div>
//                         <div className="text-center">40%</div>
//                         <div className="text-center">$223</div>
//                         <div className="text-center">2.2x</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Customer Review */}
//         <Card className="bg-white border-gray-200 max-w-2xl mx-auto">
//           <CardContent className="p-6">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
//                 B
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="font-semibold text-gray-900">blogger107</span>
//                   <span className="text-sm text-gray-500">Romania</span>
//                 </div>
//                 <div className="flex items-center gap-1 mb-3">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   ))}
//                   <span className="text-sm text-gray-600 ml-2">7 months ago</span>
//                 </div>
//                 <p className="text-gray-700 text-sm leading-relaxed mb-4">
//                   Ahmad Ali is a fantastic Amazon virtual assistant. He transformed my product listing with top-notch
//                   keyword research, competitor analysis, and a compelling description. His expertise boosted my
//                   visibility and sales. Highly recommend!
//                 </p>
//                 <div className="flex items-center gap-8 text-sm text-gray-600">
//                   <div>
//                     <div className="font-medium">Up to $60</div>
//                     <div className="text-xs">Price</div>
//                   </div>
//                   <div>
//                     <div className="font-medium">1 day</div>
//                     <div className="text-xs">Duration</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }



import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const portfolioProjects = [
  {
    id: 1,
    title: "E-commerce Store Optimization",
    description:
      "Increased conversion rates by 45% through strategic product listing optimization and enhanced brand content for a consumer electronics retailer.",
    image: "/assets/projects/project1.jpg",
  },
  {
    id: 2,
    title: "FBA Inventory Management",
    description:
      "Streamlined fulfillment operations and reduced storage costs by 30% while maintaining 99.5% in-stock rates for seasonal products.",
    image: "/assets/projects/project2.jpeg",
  },
  {
    id: 3,
    title: "Brand Registry & Protection",
    description:
      "Successfully registered and protected brand assets, resulting in 60% reduction in counterfeit listings and improved brand reputation.",
    image: "/assets/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Advertising Campaign Management",
    description:
      "Optimized PPC campaigns achieving 3.2x ROAS improvement and 25% reduction in ACoS across multiple product categories.",
    image: "/assets/projects/project4.jpg",
  },
  {
    id: 5,
    title: "International Market Expansion",
    description:
      "Facilitated successful expansion into 5 European marketplaces, generating $2M+ in additional revenue within the first year.",
    image: "/assets/projects/project5.jpg",
  },
  {
    id: 6,
    title: "Account Health Recovery",
    description:
      "Restored suspended seller account and implemented compliance protocols, preventing future policy violations and maintaining account health.",
    image: "/assets/projects/project6.jpg",
  },
]

export default function Portfolio() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">My Portfolio Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover how we've helped businesses succeed on Amazon with our comprehensive account management services and
          proven strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project) => (
          <Card
            key={project.id}
            className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-800 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
