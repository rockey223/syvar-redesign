"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger); // ✅ Removed useGSAP from here

const WorkCard = ({ work, index }) => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      `.featured_image${index}`,
      {
        scale: 1.5,
      },
      {
        y: "-30%",
        ease: "none",
        scale: 1.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: "bottom 25%",
          scrub: true,
        },
      }
    );
  }, [index]);

  return (
    <Link
      href={`/project/${work.slug}`}
      ref={container}
      scroll={true}
      className={`view group work_card flex flex-col gap-4 relative w-full 
        ${
          index % 2 == 0
            ? "col-start-1 col-end-5 xl:col-start-4 xl:col-end-13 lg:col-start-3 lg:col-end-13"
            : "col-start-1 col-end-5 lg:col-start-1 lg:col-end-10 xl:col-start-1 xl:col-end-10"
        }`}
    >
      <div className="featured_image h-[450px] md:h-[760px] w-full overflow-hidden rounded-xl hover:brightness-75 transition-all ease-in-out duration-200">
        {/* Custom Cursor */}

        {/* Image */}
        <Image
          style={{ transform: "translateY(10%)" }}
          src={work.thumbnail}
          className={`featured_image${index} h-[690px] md:h-[800px] 
          md:aspect-auto w-full object-cover`}
          width={1500}
          height={860}
          alt="Work Image"
        />
      </div>

      {/* Work Content */}
      <div className="featured_work_content flex flex-col ">
        <h3 className="text-[18px] md:text-[36px] font-semibold text-gray-900">
          {work.projectName}
          {/* <span className="text-[14px] md:text-[20px]">{`"${work.tagLine}"`}</span> */}
        </h3>
        <p className="text-base text-gray-600 font-medium">
          {work.services.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default WorkCard;
