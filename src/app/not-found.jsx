"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";
const notfound = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="relative h-screen w-full bg-[url('/images/bg.png')] bg-no-repeat bg-cover overflow-hidden flex flex-col justify-center items-center">
      <div className="content text-white flex flex-col justify-center items-center">
        <h1 className="text-9xl font-black">404</h1>
        <p className="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl">
          Page not found: {pathname}{" "}
        </p>
        <Link
          href={"/"}
          className="h-[50px] flex justify-center items-center text-base text-white/50 px-5 py-[18px] rounded-xl border-[1px] border-[#545454] cursor-pointer hover:shadow-[0px_1px_10px_0px_rgb(255,255,255,50%)] hover:text-white transition-all duration-300 ease-in-out"
        >
         Go To Home
        </Link>
      </div>
      
    </div>
  );
};

export default notfound;
