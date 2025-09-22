// import { Mail, Phone, Linkedin } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-12">
//           {/* Services Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-white">Services</h3>
//             <p className="text-slate-300 leading-relaxed">
//               End-to-end Amazon Seller Central management for seamless operations and optimized growth.
//             </p>
//           </div>

//           {/* Contact Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
//             <div className="space-y-3">
//               <a
//                 href="tel:+923367482013"
//                 className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
//               >
//                 <Phone className="w-4 h-4" />
//                 +92 336 748 2013
//               </a>
//               <a
//                 href="mailto:business@ahmadamz.com"
//                 className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
//               >
//                 <Mail className="w-4 h-4" />
//                 business@ahmadamz.com
//               </a>
//             </div>
//           </div>

//           {/* Connect Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-white">Connect</h3>
//             <div className="space-y-4">
//               <p className="text-slate-300">Let's discuss how I can help grow your Amazon business.</p>
//               <a
//                 href="https://linkedin.com/in/ahmadali"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
//               >
//                 <Linkedin className="w-4 h-4" />
//                 Connect on LinkedIn
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-slate-800 mt-12 pt-8">
         
//         </div>
//       </div>
//     </footer>
//   )
// }


import { Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const yellowGradient = "linear-gradient(45deg, #f39c12, #f1c40f)";

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo / About */}
          <div className="space-y-4">
            <h2
              className="text-2xl font-extrabold bg-clip-text text-transparent"
              style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Muhammad Moin
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping Amazon sellers scale their business with complete Seller Central management & growth strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold bg-clip-text text-transparent"
              style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3
              className="text-lg font-semibold bg-clip-text text-transparent"
              style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href="tel:+923367482013"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Phone className="w-4 h-4" />
                +92 336 748 2013
              </a>
              <a
                href="mailto:business@ahmadamz.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
                business@ahmadamz.com
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3
              className="text-lg font-semibold bg-clip-text text-transparent"
              style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Connect
            </h3>
            <div className="mt-4 space-y-4">
              <p className="text-gray-400 text-sm">Let’s grow your Amazon business together.</p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-blue-500 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-pink-500 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ahmadali" target="_blank" className="text-gray-400 hover:text-blue-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Muhammad Moin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}



// import { Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-neutral-950 text-white pt-16 pb-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-12">
//           {/* Logo / About */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Muhammad Moin
//             </h2>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Helping Amazon sellers scale their business with complete Seller Central management & growth strategies.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Quick Links
//             </h3>
//             <ul className="mt-4 space-y-2 text-gray-400">
//               <li><a href="/" className="hover:text-white transition">Home</a></li>
//               <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
//               <li><a href="/services" className="hover:text-white transition">Services</a></li>
//               <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Get in Touch
//             </h3>
//             <div className="mt-4 space-y-3">
//               <a
//                 href="tel:+923367482013"
//                 className="flex items-center gap-3 text-gray-400 hover:text-white transition"
//               >
//                 <Phone className="w-4 h-4" />
//                 +92 336 748 2013
//               </a>
//               <a
//                 href="mailto:business@ahmadamz.com"
//                 className="flex items-center gap-3 text-gray-400 hover:text-white transition"
//               >
//                 <Mail className="w-4 h-4" />
//                 business@ahmadamz.com
//               </a>
//             </div>
//           </div>

//           {/* Connect Section */}
//           <div>
//             <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Connect
//             </h3>
//             <div className="mt-4 space-y-4">
//               <p className="text-gray-400 text-sm">Let’s grow your Amazon business together.</p>
//               <div className="flex gap-4">
//                 <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-blue-500 transition">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-pink-500 transition">
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a href="https://linkedin.com/in/ahmadali" target="_blank" className="text-gray-400 hover:text-blue-600 transition">
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} Muhammad Moin. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }
