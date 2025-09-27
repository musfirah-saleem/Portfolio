


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Modern react-icons
import {  Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com", color: "from-yellow-400 to-yellow-400" },
    { icon: FaInstagram, href: "https://www.instagram.com", color: "from-yellow-400 to-yellow-400" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com", color: "from-yellow-400 to-yellow-400" },
  ];

  return (
    <div className="fixed top-2 left-0 w-full z-50 flex justify-center">
      <nav className="w-[95%] md:w-[90%] max-w-7xl bg-white/70 backdrop-blur-xl border border-gray-200 rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">Moin</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative font-semibold text-lg transition duration-300 ${
                    isActive ? "text-black" : "text-gray-700 hover:text-[#FFCE12]"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#FFCE12] transform transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Modern Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, color }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform duration-300`}
              >
                <Icon />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg rounded-xl shadow-md border-t border-gray-200 mt-3 px-6 py-4 space-y-4">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium transition ${
                    isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex gap-4 pt-3">
              {socialLinks.map(({ icon: Icon, href, color }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300`}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
