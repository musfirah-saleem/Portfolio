import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Zap } from "lucide-react"

export default function About() {
  const achievements = [
    { icon: TrendingUp, text: "400+ High-Converting Listings Created" },
    { icon: Target, text: "500+ Successful PPC Campaigns Launched" },
    { icon: Zap, text: "Proven Amazon Sales Optimization Expert" },
  ]

  const expertise = [
    "Product Listing Optimization",
    "PPC Campaign Strategy",
    "Keyword Research & Targeting",
    "Sales Performance Analysis",
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                Amazon Specialist
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Meet <span className="text-blue-600">Ahmad Ali</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforming Amazon businesses through data-driven optimization and strategic campaign management.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Expertise Tags */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">My approach is simple:</strong> I diagnose the root causes of
                underperforming listings and misaligned PPC strategies, then implement precision fixes that drive
                measurable results for your Amazon business.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Optimization
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets/about.avif"
                alt="Ahmad Ali - Amazon Specialist"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">400+</div>
                      <div className="text-sm text-gray-600">Listings Created</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">PPC Campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
