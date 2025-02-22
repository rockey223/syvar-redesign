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
          <h1 className="text-[38px] xl:text-[64px] text-white font-bold">
            Syvar technology
          </h1>
        </div>
        <div className="spacer mt-[30px]" />
        <String />
        <div className="spacer mt-[30px]" />
        <div className="footer_contact flex flex-col md:flex-row gap-y-[30px] gap-x-[88px] text-white">
          <Link href={"/"} className="text-xl md:text-2xl">
            +977 9843636520
          </Link>
          <Link href={"/"} className="text-xl md:text-2xl">
            info@syvartech.com.np
          </Link>
        </div>
        <Link href={"#"} scroll={false} className="block group h-[250px] relative footer_master_btn text-white mx-auto w-3/4 mt-[100px] text-[94px] cursor-pointer ">
          <div className=" w-auto absolute  top-0 left-0 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500">
            Let's Work
          </div>
          <div className="inline-block absolute bottom-0 right-0 group-hover:right-1/2 group-hover:translate-x-1/2 transition-all duration-500">
            Together
          </div>
        </Link>
      </section>
    </>
  );
};

export default Footer;
