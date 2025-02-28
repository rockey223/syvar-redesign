"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Custom Hook to get window width (Only runs on the client)
// const useWindowWidth = () => {
//   const [width, setWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200 // Default value for SSR
//   );

//   useEffect(() => {
//     if (typeof window === "undefined") return; // Skip during SSR

//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return width;
// };
const processes = [
  {
    title: "Research & Development",
    points: [
      "Market Research",
      "User Experience Research",
      "Customer Research",
      "User Stories",
      "Persona Building",
      "Product Ideation",
      "Best Practice Review",
    ],
  },
  {
    title: "Design & UX",
    points: [
      "Web Design",
      "User Interface Design",
      "User Experience Design",
      "Wireframing",
      "Prototyping",
      "User Journeys",
      "Interaction Design",
      "Brand Identity",
      "Graphics Design",
    ],
  },
  {
    title: "Development",
    points: [
      "Frontend Development",
      "Creative Development",
      "Full Stack Development",
      "E-Commerce Development",
      "CMS Integrations etc.",
    ],
  },
];

const Process = () => {
  // const [width, setWidth] = useState(
  //   typeof window !== "undefined" ? window.innerWidth : 1200 // Default value for SSR
  // );
  // useEffect(() => {
  //   if (typeof window === "undefined") return; // Skip during SSR

  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //     ScrollTrigger.refresh();
      
  //   };

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const width = useWindowWidth();
  const processSection = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const listItem = gsap.utils.toArray(".testing");
  
      gsap.to(".left", {
        scrollTrigger: {
          trigger: ".process_wrapper",
          start: "top top",
          end: "bottom bottom",
          pin: ".left",
          scrub: true,
        },
      });
  
      listItem.forEach((list, index) => {
        if (index < listItem.length - 1) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: list,
                id: "elem" + index,
                start: "center center",
                end: "50% top",
                scrub: true,
              },
            })
            .fromTo(
              ".headers",
              { yPercent: (-100 / listItem.length) * index - 1 },
              {
                ease: "power1.inOut",
                yPercent: (-100 / listItem.length) * (index + 1) - 1,
              }
            );
        }
      });
  
      gsap.set(".headers", { yPercent: 0 });
    });
  
    return () => mm.revert(); // Clean up on unmount
  }, []); 

  return (
    <section id="our_process" ref={processSection}>
      <div className="process_wrapper bg-white flex flex-col lg:flex-row lg:justify-between max-lg:px-[30px] ">
        {/* Left Section */}
        <div className="left w-full lg:w-1/2 xl:w-1/2 max-h-[900px] lg:h-screen flex pt-[60px] lg:border-r-[2px] border-black">
          <div className="process_left_content_wrapper xl:pl-[120px] lg:pl-[60px]">
            <h2 className="font-semibold text-[2.5rem] md:text-[3.5rem]  mb-[20px]">
              Our Process
            </h2>
            <div className="headings hidden lg:block h-[50px] overflow-y-hidden mb-[10px]">
              <div className="headers">
                {processes.map((process, index) => (
                  <h1
                    key={`${process.title}1`}
                    className="heading text-[39px] lg:text-[32px] font-semibold"
                  >
                    {`0${index + 1} ${process.title}`}
                  </h1>
                ))}
              </div>
            </div>
            <p className="text-xl lg:w-5/6 lg:text-xl font-normal md:font-medium lg:pr-[30px] max-lg:w-2/3 max-md:w-full">
              We simplify the complex by breaking it down into clear, actionable
              steps. Our approach ensures efficiency, quality, and a seamless
              experience for you.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full lg:w-3/6 xl:w-1/2 max-lg:mt-[65px] ">
          <div className="right-content-wrapper xl:last:pb-[35vh] lg:last:pb-[10vh]">
            {processes.map((process, index) => (
              <React.Fragment key={process.title + index}>
                <div
                  key={process.title + index}
                  className="right-content lg:py-[140px] relative "
                >
                  {/* <div className="absolute w-[3px] bg-red-700 border-4 border-red-400 h-full"></div> */}
                  <div className="m_heading lg:hidden text-xl md:text-3xl mb-2 font-semibold">
                    {`0${index + 1} ${process.title}`}
                  </div>
                  <ul className="testing lg:ml-[10px] xl:ml-[60px] flex flex-col lg:gap-y-[32px] mb-[30px] relative ">
                    {process.points.map((point, index) => (
                      <li
                        key={point}
                        className="text-lg lg:text-[28px] xl:text-[32px] leading-[32px] "
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr
                  className={`Line lg:ml-[10px] xl:ml-[60px] ${
                    index === processes.length - 1 ? "hidden" : ""
                  }`}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
