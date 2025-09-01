import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contactUs/Contact";


import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500">
        Tailwind is working 🎉
      </h1>

      <Navbar />
    
      <Contact />
    
      <Footer />
    </>
  );
}
