import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
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
      <div className="back-poligons">
        <div className="mx-40 flex flex-col gap-[320px] relative">
          <About />
          <Services />
          <Projects />
          <Clients />
          <Team />
          <Technologies />
        </div>
      </div>
      <Footer />
    </div>
  );
}
