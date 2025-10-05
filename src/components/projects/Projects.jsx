"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "YEAR-TO-DATE STATS OF KIDS FURNITURE BRAND ",
    description:
      "Strategic keyword targeting to enhance product visibility and drive organic traffic for Amazon listings.",
    image: "/assets/projects/project01.png",
  },
  {
    title: "BUSINESS REPORTS: OF 6 FIGURE SELLER’S",
    description:
      "Strategic listing creation and in-depth audits for enhanced visibility and improved conversion rates.",
    image: "/assets/projects/project02.jpeg",
  },
  {
    title: "WALMART ACCOUNT MANAGEMENT",
    description:
      "Comprehensive strategies to maximize ad performance and sales through data-driven campaign management.",
    image: "/assets/projects/project03.jpeg",
  },
  {
    title: "DROPSHIPPING POLICY VIOLATION ACCOUNT REINSTATEMENT",
    description:
      "Data-driven techniques to improve campaign efficiency and increase ROI for Amazon ads.",
    image: "/assets/projects/project04.png",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= projects.length - 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="mx-4 sm:mx-10 px-2 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-12">
          My Projects
        </h1>

        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 z-10 rounded-full bg-white p-3 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          {/* Carousel */}
          <div className="w-full max-w-7xl overflow-hidden mb-10">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6 pt-6 sm:pt-10 pb-6 sm:pb-10"
              style={{
                transform: `translateX(-${
                  current * (100 / (window.innerWidth < 640 ? 1 : 3))
                }%)`,
              }}
            >
              {projects.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] sm:flex-[0_0_33.3333%] relative group"
                >
                  <div className="rounded-2xl bg-white shadow-xl overflow-hidden h-full relative">
                    {/* Image */}
                    <div className="aspect-[16/10] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={() => setSelectedProject(item)}
                          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
                        >
                          <Eye className="h-6 w-6 text-gray-800" />
                        </button>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-5 sm:p-6 text-left">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 z-10 rounded-full bg-white p-3 shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* View All Projects Button */}
        <Link href="/portfolio">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-[#FFCE12] rounded-full cursor-pointer"
          >
            <span className="relative text-black z-10 flex items-center">
              View All Projects
            </span>
            <span
              className="absolute inset-0 bg-[linear-gradient(45deg,#f1c40f,#f39c12)]
            opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Button>
        </Link>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover"
            />
            <div className="p-6 text-left">
              <h2 className="text-2xl font-bold mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700">{selectedProject.description}</p>

              <div className="mt-6 flex justify-end">
                <Button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#FFCE12] text-black rounded-full px-6"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
