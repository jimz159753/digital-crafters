import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import poligons from '../assets/images/poligons.png'
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Clients } from "@/components/Clients";
import { Team } from "@/components/Team";
import { Technologies } from "@/components/Technologies";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <div className="mx-40 flex flex-col gap-[320px]">
        <About />
        <Image className="absolute left-0 top-[113%]" src={poligons} alt='poligons' />
        <Services />
        <Projects />
        <Clients />
        <Team />
        <Technologies />
      </div>
      <Footer />
    </div>
  );
}
