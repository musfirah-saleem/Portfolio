"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-gray-900 tracking-wide">
          MyLogo
        </div>

        {/* Middle - Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10">
          <Link
            href="/"
            className="text-gray-700 hover:text-black transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-700 hover:text-black transition font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black transition font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
