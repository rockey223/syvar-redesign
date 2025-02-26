import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import React from "react";
import MagneticIcon from "@/components/MagneticIcon";
import projectData from "@/data/projectData.json";

const getData = async (id) => {
  return projectData.find((project) => {
    return project.id === id;
  });
};

const page = async ({ params }) => {
  const id = await params;
  const project = await getData(id.slug);
  console.log(project);

  return (
    <>
      <div className="page-wrapper px-[20px] bg-white w-full md:px-[60px] xl:px-[140px] min-h-[100vh]">
        <div className="project-heading grid grid-cols-4 w-full lg:grid-cols-12 lg:py-[100px] bg-white">
          <Link
            href={"/"}
            className="back col-start-1 col-end-4 hidden lg:flex justify-center items-center text-2xl"
          >
            <div
              title="back"
              className="h-[50px] w-[50px] border-[1px] flex justify-center items-center rounded-full border-black hover:scale-125 transition-all ease-linear"
            >
              <IoArrowBack />
            </div>
          </Link>
          <div className="header col-span-full lg:col-start-4 lg:col-end-13 w-full bg-white py-[0px] lg:py-[60px]">
            <div className="heading text-5xl leading-tight lg:text-8xl font-bold w-full 2xl:w-2/3">
              Jina Alchemy alchemy
            </div>

            <div className="project-description w-full bg-white min-h-[100px] flex flex-col gap-y-9 lg:flex-row justify-between lg:items-center mt-7">
              <p className="w-full lg:w-2/3 text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                voluptatem voluptatum ex cum tempore, voluptate non eligendi quo
                necessitatibus voluptatibus eum atque autem eveniet est iusto
                recusandae blanditiis alias! Perferendis natus, perspiciatis cum
                excepturi totam impedit tempore consequuntur. Ex, blanditiis
                quod corporis excepturi mollitia sapiente cumque suscipit
                laborum voluptatem dolorum?
              </p>
              <MagneticIcon>
                <Link
                  href={project.link}
                  className="mr-9 h-[100px] w-[100px] border-[1px] flex justify-center items-center rounded-full border-gray-600 text-gray-950 hover:bg-blue-200 hover:border-none transition-colors duration-300 ease-in-out hover:text-white"
                >
                  Visit Site
                </Link>
              </MagneticIcon>
            </div>
          </div>
        </div>
        <div className="project-content grid grid-cols-4 lg:grid-cols-12">
          <div className="services lg:sticky top-0 lg:pt-[180px] flex lg:justify-center lg:-mt-[180px] lg:h-screen col-span-full w-full lg:col-start-1 lg:col-end-4">
            <div className="w-full">
              <div className="w-full">
                <h3 className="project-services-heading text-2xl 2xl:text-4xl font-semibold w-full ">
                  Services provided
                </h3>
                <ul className=" mt-4 text-gray-800">
                  {
                    project.services.map((service)=>{
                      return (

                        <li key={service} className="text-xl">{service}</li>
                      )
                    })
                  }
      
                </ul>
              </div>
              <div className="mt-11">
                <h3 className="project-services-heading text-2xl 2xl:text-4xl font-semibold ">
                  Duration
                </h3>
                <p className="mt-4 text-xl text-gray-800">{project.duration}</p>
              </div>
            </div>
          </div>
          <div className="images pb-[100px] col-span-full max-lg:mt-7 lg:col-start-4 lg:col-end-13 w-full">

            {
              project.images.map((image,index)=>{
                return (

            <div className="projectImages w-full" key={`${image} +  ${index}`}>
              <Image
                src={image}
                width={1000}
                height={100}
                alt="image"
                className="w-full"
              />
            </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
