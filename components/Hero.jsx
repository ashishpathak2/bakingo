"use client";
import { useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { fonts } from "@/components/Fonts";
import Link from "next/link";
import Image from "next/image";
import CategoryCards from "@/components/CategoryCards";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero() {
  const categories = useMemo(() => [
    "Birthday", "Anniversary", "Customized", "Occasion", "Relationship", "Desserts"
  ], []);

  const cities = useMemo(() => [
    { image: "/delhi.webp", name: "Delhi" },
    { image: "/gurgaon.webp", name: "Gurgaon" },
    { image: "/noida.webp", name: "Noida" },
    { image: "/bangalore.webp", name: "Bangalore" },
    { image: "/hyderabad.webp", name: "Hyderabad" },
    { image: "/mumbai.webp", name: "Mumbai" },
  ], []);

  const otherCities = useMemo(() => [
    "Ghaziabad", "Kolkata", "Sunderabad", "Coimbatore", "Kanpur", "Jaipur",
    "Chennai", "Jalandhar", "Faridabad", "Patna", "Ranchi", "Ludhiana",
    "Lucknow", "Pune", "Dehradun", "Chandigarh", "Mohali", "Panchkula",
    "Ahmedabad", "Surat", "Amritsar", "Bhopal", "Haridwar", "Noida",
    "Vijayawada", "Agra", "Panipat", "Karnal",
  ], []);

  return (
    <main className="relative w-full min-h-screen bg-[#fff3d3] overflow-hidden flex flex-col items-center">
      
      {/* Background Images */}
      <div className="absolute top-1/2 left-[-250px] -translate-y-1/2 w-1/3 opacity-75">
        <Image src="/cake.png" alt="Cake illustration" width={800} height={800} className="object-contain" priority />
      </div>
      <div className="absolute top-1/2 right-[-250px] -translate-y-1/2 w-1/3 opacity-75">
        <Image src="/cake3.png" alt="Decorated cake" width={800} height={800} className="object-contain" priority />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 pt-36 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold text-red-600 ${fonts.className}`}>
          Freshly Baked, Always Loved.
        </h1>
        <p className="text-lg md:text-xl font-bold text-gray-700 pt-3">
          Order Your Favorite Cake Today!
        </p>

        {/* Search & Location */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full sm:w-5/6 mx-auto">
          <Dialog>
            <DialogTrigger className="flex items-center justify-center gap-2 bg-orange-300 rounded-xl px-4 py-3 font-bold w-full sm:w-full md:w-1/3">
              <FaLocationDot size={22} /> Enter Your Location
            </DialogTrigger>
            <DialogContent className="max-w-3xl overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl">Select Your City</DialogTitle>
                <DialogDescription>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-black py-2">
                      Get Your Cake Delivered in 2 Hours 🚀
                    </p>

                    <h3 className="text-lg font-medium">Popular Cities</h3>
                    <div className="grid grid-cols-3 gap-4 my-3">
                      {cities.map((item, index) => (
                        <Link 
                          key={index} 
                          href="/" 
                          aria-label={`Order cakes in ${item.name}`}
                          className="flex flex-col items-center hover:shadow-lg transition p-3 rounded-xl"
                        >
                          <Image className="rounded-lg" width={80} height={80} src={item.image} alt={`${item.name} city`} />
                          <span className="text-sm font-medium mt-2">{item.name}</span>
                        </Link>
                      ))}
                    </div>

                    <h3 className="text-lg font-medium mt-4">Other Cities</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-3">
                      {otherCities.map((item, index) => (
                        <Link key={index} href="/" className="text-sm hover:text-red-500 transition">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="flex items-center bg-white rounded-xl px-4 py-1 w-full sm:w-full md:w-2/3">
            <CiSearch size={24} />
            <input 
              type="text" 
              className="w-full px-4 py-2 focus:outline-none" 
              placeholder="Search for cakes, flavors & more" 
              aria-label="Search cakes"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 py-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href="/" 
              className="bg-cyan-50 border-2 rounded-full px-4 py-2 text-sm font-semibold hover:bg-red-600 hover:text-white transition"
              aria-label={`Explore ${category} cakes`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Category Cards */}
        <div className="flex justify-center gap-5">
          <CategoryCards title="Cakes" subTitle="Sweet Delights" offer="20" link="/" image="/cake5.png" />
          <CategoryCards title="Desserts" subTitle="Dessert Dreams" offer="5" link="/" image="/cake6.png" />
          <CategoryCards title="Gifts" subTitle="Perfect Surprises" offer="15" link="/" image="/cake7.png" />
          <CategoryCards title="More" subTitle="Extra Treats" offer="16" link="/" image="/cake8.png" />
        </div>
      </div>
    </main>
  );
}
