// import { Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react"

// export default function Footer() {
//   const yellowGradient = "linear-gradient(45deg, #f39c12, #f1c40f)";

//   return (
//     <footer className="bg-neutral-950 text-white pt-16 pb-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-12">
//           {/* Logo / About */}
//           <div className="space-y-4">
//             <h2
//               className="text-2xl font-extrabold bg-clip-text text-transparent"
//               style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//             >
//               Muhammad Moin
//             </h2>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Helping Amazon sellers scale their business with complete Seller Central management & growth strategies.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3
//               className="text-lg font-semibold bg-clip-text text-transparent"
//               style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//             >
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
//             <h3
//               className="text-lg font-semibold bg-clip-text text-transparent"
//               style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//             >
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
//             <h3
//               className="text-lg font-semibold bg-clip-text text-transparent"
//               style={{ background: yellowGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//             >
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




import { Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo / About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#FFCE12]/75">
              Muhammad Moin
            </h2>
            <p className="text-secondary/90 text-sm leading-relaxed">
              Helping Amazon sellers scale their business with complete Seller Central management & growth strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFCE12]/75">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-secondary/90">
              <li><a href="/" className="hover:text-gray-400 transition">Home</a></li>
              <li><a href="/portfolio" className="hover:text-gray-400 transition">Portfolio</a></li>
              <li><a href="/services" className="hover:text-gray-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFCE12]/75">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href="tel:+923367482013"
                className="flex items-center gap-3 text-secondary/90 hover:text-gray-400 transition"
              >
                <Phone className="w-4 h-4" />
                +92 336 748 2013
              </a>
              <a
                href="mailto:business@ahmadamz.com"
                className="flex items-center gap-3 text-secondary/90 hover:text-gray-400 transition"
              >
                <Mail className="w-4 h-4" />
                business@ahmadamz.com
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFCE12]/75">
              Connect
            </h3>
            <div className="mt-4 space-y-4">
              <p className="text-white text-sm">Let’s grow your Amazon business together.</p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" className="text-secondary/90 hover:text-blue-500 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" className="text-secondary/90 hover:text-pink-500 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ahmadali" target="_blank" className="text-secondary/90 hover:text-blue-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-secondary/70 text-sm">
          © {new Date().getFullYear()} Muhammad Moin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
