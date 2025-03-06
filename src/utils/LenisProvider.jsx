"use client";
import Contact from "@/components/Contact";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/app/store";
import { hide, show } from "./contactSlice";
import Cursor from "@/components/Cursor";



gsap.registerPlugin(useGSAP);

const LenisProvider = ({ children }) => {
  const contactContent = useRef(null);
  const bgRef = useRef(null);
  useEffect(() => {
   
    const lenis = new Lenis({
      // duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  // useGSAP(() => {
  //   const allSections = document.querySelectorAll("section");
  //   console.log(allSections);

  //   const sections = gsap.utils.toArray(allSections);
  //   console.log(sections);

  //   const bg = ["#000", "#fff", "#2e2e2e"];
  //   const text = ["#fff", "#000", "#fff"];

  //   sections.forEach((sec, index) => {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sec,
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: true,
  //       },
  //     }).fromTo('body',{
  //       '--bg-change': bg[index - 1],
  //       "--text-change" : text[index - 1]
  //     },{
        
  //       "--text-change" : text[index],
  //       '--bg-change': bg[index]
  //     })
  //   });

  //   // const sections = gsap.utils.toArray
  // });

  // useGSAP(() => {
  //   const processSection = document.getElementById("our_process");
  //   const featuredTitle = document.getElementById("featured_title");

  //   if (!processSection || !featuredTitle) return;

  //   // Explicitly set initial background to black
  //   gsap.set("body", {
  //     "--bg-change": "#000",
  //     "--text-change": "#fff",
  //   });

  //   gsap.to(
  //     "body",

  //     {
  //       "--bg-change": "#fff",
  //       "--text-change": "#000",
  //       scrollTrigger: {
  //         trigger: featuredTitle,
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     "body",
  //     {
  //       "--bg-change": "#fff",
  //       "--text-change": "#000",
  //     },
  //     {
  //       "--bg-change": "#649FE4",
  //       "--text-change": "#000",
  //       scrollTrigger: {
  //         trigger: processSection,
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

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
      <Cursor />
      {/*  */}
    </>
  );
};

export default LenisProvider;
