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
      // .to(heroText.current, { y: -200 },"<");
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
      <section id="services_section" >
      <div className="h-full lg:h-[100vh] bg-[var(--bg-change)] w-full py-[100px] lg:py-[149px] flex flex-col gap-16 md:gap-[104px]">
        <div ref={services} className="h-full flex flex-col justify-center intems-center gap-20">
          <div className="services_header w-full text-center">
            <h2 className="px-1 text-gray-200 text-4xl md:text-[64px] font-medium">
              Delivering on your Expectations
            </h2>
          </div>
          <div className="services_list w-full xl:px-[138px] 2xl:px-[500px] mb-2 md:mb-5">
            <ul className="w-full flex flex-wrap gap-x-5 md:gap-x-9 xl:gap-x-2 gap-y-8 items-center justify-center">
              {serviceList.map((service, index) => (
                <li
                  key={index}
                  className="flex justify-center items-center py-2 lg:py-3 px-4 lg:px-[30px] rounded-full border-2 lg:border-[2px] border-[var(--text-change)] text-[var(--text-change)] md:text-lg"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col px-2 xl:px-[100px] 2xl:px-[530px] justify-center items-center gap-10">
            <p className="max-w-[800px] text-center text-xl md:px-4 text-[var(--text-change)]">
              We simplify the complex by breaking it down into clear, actionable
              steps. Our approach ensures efficiency, quality, and a seamless
              experience for you.
            </p>
            {/* <button className="px-5 py-[10px] flex items-center justify-center border-[4px] border-gray-200 text-gray-900 bg-gray-200 rounded-full font-semibold text-xl">More About Services</button> */}
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default HeroSection;
