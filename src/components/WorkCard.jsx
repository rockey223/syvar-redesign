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
  const cursorRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useGSAP(() => {
    gsap.to(`.featured_image${index}`, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
        end: "bottom 25%",
        scrub: true,
      },
    });
  }, [index]);

  useEffect(() => {
    if (!container.current || !cursorRef.current) return;

    const handleMouseMove = (e) => {
      const rect = container.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 50; // Center cursor
      const y = e.clientY - rect.top - 50;

      mousePos.current = { x, y };
      cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Link
      href={`/project/${index+1}`}
      ref={container}
      scroll={true}
      className={` group work_card flex flex-col gap-4 relative w-full 
        ${
          index % 2 !== 0
            ? "col-start-1 col-end-5 xl:col-start-5 xl:col-end-13 lg:col-start-3 lg:col-end-13"
            : "col-start-1 col-end-5 lg:col-start-1 lg:col-end-9 xl:col-start-1 xl:col-end-9"
        }`}
    >
      <div className="featured_image h-[450px] md:h-[560px] w-full overflow-hidden bg-red-500">
        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="cursor h-[100px] w-[100px] bg-[rgba(0,0,0,0.5)] flex justify-center items-center text-white font-bold absolute z-10 scale-0  transition-all  ease-linear rounded-full opacity-0 group-hover:opacity-100  group-hover:scale-100 pointer-events-none"
        >
          View more
        </div>

        {/* Image */}
        <Image
          style={{ transform: "translateY(0%)" }}
          src={work.image}
          className={`featured_image${index} h-[690px] md:h-[800px] scale-50
          aspect-video md:aspect-auto w-full object-cover`}
          width={1500}
          height={660}
          alt="Work Image"
        />
      </div>

      {/* Work Content */}
      <div className="featured_work_content flex flex-col gap-4">
        <h3 className="text-[18px] md:text-[36px] font-semibold text-gray-900">
          {work.projectName} -{" "}
          <span className="text-[14px] md:text-[20px]">{`"${work.tagLine}"`}</span>
        </h3>
        <p className="text-base text-gray-600 font-medium">
          {work.tasks.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default WorkCard;
