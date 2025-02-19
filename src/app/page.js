// "use client";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import ServicesSection from "@/components/sections/ServicesSection";
// import Lenis from "lenis";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis({
  //     autoRaf: true,
  //   });
  //   console.log(lenis);
    
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  // }, []);

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
