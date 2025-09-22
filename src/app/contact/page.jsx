import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contactUs/Contact";


import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
    
      <Contact />
    
      <Footer />
    </>
  );
}
