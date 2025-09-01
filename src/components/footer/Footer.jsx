import { Mail, Phone, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Services</h3>
            <p className="text-slate-300 leading-relaxed">
              End-to-end Amazon Seller Central management for seamless operations and optimized growth.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:+923367482013"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +92 336 748 2013
              </a>
              <a
                href="mailto:business@ahmadamz.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                business@ahmadamz.com
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <div className="space-y-4">
              <p className="text-slate-300">Let's discuss how I can help grow your Amazon business.</p>
              <a
                href="https://linkedin.com/in/ahmadali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2025 Ahmad Ali. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
