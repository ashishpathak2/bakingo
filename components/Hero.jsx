"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { fonts } from "@/components/Fonts";
import Link from "next/link";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero({}) {
  const categories = [
    { categoryName: "Birthday" },
    { categoryName: "Anniversary" },
    { categoryName: "Customized" },
    { categoryName: "Occasion" },
    { categoryName: "Relationship" },
    { categoryName: "Desserts" },
  ];

  const cities = [
    { image: "/Delhi.webp", name: "Delhi" },
    { image: "/Gurgaon.webp", name: "Gurgaon" },
    { image: "/Noida.webp", name: "Noida" },
    { image: "/Bangalore.webp", name: "Bangalore" },
    { image: "/Hyderabad.webp", name: "Hyderabad" },
    { image: "/Mumbai.webp", name: "Mumbai" },
  ];

  const otherCities = [
    "Ghaziabad",
    "Kolkata",
    "Sunderabad",
    "Coimbatore",
    "Kanpur",
    "Jaipur",
    "Chennai",
    "Jalandhar",
    "Faridabad",
    "Patna",
    "Ranchi",
    "Ludhiana",
    "Lucknow",
    "Pune",
    "Dehradun",
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "Ahmedabad",
    "Surat",
    "Amritsar",
"Bhopal",
"Haridwar",
    "Noida",
    "Vijayawada",
    "Agra",
    "Panipat",
    "Karnal",
  ];

  return (
    <main className="absolute w-full flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1
        className={`text-4xl md:text-5xl text-center pt-24 md:pt-0 pb-12 font-medium md:font-bold ${fonts.className} text-red-600`}
      >
        Freshly baked, always loved.
      </h1>

      <div className="flex flex-col gap-2 w-full max-w-5xl">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-normal gap-8 px-5">
          <Dialog>
            <DialogTrigger className="flex py-4 sm:w-1/2 md:py-2 justify-center gap-2 bg-orange-200 rounded-2xl items-center w-full md:w-1/2 font-bold">
              <FaLocationDot size={22} />
              Enter your location
            </DialogTrigger>

            <DialogContent className="overflow-y-auto md:max-w-[80vw] h-4/5">
              <DialogHeader>
                <DialogTitle className="text-center text-3xl font-normal">
                  Select City
                </DialogTitle>
                <DialogDescription>
                  <div className="text-center">
                    <div className="font-semibold pt-1 pb-4 text-sm text-black">
                      And Get Your Cake Delivered In 2 Hours
                    </div>
                    <div className="flex gap-4 items-center text-gray-700 justify-center">
                      <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                      <span className="font-medium text-xl text-nowrap">
                        Popular Cities
                      </span>
                      <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-5 my-3 md:gap-10 md:my-8">
                      {cities.map((item, index) => (
                        <Link
                          key={index}
                          href="/"
                          className="flex gap-2 w-24 flex-col px-4 py-3 hover:shadow-lg transition-all ease-in-out duration-300 hover:bg-blue-100/30 rounded-xl"
                        >
                          <Image
                            className="w-full rounded-xl"
                            width={90}
                            height={90}
                            src={item.image}
                            alt={item.name}
                          />
                          <span className="text-base font-medium text-black">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="flex gap-4 items-center text-gray-700 justify-center mb-5">
                      <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                      <span className="font-medium text-xl text-nowrap">
                        Other Cities
                      </span>
                      <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-6 text-black font-medium text-sm md:text-base">
                      {otherCities.map((item, index) => {
                        return (
                          <Link key={index} href="/" className="block hover:scale-125 transition-all ease-in-out duration-200 ">
                            {item}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="flex sm:w-1/2 md:w-full px-4 py-2 bg-white rounded-2xl w-full items-center">
            <CiSearch size={28} />
            <input
              type="text"
              className="w-full p-2 ml-2 rounded-lg focus:outline-none"
              placeholder="Search for cakes, flavours and more"
            />
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-3 font-bold md:text-xl mt-20 text-center items-center justify-center">
          {categories.map((item, index) => (
            <Link
              key={index}
              href="/"
              className={`md:w-52 w-44 border-2 bg-cyan-50/80 hover:bg-red-600 hover:text-white py-2 px-3 md:px-4 md:py-3 rounded-full transition ease-in-out duration-300`}
            >
              {item.categoryName}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
