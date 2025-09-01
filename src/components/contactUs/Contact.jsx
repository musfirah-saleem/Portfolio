// "use client";

// import Image from "next/image";

// export default function Contact() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
//       <div className="grid md:grid-cols-2 w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Left Side - Image */}
//         <div className="relative h-64 md:h-auto">
//           <Image
//             src="/assets/about.avif"
//             alt="Contact background"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//             <h2 className="text-white text-3xl md:text-4xl font-bold">
//               Let’s Talk
//             </h2>
//           </div>
//         </div>

//         {/* Right Side - Contact Form */}
//         <div className="p-8 md:p-12">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//             Contact Me
//           </h3>

//           <form className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Message
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Write your message..."
//                 className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 ">
      {/* Top Section with Contact Form */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="text-blue-600 font-semibold">Need help with your Amazon business?</span>
              </p>
              <p>
                Whether you need help with timings, PPC strategy, or full account management, I'm here to help. Let's
                discuss your goals and explore how I can support your success.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Full Name
                </label>
                <Input id="name" type="text" placeholder="Enter your full name" className="w-full" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" className="w-full" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message here"
                  className="w-full min-h-[120px] resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Submit Your Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Workspace Image Section */}
      <div className="max-w-6xl mx-auto ">
        <div className="rounded-lg  py-20">
          <img
            src="/assets/hero.jpeg"
            alt="Modern workspace with laptop, coffee cup, and notebook"
            className="w-full h-[400px] object-cover rounded-lg "
          />
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className=" bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>

              <p className="text-gray-700">
                Get in touch to discuss your Amazon virtual assistant needs and how I can help you succeed in your
                business.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">Operating Remotely – Serving Clients Globally</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Hours
                  </h3>
                  <p className="text-gray-700">Available upon request</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - World Map */}
            <div className="bg-slate-50 rounded-lg p-4 h-[400px] flex items-center justify-center">
              <img
                src="/assets/about.avif"
                alt="World map showing global service coverage"
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
