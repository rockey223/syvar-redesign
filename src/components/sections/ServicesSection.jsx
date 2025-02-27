import React from "react";

const serviceList = [
  "Web Development",
  "Mobile App Development",
  "Product Design",
  "Digital Marketing",
  "Search Engine Optimization",
];

const ServicesSection = () => {
  return (
    <section id="services_section">
      <div className="h-full lg:h-[100vh] bg-gray-900 w-full py-[100px] lg:py-[149px] flex flex-col gap-16 md:gap-[104px]">
        <div className="h-full flex flex-col justify-center intems-center gap-20">
          <div className="services_header w-full text-center">
            <h2 className="px-1 text-gray-200 text-4xl md:text-[64px] font-medium">
              Delivering on your Expectations
            </h2>
          </div>
          <div className="services_list w-full xl:px-[138px] 2xl:px-[500px] mb-2 md:mb-5">
            <ul className="w-full flex flex-wrap gap-x-5 md:gap-x-9 xl:gap-x-2 gap-y-8 items-center justify-center">
              {serviceList.map((service, index) => (
                <li
                  key={index}
                  className="flex justify-center items-center py-2 lg:py-3 px-4 lg:px-[30px] rounded-full border-2 lg:border-[2px] border-gray-200 text-white md:text-lg"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col px-2 xl:px-[100px] 2xl:px-[530px] justify-center items-center gap-10">
            <p className="max-w-[800px] text-blue-0 text-center text-xl md:px-4">
              We simplify the complex by breaking it down into clear, actionable
              steps. Our approach ensures efficiency, quality, and a seamless
              experience for you.
            </p>
            {/* <button className="px-5 py-[10px] flex items-center justify-center border-[4px] border-gray-200 text-gray-900 bg-gray-200 rounded-full font-semibold text-xl">More About Services</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
