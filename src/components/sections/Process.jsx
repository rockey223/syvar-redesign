"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
                start: "top top",
                end: "bottom -50%",
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
    mm.add("(max-width : 1023px)",()=>{
      
      
      const list = gsap.utils.toArray("#list p") 
list.forEach((ist)=>{

  gsap.to(ist,{
    backgroundPosition: "0%",
    stagger: 1,
    scrollTrigger:{
      trigger:ist,
      scrub: true,
      start: "top center",
      end: "bottom center",
    }
  })
})


    })
  
    return () => mm.revert(); // Clean up on unmount
  }, []); 

  return (
    <section id="our_process" ref={processSection} 
    // className="bg-[#f8f6f2]"
    >
      <div className="process_wrapper  flex flex-col lg:flex-row lg:justify-between max-lg:px-[30px] xl:pb-0 2xl:pb-[100px] pb-[100px]">
        {/* Left Section */}
        <div className="left w-full lg:w-1/2 xl:w-1/2 max-h-[1000px] lg:h-screen flex pt-[60px] lg:border-r-[2px] border-black">
          <div className="process_left_content_wrapper xl:pl-[60px] lg:pl-[60px]">
            <h2 className="font-semibold text-[2.5rem] md:text-[3rem] xl:text-[3rem] 2xl:text-[4rem] mt-[30px] mb-[20px]">
              Our Process
            </h2>
            <div className="headings hidden lg:block h-[50px] overflow-y-hidden mb-[10px]">
              <div className="headers">
                {processes.map((process, index) => (
                  <h1
                    key={`${process.title}1`}
                    className="heading text-[39px] md:text-[28px] 2xl:text-[38px] font-semibold"
                  >
                    {`0${index + 1} ${process.title}`}
                  </h1>
                ))}
              </div>
            </div>
            <p className="text-base lg:w-5/6  2xl:text-xl 2xl:mt-6 font-normal lg:pr-[30px] max-lg:w-2/3 max-md:w-full">
              We simplify the complex by breaking it down into clear, actionable
              steps. Our approach ensures efficiency, quality, and a seamless
              experience for you.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full lg:w-3/6 xl:w-1/2 max-lg:mt-[65px]  ">
          <div className="right-content-wrapper xl:last:pb-[0vh] 2xl:last:pb-[17vh] lg:last:pb-[10vh]  ">
            {processes.map((process, index) => (
              <React.Fragment key={process.title + index}>
                <div
                id="list"
                  key={process.title + index}
                  className="right-content lg:pt-[155px] 2xl:pt-[190px] lg:pb-[254px] relative "
                >
                  {/* <div className="absolute w-[3px] bg-red-700 border-4 border-red-400 h-full"></div> */}
                  <p className="m_heading lg:hidden text-xl md:text-3xl  mb-2 font-semibold">
                    {`0${index + 1} ${process.title}`}
                  </p>
                  <div className="testing lg:ml-[10px] xl:ml-[60px] flex flex-col lg:gap-y-[32px] mb-[20px] relative ">
                    {process.points.map((point, index) => (
                      <p
                        key={point}
                        className="text-lg lg:text-[24px] xl:leading-[20px] 2xl:leading-[20px] "
                      >
                        {point}
                      </p>
                    ))}
                  </div>
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
