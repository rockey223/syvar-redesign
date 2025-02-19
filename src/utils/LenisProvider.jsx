'use client'
import ReactLenis from "@studio-freight/react-lenis";

const LenisProvider = ({children}) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisProvider;
