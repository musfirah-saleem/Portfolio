import Image from "next/image"

export default function PortfoliokHero() {
  return (
    <section className=" bg-[#F9F8F5] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4 mt-16">My Work</h1>

        <div className="mb-6">
          <p className="text-lg md:text-xl  font-medium">
            <span className="border-b-2 border-black pb-1">8+ Projects finished</span>
          </p>
          
        </div>

        <div className="flex justify-center items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 relative z-40">
            <Image
              src="/assets/review/review1.png"
              alt="Team member 1"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 relative z-30 -ml-3">
            <Image
              src="/assets/review/review2.jpg"
              alt="Team member 2"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 relative z-20 -ml-3">
            <Image
              src="/assets/review/review3.png"
              alt="Team member 3"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 relative z-10 -ml-3">
            <Image
              src="/assets/review/review4.png"
              alt="Team member 4"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
