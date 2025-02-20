
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import Process from "@/components/sections/Process";
import ServicesSection from "@/components/sections/ServicesSection";


export default function Home() {


  return (
    <>
      <ServicesSection />
      <FeaturedWorks />
      <Process/>
      
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </>
  );
}
