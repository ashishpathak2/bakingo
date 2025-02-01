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
    { image: "/delhi.webp", name: "Delhi" },
    { image: "/gurgaon.webp", name: "Gurgaon" },
    { image: "/noida.webp", name: "Noida" },
    { image: "/bangalore.webp", name: "Bangalore" },
    { image: "/hyderabad.webp", name: "Hyderabad" },
    { image: "/mumbai.webp", name: "Mumbai" },
  ];

  const otherCities = [
    "Ghaziabad", "Kolkata", "Sunderabad", "Coimbatore", "Kanpur", "Jaipur",
    "Chennai", "Jalandhar", "Faridabad", "Patna", "Ranchi", "Ludhiana",
    "Lucknow", "Pune", "Dehradun", "Chandigarh", "Mohali", "Panchkula",
    "Ahmedabad", "Surat", "Amritsar", "Bhopal", "Haridwar", "Noida",
    "Vijayawada", "Agra", "Panipat", "Karnal",
  ];

  return (
    <main className="absolute w-full flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
      <h1 className={`text-4xl md:text-5xl text-center pt-24 md:pt-0 pb-10 font-medium md:font-bold ${fonts.className} text-red-600`}>
        Freshly baked, always loved.
      </h1>

      <div className="flex flex-col gap-3 w-full max-w-5xl">
        {/* Location & Search Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-normal gap-6 px-4 w-full">
          {/* Location Selector */}
          <Dialog>
            <DialogTrigger className="flex py-3 px-4 justify-center gap-2 bg-orange-200 rounded-2xl items-center w-full sm:w-1/2 md:w-1/3 font-bold">
              <FaLocationDot size={22} />
              Enter your location
            </DialogTrigger>

            <DialogContent className="overflow-y-auto md:max-w-[90vw] max-h-[85vh]">
              <DialogHeader>
                <DialogTitle className="text-center text-3xl font-normal">Select City</DialogTitle>
                <DialogDescription>
                  <div className="text-center">
                    <div className="font-semibold pt-1 pb-4 text-sm text-black">
                      Get Your Cake Delivered In 2 Hours
                    </div>

                    <div className="flex gap-4 items-center text-gray-700 justify-center">
                      <div className="h-[1px] w-1/2 bg-gray-700"></div>
                      <span className="font-medium text-xl">Popular Cities</span>
                      <div className="h-[1px] w-1/2 bg-gray-700"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 my-3 md:gap-8">
                      {cities.map((item, index) => (
                        <Link key={index} href="/" className="flex flex-col items-center px-4 py-3 hover:shadow-lg transition-all ease-in-out duration-300 hover:bg-blue-100/30 rounded-xl">
                          <Image className="rounded-xl" width={90} height={90} src={item.image} alt={item.name} />
                          <span className="text-base font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="flex gap-4 items-center text-gray-700 justify-center mb-5">
                      <div className="h-[1px] w-1/2 bg-gray-700"></div>
                      <span className="font-medium text-xl">Other Cities</span>
                      <div className="h-[1px] w-1/2 bg-gray-700"></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 text-black font-medium text-sm md:text-base">
                      {otherCities.map((item, index) => (
                        <Link key={index} href="/" className="block hover:scale-110 transition-all ease-in-out duration-200">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Search Bar */}
          <div className="flex sm:w-1/2 md:w-2/3 px-4 py-2 bg-white rounded-2xl items-center">
            <CiSearch size={28} />
            <input type="text" className="w-full flex-grow p-2 ml-2 min-w-0 rounded-lg focus:outline-none" placeholder="Search for cakes, flavors and more" />
          </div>
        </div>

        {/* Category Links */}
        <div className="flex flex-wrap lg:flex-nowrap gap-x-3 gap-y-4 font-bold md:text-xl mt-16 text-center justify-center ">
          {categories.map((item, index) => (
            <Link key={index} href="/" className="sm:w-40 md:w-52 border-2 bg-cyan-50/80 hover:bg-red-600 hover:text-white py-2 px-3 md:px-4 md:py-3 rounded-full transition ease-in-out duration-300">
              {item.categoryName}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
