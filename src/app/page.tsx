"use client";

import { LenisProvider } from "@/components/ui/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </LenisProvider>
  );
}
