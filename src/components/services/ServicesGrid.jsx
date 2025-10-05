"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Settings, Unlock, Store, TrendingUp, Users, Key, Mail, Zap, Ship, Puzzle } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Listing Optimization",
    icon: Search,
    description: "Maximize your product visibility with data-driven optimization strategies",
    features: [
      "Title with 3-5 high search volume keywords",
      "5 compelling bullet points",
      "Professional infographic images",
      "Top keywords research & analysis",
      "Backend search terms & subject matter fields",
      "HTML-optimized product descriptions",
      "Unlimited revisions within 7 days",
    ],
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "Amazon PPC Management",
    icon: Target,
    description: "Drive targeted traffic and maximize ROI with expert campaign management",
    features: [
      "Campaign creation (Auto/Manual)",
      "Ongoing campaign optimization",
      "New long-tail keyword identification",
      "Profitable keyword transfers",
      "Negative keyword identification",
      "Detailed search term reports",
    ],
  },
  {
    id: 3,
    title: "Amazon Account Management",
    icon: Settings,
    description: "Complete end-to-end account management for seamless operations",
    features: [
      "Product research & analysis",
      "Professional product listing",
      "Content writing & optimization",
      "FBA reimbursement recovery",
      "Order & inventory management",
      "FBA shipment coordination",
      "Feedback removal services",
      "Listing issue resolution",
      "Promotion creation (Coupons/Deals)",
      "Inventory planning & forecasting",
      "Virtual bundle creation",
      "FBA returns management",
      "Account health monitoring",
      "IPI score maintenance",
      "IP infringement case handling",
      "Customer support services",
    ],
  },
  {
    id: 4,
    title: "Amazon Category Ungating",
    icon: Unlock,
    description: "Unlock restricted categories and expand your selling opportunities",
    features: [
      "Document review & preparation",
      "Professional document submission",
      "Category & subcategory approval",
      "Brand & ASIN approval processes",
    ],
  },
  {
    id: 5,
    title: "Amazon Store Front / EBC / A+ Pages",
    icon: Store,
    description: "Create compelling brand experiences that convert browsers into buyers",
    features: [
      "A+ Content creation with high-volume keywords",
      "Professional storefront design",
      "Custom image banner design & visualization",
    ],
  },
  {
    id: 6,
    title: "Product Hunting",
    icon: TrendingUp,
    description: "Discover profitable opportunities in the Amazon marketplace",
    features: [
      "Profitable products for private label",
      "Market analysis & competition research",
      "Profit margin calculations",
    ],
  },
  {
    id: 7,
    title: "Supplier Sourcing",
    icon: Users,
    description: "Connect with reliable suppliers for quality products at competitive prices",
    features: [
      "Authentic supplier verification",
      "Competitive cost negotiations",
      "High product quality assurance",
      "Safety certificates & compliance",
    ],
  },
  {
    id: 8,
    title: "Rebate Key",
    icon: Key,
    description: "Boost your product rankings with strategic rebate campaigns",
    features: ["Strategic campaign planning", "Giveaway management", "Keyword ranking improvement"],
  },
  {
    id: 9,
    title: "Mailchimp Integration",
    icon: Mail,
    description: "Leverage email marketing to build customer relationships",
    features: ["Email marketing campaigns", "Customer segmentation", "Automated follow-up sequences"],
  },
  {
    id: 10,
    title: "Zontool Management",
    icon: Zap,
    description: "Advanced PPC tools for sophisticated campaign management",
    features: ["PPC creation & setup", "Advanced campaign management", "Performance optimization"],
  },
  {
    id: 11,
    title: "Shipping Easy",
    icon: Ship,
    description: "Streamline your shipping and order fulfillment processes",
    features: ["Email marketing integration", "Order management automation", "Inventory management systems"],
  },
  {
    id: 12,
    title: "Amazon Extensions",
    icon: Puzzle,
    description: "Leverage powerful third-party tools for competitive advantage",
    features: [
      "Helium 10: Content optimization, product hunting, keyword tracking, competitor analysis",
      "Viral Launch: Market intelligence, competitor intelligence, product launches, seller tools",
    ],
  },
    {
    id: 13,
    title: "Etsy Shop Management",
    icon: Store,
    description: "Enhance your Etsy store performance with optimized listings and targeted promotion",
    features: [
      "SEO-optimized product titles & tags",
      "Attractive product image design",
      "Competitor and trend analysis",
      "Etsy Ads campaign setup",
      "Shop branding & policy setup",
      "Performance reporting & analytics",
    ],
    badge: "New",
  },
  // 🟣 NEW — Walmart Services
  {
    id: 14,
    title: "Walmart Account Management",
    icon: Settings,
    description: "Expand your business on Walmart Marketplace with expert management solutions",
    features: [
      "Product listing & optimization",
      "Walmart PPC campaign setup",
      "Order & inventory management",
      "Competitor analysis & keyword research",
      "Performance tracking & reporting",
      "Compliance with Walmart policies",
    ],
    badge: "New",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32  bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Amazon Services
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Everything you need to succeed on Amazon, from listing optimization to advanced analytics
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  className="relative group hover:shadow-xl hover:scale-[1.02] hover:bg-[#FFCE12]/75 transition-all duration-300 border-border/50 hover:border-primary/30 break-inside-avoid mb-8 transform"
                >
                  {service.badge && (
                    <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground animate-pulse">
                      {service.badge}
                    </Badge>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <IconComponent className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-balance">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-pretty">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground group-hover:translate-x-1 transition-transform duration-200"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="text-pretty">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
