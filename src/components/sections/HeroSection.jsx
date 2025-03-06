"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroText = useRef();
  const heroImage = useRef();
  const maskref = useRef();
  useGSAP(() => {
    let splitText = new SplitType(".Heading", { types: "chars" });
    let chars = splitText.chars;
    const tl = gsap.timeline();
    tl.to(".bg_text", { y: 0 })
      .to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.02,
      })
      .to(".second_text", { y: 0, opacity: 1 }, "<")
      .to(".getTouchBtn", { y: 0, opacity: 1 }, "<");
  });
  // useGSAP(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#hero_section",
  //       start: "top top", // Animation starts when the section reaches the top
  //       end: "+=1500", // Scroll distance before animation completes
  //       scrub: true, // Makes animation smooth while scrolling
  //       pin: true, // Keeps section pinned during animation
  //       // markers: true, // For debugging (remove in production)
  //     },
  //   })
  //     .fromTo(
  //       heroText.current,
  //       { scale: 220, x: "-100vw", duration: 2 },
  //       { scale: 1, x: 0 , duration: 2}
  //     ).fromTo(heroImage.current, { opacity: 1 }, { opacity: 0 },"+=0.2")
  //     // .to(heroText.current, { y: -200 },"<");
  // }, []);

  return (
    <section
      id="hero_section"
      className="h-screen w-full bg-[url('/images/bg.png')] bg-no-repeat bg-cover overflow-hidden relative"
    >
      <div className=" max-w-[650px] h-full m-auto max-md:px-5 flex flex-col justify-center items-center relative">
        <div className="bg-text [clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)] Heading w-full text-center  translate-y-100 text-gray-100  text-4xl md:text-[85px] leading-[120%] font-semibold ">
          Dream big. <br /> We'll digitize it.
        </div>

        <p className="second_text text-center text-base md:text-xl 2xl:text-xl translate-y-16 opacity-0 text-gray-500 mt-8">
          Your vision and our innovation transform technology experiences
          together.
        </p>
        <button
          type="button"
          className="getTouchBtn translate-y-16 opacity-0 mt-10 w-[146px] h-[50px] flex justify-center items-center text-base text-white px-5 py-[18px] rounded-xl border-[1px] border-[#545454] cursor-pointer hover:shadow-[0px_1px_10px_0px_rgb(255,255,255,50%)] hover:translate-y-1"
          onClick={() => dispatch(show())}
        >
          Get in Touch
        </button>
      </div>
      <div className="absolute bottom-0 h-[100px] lg:h-[200px] w-full bg-[linear-gradient(180deg,_rgba(0,0,0,0.00)_0%,_#000_100%)]"></div>
    </section>
  );
};

export default HeroSection;
