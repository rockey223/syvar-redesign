"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroText = useRef();
  const heroImage = useRef();
  const maskref = useRef();

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero_section",
        start: "top top", // Animation starts when the section reaches the top
        end: "+=1500", // Scroll distance before animation completes
        scrub: true, // Makes animation smooth while scrolling
        pin: true, // Keeps section pinned during animation
        // markers: true, // For debugging (remove in production)
      },
    })
      .fromTo(
        heroText.current,
        { scale: 220, x: "-100vw", duration: 2 },
        { scale: 1, x: 0 , duration: 2}
      ).fromTo(heroImage.current, { opacity: 1 }, { opacity: 0 },"+=0.2")
      .to(heroText.current, { y: -200 },"<");
  }, []);

  return (
    <section
      id="hero_section"
      className="h-screen w-full bg-white overflow-hidden relative "
    >
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
        className="mask h-full w-full bg-black flex flex-col justify-center items-center mix-blend-multiply"
      >
        <h1
          ref={heroText}
          className="text-9xl font-bold tracking-widest text-white pointer-events-none"
        >
          SYVAR
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
