import React from "react";
import WorkCard from "../WorkCard";

const featuredWorks = [
  {
    projectName: "Jina Alchemy",
    tagLine: "Taking care of your skin is more important than covering up",
    tasks: [
      "Ecommerce",
      "Website-Redesign",
      "Frontend Development",
      "UI/UX Design",
    ],
    image: "/images/featured1.jpg",
  },
  {
    projectName: "Viswo Consult",
    tagLine: "Testing, Inspection and Engineering Consultancy",
    tasks: ["website", "Frontend Development", "web Design"],
    image: "/images/featured1.jpg",
  },
  {
    projectName: "Jina Alchemy",
    tagLine: "Taking care of your skin is more important than covering up",
    tasks: [
      "Ecommerce",
      "Wevsite-Redesign",
      "Frontend Development",
      "UI/UX Design",
    ],
    image: "/images/featured1.jpg",
  },
];

const FeaturedWorks = () => {
  return (
    <section id="featured_section">
      <div className="w-full py-20 px-5 xl:px-[140px] lg:px-[50px]">
        <div className="featured_header col-span-full grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-x-5 px-5">
          <h2 className="col-span-4 lg:col-span-4 xl:col-span-10 font-semibold text-[2.5rem] md:text-[3.5rem]">
            Featured works
          </h2>
          <button
            className="col-span-4 lg:col-span-4 xl:col-span-2 justify-self-start lg:justify-self-end text-gray-600 text-xl 
          relative 
          "
          >
            <span className=" relative before:w-0 transition-all before:absolute before:bg-gray-600 before:h-[2px] hover:before:w-full before:-bottom-1 before:left-0 before:duration-100 before:ease-linear">
              more works
            </span>
          </button>
        </div>
        <div className="w-full py-20 grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 l gap-5 gap-y-[100px]  md:gap-y-[140px]">
          {featuredWorks.map((work, index) => (
            <WorkCard work={work} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
