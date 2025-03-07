"use client";
import React, { useRef } from "react";
import WorkCard from "../WorkCard";
import projectData from "@/data/ProjectData.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const featuredWorks = [
  {
    projectName: "Jina Alchemy",
    tagLine: "Taking care of your skin is more important than covering up",
    tasks: [
      "Ecommerce",
      "Website-Redesign",
      "Frontend Development",
      "UI/UX Design",
    ],
    image: "/images/featured1.jpg",
  },
  {
    projectName: "Viswo Consult",
    tagLine: "Testing, Inspection and Engineering Consultancy",
    tasks: ["website", "Frontend Development", "web Design"],
    image: "/images/featured1.jpg",
  },
  {
    projectName: "Jina Alchemy",
    tagLine: "Taking care of your skin is more important than covering up",
    tasks: [
      "Ecommerce",
      "Wevsite-Redesign",
      "Frontend Development",
      "UI/UX Design",
    ],
    image: "/images/featured1.jpg",
  },
];

const FeaturedWorks = () => {
  const featuredTitle = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      "body",
      {
        "--bg-change": "#000",
        "--text-change": "#fff",
      },
      {
        "--bg-change": "#fff",
        "--text-change": "#000",
        scrollTrigger: {
          trigger: featuredTitle.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
    // gsap.fromTo(
    //   "#navbar",
    //   { opacity: 0, y: -100, duration: 2 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: "#featured_section",
    //       start: "top center",
    //       end: "top 40%",
    //       scrub: true,
    //     },
    //   }
    // );

    
  });

  return (
    <section id="featured_section" >
      <div className="w-full bg-[var(--bg-change)] px-5 md:pt-16 xl:pt-20 2xl:pt-0 xl:px-[60px] lg:px-[50px] lg:pb-[100px]">
        <div className="featured_header col-span-full grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-x-5 ">
          <h2
            ref={featuredTitle}
            id="featured_title"
            className=" text-[var(--text-change)] max-md:text-center col-span-4 lg:col-span-4 xl:col-span-10 font-semibold text-[2.3rem] md:text-[3.5rem] pt-[95px] md:pt-[150px]"
          >
            Recent Projects
          </h2>
          {/* <button
            className="col-span-4 lg:col-span-4 xl:col-span-2 justify-self-start lg:justify-self-end text-gray-600 text-xl 
          relative 
          "
          >
            <span className=" relative before:w-0 transition-all before:absolute before:bg-gray-600 before:h-[2px] hover:before:w-full before:-bottom-1 before:left-0 before:duration-100 before:ease-linear">
              more works
            </span>
          </button> */}
        </div>
        <div className="w-full py-16 grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 l gap-5 gap-y-[100px]  md:gap-y-[140px]">
          {projectData.map((work, index) => (
            <WorkCard work={work} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
