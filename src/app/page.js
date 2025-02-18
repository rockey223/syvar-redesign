"use client";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import ServicesSection from "@/components/sections/ServicesSection";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });


  }, []);

  return (
    <>
      <ServicesSection />
      <FeaturedWorks />
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </>
  );
}
