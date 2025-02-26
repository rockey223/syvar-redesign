import FeaturedWorks from "@/components/sections/FeaturedWorks";
import HeroSection from "@/components/sections/HeroSection";
import Process from "@/components/sections/Process";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorks />
      <Process />

      {/* <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section> */}
    </>
  );
}
