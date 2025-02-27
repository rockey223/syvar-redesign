"use client";
import Contact from "@/components/Contact";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/app/store";
import { hide, show } from "./contactSlice";

gsap.registerPlugin(useGSAP);

const LenisProvider = ({ children }) => {
  const contactContent = useRef(null);
  const bgRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    // Initialize Lenis

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const displayContact = useSelector((state) => state.contact.displayButton);

  // const [displayContact, setDisplayContact] = useState();
  const dispatch = useDispatch();

  // const lenis = new Lenis();
  const closeContact = () => {
    if (contactContent.current && bgRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          dispatch(hide());
        },
      });

      tl.to(
        contactContent.current,
        {
          opacity: 0,
          scale: 0,
          x: "100%",
          duration: 0.5,
        },
        ">"
      );

      tl.to(bgRef.current, { opacity: 0, duration: 0.5 }, "<");
    } else {
      dispatch(hide());
    }
  };
  useGSAP(() => {
    if (displayContact) {
      const tl = gsap.timeline();

      tl.fromTo(
        contactContent.current,
        {
          opacity: 0,
          scale: 0,
          x: "100%",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
        },
        "<"
      );
      gsap.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }
  }, [displayContact]);




  return (
    <>
      {children}
      {displayContact ? (
        <Contact
          ref={contactContent}
          bgRef={bgRef}
          closeContact={closeContact}
        />
      ) : null}
     
      {/*  */}
    </>
  );
};

export default LenisProvider;
