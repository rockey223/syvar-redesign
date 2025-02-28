"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HeroSection = () => {
  const heroText = useRef();
  const heroImage = useRef();
  const maskref = useRef();
  const heroDesc = useRef();
  const heroBigDesc = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero_section",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=2000",
      },
    });
  
    tl.fromTo(
      heroText.current,
      { scale: 300, xPercent: -701 },
      { scale: 1, xPercent: 0 }
    )
    
      .to(heroText.current, {duration:0.5, y: -200 })
      .fromTo(
        heroImage.current,
        { opacity: 1},
        { opacity: 0},
        "<"
      )
      .to(heroDesc.current, {duration:0.5, y: -200 }, "<")
      
      .fromTo(heroDesc.current, { opacity: 0 }, { opacity: 1 }, "<")
      .fromTo(
        heroBigDesc.current,{
          opacity: 0
        },
        {
          opacity: 1,
          translateY: -60,
        },
        "<" // Ensures it starts when heroDesc finishes
      );
  });
  return (
    <section
      id="hero_section"
      className="h-screen w-full bg-white overflow-hidden"
    >
      {/* <Image src={'/syvar.png'} width={100} height={100} alt='syvar' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '/> */}
      <Image
        ref={heroImage}
        src={"/images/photo.avif"}
        width={1000}
        height={1000}
        alt="as"
        className="w-full h-full fixed z-[-1] inset-0 object-cover "
      />
      <div
        ref={maskref}
        className="mask h-screen w-full bg-black flex flex-col justify-center items-center mix-blend-multiply"
      >
        <h1 ref={heroText} className="text-9xl font-bold text-white">
          SYVAR
        </h1>
        <p ref={heroDesc} className="text-2xl text-[#e1e1e1] ">
          We sculpt dreams into digital marvels.
        </p>
        <p ref={heroBigDesc} className="w-1/2 text-blue-700 text-3xl text-center bg-black">
          We sculpt dreams into digital marvels. Your Essence, our excellence,
          elevating the product experience together.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
