"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation"; // Import Next.js navigation

gsap.registerPlugin(useGSAP);

const Cursor = () => {
  const cursor = useRef(null);
  const cursorText = useRef(null);
  const pathname = usePathname(); // Detect page changes

  useGSAP(() => {
    const links = document.querySelectorAll("a");

    const onMouseMove = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
      
      });
    };

    const onMouseEnterLink = (e) => {
      if (e.target.classList.contains("view")) {
        gsap.to(cursor.current, { scale: 4, opacity: 1 });
        gsap.to(cursorText.current, { opacity: 1 });
      } else {
        gsap.to(cursor.current, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor.current, { scale: 1, opacity: 0 });
      gsap.to(cursorText.current, { opacity: 0 });
    };

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, [pathname]);

  // Reset cursor when the route changes
  useEffect(() => {
    gsap.to(cursor.current, { scale: 1, opacity: 0, });
    gsap.to(cursorText.current, { opacity: 0 });
  }, [pathname]);

  return (
    <div
      ref={cursor}
      className="cursor fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 flex justify-center items-center bg-[rgba(0,0,0,0.6)] opacity-0"
    >
      <span
        ref={cursorText}
        className="cursor-text text-[5px] text-white font-medium opacity-0"
      >
        Visit
      </span>
    </div>
  );
};

export default Cursor;