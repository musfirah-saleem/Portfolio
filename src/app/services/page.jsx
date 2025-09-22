import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/services/ServicesGrid";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
<>
<Navbar/>
<ServicesGrid/>
<Footer/>

</>
  );
}
