"use client";
import React, { useState } from "react";
import String from "../String";
import Link from "next/link";

const Footer = () => {
  const [isCenter, setIsCenter] = useState(false);
  const hover = () => {
    setIsCenter(true);
  };
  const nothover = () => {
    setIsCenter(false);
  };
  return (
    <>
      <div className="mb-[100vh]" />
      <section className="h-screen bg-black w-[100.01%] fixed bottom-0 right-1/2 translate-x-1/2 -z-10 px-[30px] lg:px-[60px] xl:px-[140px] py-[100px]">
        <div className="footer_header">
          <h1 className="text-[32px] xl:text-[64px] text-white font-bold">
            Syvar technology
          </h1>
        </div>
        <div className="spacer mt-[30px]" />
        <String />
        <div className="spacer mt-[30px]" />
        <div className="footer_contact flex flex-col md:flex-row gap-y-[10px] gap-x-[88px] text-white">
          <Link href={"/"} className="text-xl md:text-2xl">
            +977 9843636520
          </Link>
          <Link href={"/"} className="text-xl md:text-2xl">
            info@syvartech.com.np
          </Link>
        </div>

        <div className="w-full grid grid-cols-4 md:grid-cols-24  gap-[1rem] md:gap-x-[1.5rem] items-center">
          <div className="col-span-full relative trelative translate-y-[5.5vh] lg:col-start-3 lg:col-span-20 md:translate-y-[2.5vh]">
            <Link
              href={""}
              className="group text-[2rem] font-bold lg:text-[5rem] flex flex-col cursor-pointer text-white"
            >
              <div className="relative inline-flex lg:group-hover:translate-x-[30%] transition-transform duration-300 ease-[cubic-bezier(.215,.61,.355,1)]">
                Let's build
              </div>
              <div className="relative inline-flex md:justify-end lg:group-hover:-translate-x-[30%] transition-transform duration-300 ease-[cubic-bezier(.215,.61,.355,1)]">
                Something cool
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="block group h-[350px] relative footer_master_btn text-white mx-auto w-2/3 mt-[100px] text-[64px] md:text-[144px] cursor-pointer ">
          <span className=" w-auto absolute top-0 left-0 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500">
            Let's Work
          </span>
          <div className="inline-block absolute bottom-0 right-0 group-hover:right-1/2 group-hover:translate-x-1/2 transition-all duration-500">
            Together
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Footer;
