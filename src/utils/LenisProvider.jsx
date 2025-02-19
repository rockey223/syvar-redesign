'use client'
import Lenis from "lenis";
import { useEffect } from "react";

const LenisProvider = ({children}) => {
    useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
    console.log(lenis);
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);
  return <>{children}</>;
};

export default LenisProvider;
