"use client";
import { useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { fonts } from "@/components/Fonts";
import Link from "next/link";
import Image from "next/image";
import CategoryCards from "@/components/CategoryCards";
import ProgressiveImage from "@/components/ProgressiveImage";


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
      <div className="absolute top-3/4 left-[-320px] -translate-y-1/2 w-1/3 ">
        <ProgressiveImage
          src="/cake.png"
          placeholder="/placeholder-image1.png"
          alt="Cake illustration"
          width={600}
          height={600}
        />
      </div>

      <div className="absolute top-1/2 right-[-250px] -translate-y-1/2 w-1/3">
        <ProgressiveImage
          src="/cake3.png"
          placeholder="/placeholder-image2.png"
          alt="Decorated cake"
          width={600}
          height={600}
        />
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
            <DialogTrigger className="flex items-center justify-center gap-2 bg-orange-500 text-white rounded-lg px-5 py-3 font-semibold shadow-md transition hover:bg-orange-600 w-full sm:w-full md:w-1/3">
              <FaLocationDot size={22} /> Choose Location
            </DialogTrigger>
            <DialogContent className="max-w-2xl overflow-y-auto p-6 rounded-lg shadow-xl">
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-bold">Select Your City</DialogTitle>
                <DialogDescription>
                  <div className="text-center mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-4">
                      Enjoy 2-Hour Cake Delivery 🚀
                    </p>

                    {/* Popular Cities Section */}
                    <h3 className="text-lg font-semibold mb-2">Popular Cities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {cities.map((item, index) => (
                        <Link
                          key={index}
                          href="/"
                          aria-label={`Order cakes in ${item.name}`}
                          className="flex flex-col items-center bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
                        >
                          <Image className="rounded-md" width={70} height={70} src={item.image} alt={`${item.name} city`} />
                          <span className="text-sm font-medium mt-2">{item.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Other Cities Section */}
                    <h3 className="text-lg font-semibold mt-5">Other Cities</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-3">
                      {otherCities.map((item, index) => (
                        <Link key={index} href="/" className="text-sm text-gray-700 hover:text-orange-500 transition font-medium">
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
