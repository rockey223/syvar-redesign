"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoMdArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { show } from "@/utils/contactSlice";

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
        // .to(
        //   mainText.current,
        //   { y: -300, ease: "none", duration: 5, opacity: 0 },
        //   "<"
        // ) // Scale is 1 on mobile
        .to(".bg-image", { opacity: 0, duration: 2 }, "=+0.5")
        .to(".bg-text", { opacity: 0, duration: 2 }, "<")
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
        // .to(
        //   mainText.current,
        //   { y: -300, ease: "none", duration: 5, opacity: 0 },
        //   "<"
        // )
        .to(".bg-image", { opacity: 0, duration: 2 }, "=+0.5")
        .to(".bg-text", { opacity: 0, duration: 2 }, "<")
        .to(heroImage.current, { opacity: 0, duration: 2 }, "<")
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
const dispatch = useDispatch()
  return (
    <div className="relative">
      <section
        id="hero_section"
        className="h-screen w-full overflow-hidden relative "
      >
        <div className="fixed flex h-full w-full">
          <div className="bg-image absolute -z-20 top-0 bottom-0 left-0 right-0 w-full h-full">
            <Image
              src={"/images/bg.png"}
              width={1000}
              height={1000}
              alt="bg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-text max-w-[648px] m-auto max-md:px-5 flex flex-col justify-center items-center">
            <h1 className="w-full text-center text-gray-100  text-5xl lg:text-[85px] leading-[120%] font-semibold">
              Dream big. We'll digitize it.
            </h1>

            <p className="text-center text-base 2xl:text-xl text-gray-500 mt-8">
              Your vision and our innovation transform technology experiences
              together.
            </p>
            <button type="button" className="mt-10 w-[146px] h-[50px] flex justify-center items-center text-base text-white px-5 py-[18px] rounded-xl border-[1px] border-[#545454] cursor-pointer transition-all duration-150 ease-in-out hover:shadow-[0px_1px_10px_0px_rgb(255,255,255,50%)] hover:translate-y-1" onClick={()=>dispatch(show())} >Get in Touch</button>
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
          className="relative mask h-full w-full bg-[var(--bg-change)] flex flex-col justify-center items-center mix-blend-multiply pointer-events-none"
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
                className="h-full flex flex-col justify-center items-center "
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
                <div className="flex flex-col text-base text-[var(--text-change)] brightness-50 justify-center items-center mt-52 group cursor-pointer">
                  <span >Work Archive</span>
                  <span className="text-xl group-hover:animate-bounce mt-1 lg:mt-3">
                    <IoMdArrowDown />
                  </span>
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
