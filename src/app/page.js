import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/heroPage/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import { ServicesFooter } from "@/components/services/ServicesFooter";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ServicesFooter/>
      <Footer />
    </>
  );
}
