"use client";
import Image from "next/image";
import heroImg from "../assets/imgs/booking.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const Hero = () => {
  const [toCountry, setToCountry] = useState("");

  const router = useRouter();
  const handleClick = () => {
    router.push(`/visa?toCountry=${toCountry}&fromCountry=IR`);
  };
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl ">
            Find Visa information for all countries and apply today.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Focus on your trip, not paperwork. Let us help you easily get your
            travel documents.
          </p>

          <div className="flex gap-8 mb-4">
            <div className="from-container w-[50%]">
              <label
                htmlFor="formCountries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Where am I From?
              </label>
              <select
                id="formCountries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="" disabled>
                  Choose a country
                </option>
                <option value="IR">Iraq</option>
              </select>
            </div>
            <div className="to-container w-[50%]">
              <label
                htmlFor="toCountries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Where am I Going?
              </label>
              <select
                onChange={(e) => setToCountry(e.target.value)}
                id="toCountries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="" disabled>
                  Choose a country
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="EU">Europe (Shengen)</option>
                <option value="OC">Other Countries</option>
                <option value="MT">Medical Treatment Services</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleClick}
            id="getStartBtn"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={heroImg} alt="mockup" />
        </div>
      </div>
    </section>
  );
};
