import Image from "next/image";
import Navbar from "@/components/Navbar";
import PortfoliokHero from "@/components/portfolio/PortfolioHero";
import Portfolio from "@/components/portfolio/portfolio";
import { ServicesFooter } from "@/components/services/ServicesFooter";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
<>
<Navbar/>
<PortfoliokHero/>
<Portfolio/>
<ServicesFooter/>
<Footer/>

</>
  );
}
