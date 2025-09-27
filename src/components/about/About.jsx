import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  const achievements = [
    { icon: TrendingUp, text: "400+ High-Converting Listings" },
    { icon: Target, text: "500+ Successful PPC Campaigns" },
    { icon: Zap, text: "Proven Sales Optimization Expert" },
  ];

  const expertise = [
    "Product Listing Optimization",
    "PPC Campaign Strategy",
    "Keyword Research & Targeting",
    "Sales Performance Analysis",
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gray-50">
      <div className="absolute pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <div
                className="mb-8 inline-flex items-center rounded-full 
                border border-gray -400/30
                bg-gray-400/10 
                px-4 py-2 text-sm font-sm  text-gray-600 shadow-sm"
              >
                Amazon Specialist
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Meet Ahmad Ali
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Helping Amazon businesses scale with data-driven optimization,
                strategic PPC management, and proven marketplace growth
                strategies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-white shadow-sm p-4 hover:shadow-md transition"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-500/10">
                    <achievement.icon className="h-5 w-5 " />
                  </div>
                  <span className="text-gray-800 font-medium">
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm border border-yellow-500/30  hover:bg-yellow-50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden 
             bg-[#FFCE12] rounded-full cursor-pointer"
                >
                  <span className="relative text-black z-10 flex items-center">
                    Start Your Optimization
                  </span>
                  <span
                    className="absolute inset-0 
                   bg-[linear-gradient(45deg,#f1c40f,#f39c12)] 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity"
                  />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full cursor-pointer"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/assets/about.jpeg"
                alt="Ahmad Ali - Amazon Specialist"
                className="w-full h-[720px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-white shadow-lg rounded-xl p-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm text-gray-600">Listings Created</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-gray-600">PPC Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
