"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const WorkCard = ({ work, index }) => {
  const container = useRef();
  useGSAP(() => {
    gsap.to(`.featured_image${index}`, {
      y: "-20%",
      ease: "none",
      //   duration: 2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
        end: "bottom 25%",
        scrub: true,
      },
      //   duration: 2
    });
  });

  return (
    <>
      <div
        ref={container}
        className={`work_card flex flex-col gap-4 relative w-full 
    ${
      index % 2 != 0
        ? " col-start-1 col-end-5  xl:col-start-5 xl:col-end-13 lg:col-start-3 lg:col-end-13"
        : "col-start-1 col-end-5 lg:col-start-1 lg:col-end-9 xl:col-start-1 xl:col-end-9"
    }`}
      >
        <div className="featured_image h-[450px] md:h-[560px] w-full overflow-hidden">
          <Image
            style={{ transform: "translateY(0%)" }}
            src={work.image}
            className={`featured_image${index} h-[690px] md:h-[800px] scale-50
           aspect-video md:aspect-auto w-full object-cover`}
            width={1500}
            height={660}
            alt="hello"
          />
        </div>
        <div className="featured_work_content flex flex-col gap-4">
          <h3 className="text-[18px] md:text-[36px] font-semibold text-gray-900">
            {work.projectName} -{" "}
            <span className="text-[14px] md:text-[20px] ">{`"${work.tagLine}"`}</span>
          </h3>
          <p className="text-base text-gray-600 font-medium">
            {work.tasks.map((task) => {
              return `${task},${" "}`;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
