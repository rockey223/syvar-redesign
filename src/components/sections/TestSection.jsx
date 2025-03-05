"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const serviceList = [
  "Web Development",
  "Mobile App Development",
  "Product Design",
  "Digital Marketing",
  "Search Engine Optimization",
];

gsap.registerPlugin(ScrollTrigger);

const TestSection = () => {
  const heroText = useRef();
  const heroImage = useRef();
  const maskref = useRef();
  const services = useRef();
  const mainText = useRef();
  useGSAP(() => {
    let mm = gsap.matchMedia(); // Initialize matchMedia

    mm.add("(max-width: 768px)", () => {
      // Mobile animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero_section",
            start: "top top",
            end: "+=500",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          heroText.current,
          { scale: 220, x: "-100vw" },
          { scale: 1, x: 0, duration: 5 }
        )
        .fromTo(
          heroImage.current,
          { scale: 1.2 },
          { y: -200, ease: "none", duration: 5 },
          "<"
        ) // Scale is 1 on mobile
        .to(
          mainText.current,
          { y: -300, ease: "none", duration: 5, opacity: 0 },
          "<"
        ) // Scale is 1 on mobile
        .to(heroImage.current, { opacity: 0, duration: 2 }, "+=0.5")
        .to(heroText.current, { y: -300, duration: 3 })
        .to(heroText.current, { fontSize: "3rem", duration: 2 }, "<") // Adjust font size for mobile
        .to(heroText.current, { opacity: 0, y: -450, duration: 3 }, "+=0.5")
        .fromTo(
          "#services_section",
          { opacity: 0, y: 300 },
          { opacity: 1, y: 0, duration: 3 },
          "<"
        );
    });

    mm.add("(min-width: 769px)", () => {
      // Desktop animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero_section",
            start: "top top",
            end: "+=500",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          heroText.current,
          { scale: 220, x: "-100vw" },
          { scale: 1, x: 0, duration: 5 }
        )
        .fromTo(
          heroImage.current,
          { scale: 0.9 },
          { y: -200, ease: "none", duration: 5 },
          "<"
        )
        .to(
          mainText.current,
          { y: -300, ease: "none", duration: 5, opacity: 0 },
          "<"
        )
        .to(heroImage.current, { opacity: 0, duration: 2 }, "+=0.5")
        .to(heroText.current, { y: -300, duration: 3 })
        .to(heroText.current, { fontSize: "6rem", duration: 2 }, "<")
        .to(heroText.current, { opacity: 0, y: -450, duration: 3 }, "+=0.5")
        .fromTo(
          "#services_section",
          { opacity: 0, y: 300 },
          { opacity: 1, y: 0, duration: 3 },
          "<"
        );
    });
  }, []);

  return (
    <div className="relative">
      <section
        id="hero_section"
        className="h-screen w-full overflow-hidden relative "
      >
        <div className="fixed h-full w-full">

        <div className="flex w-full justify-center lg:justify-between items-center h-full relative -z-[2] flex-col lg:flex-row">
          {/* <div> */}
            <p
              ref={mainText}
              className="  h-full flex justify-center items-center max-lg:text-center text-black max-lg:px-[20px] text-[24px] md:text-5xl lg:text-5xl md:leading-[120%] lg:pl-[60px] leading-[120%] uppercase font-extrabold "
              >
              Your vision and our innovation transform technology experiences
              together.
            </p>
          {/* </div> */}
          <div className="h-full">
            <Image
              ref={heroImage}
              src={"/images/land.png"}
              width={1000}
              height={1000}
              alt="as"
              className="w-full h-full relative z-[-3] inset-0   object-scale-down"
              />
          </div>
              </div>
          {/* <p ref={mainText} className="w-1/2  top-1/2 -translate-y-1/2 text-black lg:left-[60px] left-1/2 max-lg:px-[20px] max-lg:top-[40%] max-lg:-translate-x-1/2 text-[24px] md:text-3xl lg:text-5xl lg:leading-[150%] uppercase font-extrabold ">Your vision and our innovation transform technology experiences together.</p>
        <Image
          ref={heroImage}
          src={"/images/land.png"}
          width={1000}
          height={1000}
          alt="as"
          className="w-1/2 h-full fixed z-[-3] inset-0 max-lg:top-[20%] max-sm:-left-[15%] object-cover"
        /> */}
        </div>
        {/* <video src="/videos/adept.webm" ref={heroImage} loop muted autoPlay className="w-full h-full fixed z-[-1] inset-0 object-cover" ></video> */}
        <div
          ref={maskref}
          className="relative mask h-full w-full bg-[var(--bg-change)] flex flex-col justify-center items-center mix-blend-multiply"
        >
          <h1
            ref={heroText}
            className="absolute text-7xl lg:text-9xl font-bold tracking-widest text-white pointer-events-none"
          >
            SYVAR
          </h1>
          <div id="services_section" className="opacity-0 absolute">
            <div className="h-full lg:h-[100vh]  w-full py-[100px] lg:py-[149px] flex flex-col gap-16 md:gap-[104px]">
              <div
                ref={services}
                className="h-full flex flex-col justify-center intems-center "
              >
                <div className="services_header w-full text-center">
                  <h2 className="px-1 text-white text-4xl md:text-[48px] font-bold tracking-wide leading-snug">
                    Delivering on your Expectations
                  </h2>
                </div>
                <div className="services_list w-full xl:px-[138px] 2xl:px-[500px] mt-20 mb-2 md:mb-5">
                  <ul className="w-full flex flex-wrap gap-x-5 md:gap-x-9 xl:gap-x-4 gap-y-8 items-center justify-center">
                    {serviceList.map((service, index) => (
                      <li
                        key={index}
                        className="flex justify-center items-center   py-2 lg:py-3 px-4 lg:px-[30px] rounded-full border-[2px] border-[var(--text-change)] text-[var(--text-change)] md:text-lg"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=" flex flex-col px-2 xl:px-[100px] mt-[20px] 2xl:mt-[20px] 2xl:px-[530px] justify-center items-center gap-10">
                  <p className="max-w-[800px] text-center text-base md:px-4 text-[var(--text-change)] brightness-50">
                    We simplify the complex by breaking it down into clear,
                    actionable steps. Our approach ensures efficiency, quality,
                    and a seamless experience for you.
                  </p>
                  {/* <button className="px-5 py-[10px] flex items-center justify-center border-[4px] border-gray-200 text-gray-900 bg-gray-200 rounded-full font-semibold text-xl">More About Services</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestSection;
