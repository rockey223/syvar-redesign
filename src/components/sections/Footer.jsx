"use client";
import React, { useEffect, useState } from "react";
import String from "../String";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import MagneticIcon from "../MagneticIcon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { handleContact } from "@/utils/LenisProvider";
import { useDispatch } from "react-redux";
import { show } from "@/utils/contactSlice";
import Lenis from "lenis";
const socialMediaIcons = [
  {
    title: "",
    icon: <FaFacebookF />,
    link: "",
  },
  {
    title: "Instagram",
    icon: <RiInstagramFill />,
    link: "",
  },
  //   {
  //     title: "",
  //     icon: <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M3.19687 18.0756V11.1654H0.523368C0.384562 11.1654 0.251442 11.1109 0.153291 11.0138C0.0551405 10.9167 0 10.785 0 10.6477V7.91463C0 7.77732 0.0551405 7.64563 0.153291 7.54854C0.251442 7.45144 0.384562 7.3969 0.523368 7.3969H3.1863V4.75122C3.1226 4.12381 3.19853 3.49021 3.40876 2.89493C3.61898 2.29964 3.95841 1.75711 4.4032 1.30543C4.84798 0.853749 5.38734 0.50388 5.98339 0.280396C6.57943 0.0569112 7.21772 -0.0347695 7.8534 0.0117933H10.0813C10.2214 0.0115216 10.3561 0.0657532 10.4561 0.162788C10.5562 0.259824 10.6137 0.391884 10.6162 0.530479V2.84462C10.6132 2.98297 10.5555 3.11465 10.4555 3.21143C10.3555 3.30821 10.2212 3.36239 10.0813 3.36235H8.68887C7.18503 3.36235 6.89597 4.06723 6.89597 5.10366V7.39595H10.4712C10.5455 7.39351 10.6195 7.40712 10.6879 7.43582C10.7564 7.46452 10.8177 7.50763 10.8676 7.56215C10.9175 7.61667 10.9548 7.68129 10.9769 7.75151C10.999 7.82173 11.0053 7.89588 10.9955 7.96878L10.6719 10.7123C10.6557 10.838 10.5935 10.9534 10.497 11.0367C10.4006 11.1201 10.2766 11.1655 10.1485 11.1645H6.91806V18.0746C6.91988 18.1967 6.89689 18.3179 6.85047 18.431C6.80404 18.5442 6.73513 18.6469 6.64781 18.7332C6.56049 18.8195 6.45654 18.8876 6.34213 18.9334C6.22772 18.9792 6.10517 19.0018 5.98176 18.9999H4.12164C3.9992 19.0003 3.8779 18.9765 3.76483 18.93C3.65176 18.8836 3.54918 18.8152 3.46309 18.7291C3.377 18.643 3.30912 18.5407 3.26341 18.4284C3.2177 18.316 3.19508 18.1967 3.19687 18.0756Z" fill="#262626"/>
  // </svg>
  // ,
  //   },
];

const Footer = () => {
  const handleIn = () => {
    const tl = gsap.timeline({ duration: 0.2, ease: "none" });

    tl.to(".hello", {
      y: -120,

      // ease: "elastic.out(1,0.5)",
    }).to(
      ".bye",
      {
        // duration: 0.2,
        // ease: "elastic.out(1,0.5)",

        y: -120,
      },
      "<"
    );
  };

  const handleOut = () => {
    const tl = gsap.timeline();

    tl.to(".hello", {
      duration: 1,
      ease: "elastic.out(1,0.5)",
      y: 0,
    }).to(
      ".bye",
      {
        duration: 1,
        ease: "elastic.out(1,0.5)",

        y: 120,
      },
      "<"
    );
  };

  const dispatch = useDispatch();
  return (
    <>
      <div className="max-w-[1920px] max-mb-[900px] mb-[900px]" />
      <footer className=" max-h-[900px] h-screen bg-black w-[100.01%] fixed bottom-0 right-1/2 translate-x-1/2 -z-10 px-[30px] lg:px-[60px] xl:px-[60px] py-[80px]">
        <div className="footer_header">
          <h1 className="text-[32px] xl:text-[64px] text-white font-bold ">
            Syvar Technology
          </h1>
        </div>
        <div className="spacer mt-[30px]" />
        <String />
        <div className="spacer mt-[30px]" />
        <div className="footer_contact flex flex-col md:flex-row gap-y-[10px] gap-x-[30px] text-gray-600">
          <Link
            href={"/"}
            className="text-xl md:text-base 2xl:text-xl hover:text-yellow-300"
          >
            +977 9840575636
          </Link>
          <Link
            href={"/"}
            className="text-xl md:text-base 2xl:text-xl hover:text-yellow-300"
          >
            info@syvar.com.np
          </Link>
        </div>
        <div className="mt-[50px] lg:mt-0 2xl:mt-[100px] md:mt-[100px] flex justify-center gap-y-[80px] md:gap-y-[100px] lg:justify-between flex-col lg:flex-row items-center h-[300px] ">
          <div className="social_Links flex gap-x-10 w-full items-center md:w-1/4">
            {socialMediaIcons.map((icon) => {
              return (
                <MagneticIcon key={icon.title}>
                  <Link
                    href={icon.link}
                    className="text-6xl text-gray-600 hover:text-yellow-400"
                  >
                    {icon.icon}
                  </Link>
                </MagneticIcon>
              );
            })}
          </div>
          <div
            className=" contact_link h-[120px] w-full md:w-3/4 flex lg:justify-end 
          md:justify-center max-lg:items-center"
          >
            <Link
              href={""}
              onClick={() => {
                dispatch(show());
              }}
              scroll={false}
              className="h-full  text-white text-5xl lg:text-7xl text-center"
            >
              <div
                className="h-full w-full relative overflow-hidden"
                onMouseEnter={handleIn}
                onMouseLeave={handleOut}
              >
                <p className=" hello h-full w-full  flex justify-center items-center ">
                  Got A Project?
                </p>
                <p className="bye    flex justify-center items-center h-full w-full ">
                  Let's Do It!
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full mb-[10px] gap-y-[10px] h-[60px] text-gray-500 flex flex-col md:flex-row items-center md:justify-between px-[30px] lg:px-[60px] xl:px-[60px]">
          <p className=" text-sm ">
            All right reserved 2025 &copy; Syvar Technology
          </p>
          <p className="text-sm ">
            <Link href={"/"}>Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
