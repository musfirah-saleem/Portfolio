"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Keyword Research",
    description:
      "Strategic keyword targeting to enhance product visibility and drive organic traffic for Amazon listings.",
    image: "/assets/project1.jfif",
  },
  {
    title: "Listing Optimization & Audit",
    description:
      "Strategic listing creation and in-depth audits for enhanced visibility and improved conversion rates.",
    image: "/assets/project2.jfif",
  },
  {
    title: "Amazon PPC Management",
    description:
      "Comprehensive strategies to maximize ad performance and sales through data-driven campaign management.",
    image: "/assets/project3.jfif",
  },
  {
    title: "PPC Campaign Optimization",
    description:
      "Data-driven techniques to improve campaign efficiency and increase ROI for Amazon ads.",
    image: "/assets/project4.jfif",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= projects.length - 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="mx-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">My Projects</h1>
        <div className="relative flex items-center justify-center ">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 rounded-full bg-white p-3 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          <div className="w-full max-w-6xl overflow-hidden mb-10">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(-${current * 50}%)` }}
            >
              {projects.map((item, idx) => (
                <div key={idx} className="flex-[0_0_50%]">
                  <div className="rounded-2xl bg-white shadow-xl overflow-hidden h-full">
                    <div className="aspect-video">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-gray-600">{item.description}</p>
                      <Link
                        href="/portfolio"
                        className="mt-4 inline-block text-sm font-medium text-blue-500 hover:text-blue-400"
                      >
                        View Case Study →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 rounded-full bg-white p-3 shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <Button
          size="lg"
          className="group relative overflow-hidden 
             bg-[#FFCE12] rounded-full"
        >
          <span className="relative text-black z-10 flex items-center">
            View All Projects
          </span>
          <span
            className="absolute inset-0 
                   bg-[linear-gradient(45deg,#f1c40f,#f39c12)] 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity"
          />
        </Button>
      </div>
    </section>
  );
}
