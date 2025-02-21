"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsapWithCSS from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window]);

  return width;
};
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
      "Interactiopn Design",
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
  const width = useWindowWidth();
  console.log(width);

  const processSection = useRef();
  useGSAP(() => {
    const listItem = gsap.utils.toArray(".testing");

    if (width >= 1024) {
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
        index < listItem.length - 1 &&
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
              {
                yPercent: () => (-100 / listItem.length) * index - 1,
              },
              {
                ease: "power1.inOut",
                yPercent: () => (-100 / listItem.length) * (index + 1) - 1,
              }
            );
      });
      gsap.set(".headers", { yPercent: 0 });
    }
  });

  return (
    <>
      <section id="our_process" ref={processSection}>
        <div className="process_wrapper bg-white flex flex-col lg:flex-row lg:justify-between">
          <div className="left w-full lg:w-1/2 xl:w-1/2 lg:h-screen flex items-center bg-red-500">
            <div className="process_left_content_wrapper  xl:pl-[120px] lg:pl-[60px] ">
              <h2 className="text-[48px] font-semibold ">Our Process</h2>
              <div className="headings hidden lg:block h-[50px] overflow-y-hidden bg-yellow-600">
                <div className="headers">
                  {processes.map((process, index) => {
                    return (
                      <h1
                        key={`${process.title}1`}
                        className="heading text-[39px] lg:text-[32px] font-semibold "
                      >
                        {`0${index + 1} ${process.title}`}
                      </h1>
                    );
                  })}
                </div>
              </div>
              <p className="text-lg lg:w-5/6 lg:text-xl font-medium lg:pr-[30px]">
                We simplify the complex by breaking it down into clear,
                actionable steps. Our approach ensures efficiency, quality, and
                a seamless experience for you.
              </p>
            </div>
          </div>
          <div className="right w-full lg:w-3/6 lg:p[0] xl:w-1/2 bg-blue-00">
            <div className="right-content-wrapper ">
              {processes.map((process, index) => {
                return (
                  <div
                    key={process.title + index}
                    className="right-content lg:h-screen lg:border-l-2 border-black lg:pt-[45%] "
                  >
                    <div className="m_heading lg:hidden text-3xl mb-2 font-medium">
                      {process.title}
                    </div>
                    <ul className=" testing lg:ml-[10px]  xl:ml-[60px] flex flex-col lg:gap-y-[32px] mb-[30px]">
                      {process.points.map((point, index) => {
                        return (
                          <li
                            key={point}
                            className=" text-xl lg:text-[28px] xl:text-[32px] leading-[32px]"
                          >
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
