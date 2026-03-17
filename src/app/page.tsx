"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyUsePage from "@/components/WhyUsePage";
import Showcase from "@/components/Showcase";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Features />
        <HowItWorks />
        <WhyUsePage />
        <Showcase />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
