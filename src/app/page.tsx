import { About } from "@/components/sections/about";
import { Career } from "@/components/sections/career";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Work />
      <Career />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
