import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-yellow-50 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-yellow-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-yellow-100/10 blur-3xl " />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className="mb-8 inline-flex items-center rounded-full 
                border border-gray -400/30
                bg-gray-400/10 
                px-4 py-2 text-sm font-sm  text-gray-600 shadow-sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4 text-yellow-500" />
            Amazon Marketplace Experts
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl lg:text-7xl leading-12 md:leading-20">
            Scale Your Amazon Business{" "}
            <span className="text-black">With Expert Solutions</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl md:mx-20 mx-6">
            Comprehensive Amazon account management services designed to
            maximize your sales, optimize your listings, and grow your
            marketplace presence with proven strategies.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group relative overflow-hidden 
             bg-[#FFCE12] rounded-full cursor-pointer"
              >
                <span className="relative text-black z-10 flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                className="rounded-full text-gray-700 cursor-pointer"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
