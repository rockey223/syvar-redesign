'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
    const router = useRouter()
  return (
    <>
      <div className="back col-start-1 col-end-4 hidden lg:flex justify-start items-center text-2xl">
        <Link
          href={"/"}
          // onClick={(e) => {
          //   e.preventDefault();
          //   router.back()
          // }}
          title="back"
          className="h-[50px] w-[50px] border-[1px] flex justify-center items-center rounded-full border-black hover:scale-125 transition-all ease-linear"
        >
          <IoArrowBack />
        </Link>
      </div>
    </>
  );
};

export default BackButton;
