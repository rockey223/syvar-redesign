"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsapWithCSS from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
  const processSection = useRef();
  useGSAP(() => {
    gsap.to(".left", {
      scrollTrigger: {
        trigger: ".process_wrapper",
        start: "top top",
        end: "bottom bottom",
        pin: ".left",
        scrub: true,
      },
    });

    const listItem = gsap.utils.toArray(".testing");

    listItem.forEach((list, index) => {
      console.log(listItem.length);
      console.log((-30 / listItem.length) * index - 1);
      console.log(index < listItem.length - 1);

      index < listItem.length - 1 &&
        gsapWithCSS
          .timeline({
            scrollTrigger: {
              trigger: list,
              id: "elem" + index,
              start: "center center",
              end: "50% top",
              scrub: !0,
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
  });

  return (
    <>
      <section id="our_process" ref={processSection}>
        <div className="process_wrapper flex justify-between">
          <div className="left w-1/2 h-screen flex items-center">
            <div className="process_left_content_wrapper pl-[140px] ">
              <h2 className="text-[48px] font-semibold ">Our Process</h2>
              <div className="headings  h-[80px] overflow-y-hidden">
                <div className="headers">
                  {processes.map((process) => {
                    return (
                      <h1
                        key={`${process.title}1`}
                        className="heading text-[50px] font-medium "
                      >
                        {process.title}
                      </h1>
                    );
                  })}
                </div>
              </div>
              <p className="text-2xl font-medium">
                We simplify the complex by breaking it down into clear,
                actionable steps. Our approach ensures efficiency, quality, and
                a seamless experience for you.
              </p>
            </div>
          </div>
          <div className="right w-1/2 ">
            <div className="right-content-wrapper pr-[140px]">
              {processes.map((process, index) => {
                return (
                  <div
                    key={process.title + index}
                    className="right-content h-screen items-center border-l-2 border-black  flex pt-[45%] last:mb-[105px]"
                  >
                    <ul className=" testing ml-[60px] flex flex-col  gap-y-[32px] ">
                      {process.points.map((point, index) => {
                        return (
                          <li key={point} className=" text-[32px] ">
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
