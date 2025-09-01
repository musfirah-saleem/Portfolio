"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Linkedin, Star, TrendingUp, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
  
      <main className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero.jpeg"
            alt="Amazon FBA workspace background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6 mt-24">
              <Badge variant="secondary" className="bg-blue-100/90 text-blue-700 hover:bg-blue-200/90 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1" />
                Amazon FBA Expert
              </Badge>

              <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight text-balance">
                Amazon FBA Specialist
                <span className="text-blue-400 block">Optimize, Rank & Sell</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Struggling to sell on Amazon? I fix listings and PPC campaigns that don't convert, helping you maximize
                profits and dominate your niche.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-xl">200+</p>
                  <p className="text-sm text-gray-300">Products Optimized</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-xl">$2M+</p>
                  <p className="text-sm text-gray-300">Revenue Generated</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                View Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 hover:bg-white/10 bg-white/5 text-white backdrop-blur-sm px-8 py-4 text-lg"
              >
                Get Free Consultation
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <p className="text-sm text-gray-300">Connect with me:</p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-12 h-12 p-0 hover:bg-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5 text-white hover:text-blue-400" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-12 h-12 p-0 hover:bg-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5 text-white hover:text-blue-400" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
