"use client";
import React, { useRef, useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const services = [
  "Product Design & UX",
  "Development",
  "Search Engine Optimization",
  "Digital Marketing",
  "Other",
];
const budgets = ["Under $5k", "$5k-$10k", "$10k-$20k", "$20k-$50k", "$50k+"];

const formSchema = z.object({
  challenge: z
    .array(z.string())
    .min(1, "Please select what you want us to help with"),
  budget: z.string().min(3, "Please select your budget"),
  name: z.string().min(3, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(50, "Please explain your problem a bit longer."),
});

const Contact = ({ ref, bgRef, closeContact }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const [budgetamt, setBudget] = useState("");
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    getValues,
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      challenge: [],
      budget: "",
      name: "",
      email: "",
      message: "",
    },
  });

  const addBudget = (e) => {
    console.log(e);

    setValue("budget", e.target.value);
    setBudget(e.target.value);
  };

  const toggleService = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((item) => item !== service)
      : [...selectedServices, service];
    setSelectedServices(updatedServices);
    setValue("challenge", updatedServices);
  };

  const submitForm = (data) => {
    console.log(data);
    reset();
    setBudget("");
    setSelectedServices([]);
  };

  return (
    <>
      <div
        role="button"
        ref={bgRef}
        title="Close"
        onClick={closeContact}
        className="close fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md dark w-screen h-screen bg-[#0002] opacity-100 z-10 pointer-events-auto cursor-pointer"
      />
      <div
        ref={ref}
        data-lenis-prevent
        id="modal"
        className="contact-content bg-white w-[calc(100%-2rem)] lg:max-w-[44rem] z-20 rounded-2xl md:rounded-lg md:pt-[1.5rem] pt-4 px-4 pb-8 md:px-[2rem] md:pb-[4rem] max-h-[calc(100%-2rem)] bottom-auto overflow-y-auto fixed right-4 top-4 origin-[center_right] shadow-[0_10px_38px_-10px_#0e121659,0_10px_20px_-15px_#0e12163] pointer-events-auto"
        role="dialog"
      >
        <div className="sticky flex top-0 items-center justify-end pointer-events-none">
          <button
            onClick={closeContact}
            type="button"
            className="flex items-center bg-black text-white justify-center pointer-events-auto transition-all duration-200 ease-linear rounded-full h-7 w-7 md:h-8 md:w-8"
            aria-label="Close"
          >
            <div className="i-carbon-close w-8 h-8 sm:w-6 sm:h-6"></div>
          </button>
        </div>

        <div className="title mt-5 sm:mt-7 mb-4">
          <div className="h-auto text-3xl md:text-5xl mb-0 inline-block">
            Start a Project
          </div>
        </div>

        <div className="sm:mt-7">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-5">
              <fieldset className="p-0 m-0">
                <legend className="text-lg max-sm:leading-6 md:text-[22.5px] mb-0">
                  What challenge can We help you tackle?
                </legend>
                <div
                  className="flex flex-wrap gap-3 mt-3"
                  role="group"
                  tabIndex={0}
                >
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      tabIndex={1}
                      className={`border-2 rounded-xl py-2 px-4 transition focus:outline-none ${
                        selectedServices.includes(service)
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-400"
                      }`}
                      onClick={() => toggleService(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.challenge && (
                  <span className="text-red-700 text-base">
                    {errors.challenge.message}
                  </span>
                )}
              </fieldset>

              <fieldset className="p-0 my-6">
                <legend className="text-lg max-sm:leading-6 md:text-[22.5px] mb-0">
                  Do you have a budget in mind?
                </legend>
                <div
                  className="flex flex-wrap gap-3 mt-3 mb-2"
                  role="radiogroup"
                  tabIndex={0}
                >
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      tabIndex={1}
                      value={budget}
                      className={` border-2 rounded-xl py-2 px-4 ${
                        budgetamt == budget
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={addBudget}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
                {errors.budget && (
                  <span className="text-red-700 text-base">
                    {errors.budget.message}
                  </span>
                )}
              </fieldset>

              <fieldset className="p-0 my-6">
                <legend className="text-lg max-sm:leading-6 md:text-[22.5px] mb-0">
                  Your Information
                </legend>
                <div className="flex flex-col gap-[5px] gap-y-4 md:flex-row lg:gap-[20px] mb-2 mt-3">
                  <div className="w-full">
                    <input
                      type="text"
                      name="name"
                      className="w-full focus:outline-2 bg-white border-[1px] border-black rounded-md py-2 px-3"
                      placeholder="Your Name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-red-700 text-base">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="email"
                      className="w-full focus:outline-2 bg-white border-[1px] border-black rounded-md py-2 px-3"
                      placeholder="Your Email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-red-700 text-base">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full mt-4">
                  <textarea
                    name="message"
                    rows={8}
                    placeholder="Tell us more about your project"
                    id="message"
                    className="w-full focus:outline-2 bg-white border-[1px] border-black rounded-md py-2 px-3"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-700 text-base">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </fieldset>
            </div>

            <button
              type="submit"
              className="text-white bg-black inflex py-0 px-2 relative rounded-xl"
              disabled={isSubmitting}
            >
              <div className="px-4 py-2 inline-flex">Submit</div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
