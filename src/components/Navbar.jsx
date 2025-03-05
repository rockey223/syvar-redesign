"use client";
import { show } from "@/utils/contactSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import MagneticIcon from "./MagneticIcon";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        id="navbar"
        className="w-full max-w-[1920px] fixed left-0 z-50 opacity-0"
      >
        <div className="blurnav">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="relative z-[55] flex px-[60px] max-sm:px-[20px]  justify-between items-center h-full">
          <div className="logo h-16 w-16">
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              alt="logo"
              className="h-full w-full"
            />
          </div>
          <div className="contact-btn">
            <MagneticIcon>
              <button
                className="h-12 w-36 bg-slate-800 text-white font-semibold tracking-widest rounded-full uppercase"
                onClick={() => {
                  dispatch(show());
                }}
              >
                contact us
              </button>
            </MagneticIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
