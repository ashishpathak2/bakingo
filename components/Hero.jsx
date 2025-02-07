"use client";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero() {
  const categories = [
    "Birthday",
    "Anniversary",
    "Customized",
    "Occasion",
    "Relationship",
    "Desserts",
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
    <main className="relative flex flex-col items-center w-full min-h-screen overflow-hidden  bg-[#fff3d3]">
      {/* Background Images */}
        <div className="absolute -translate-y-1/2 top-[60%] md:top-1/2 rotate-2 left-[-8%] w-[80%] sm:w-[60%] md:w-1/3">
          <ProgressiveImage
            src="/cake.png"
            placeholder="/placeholder-image1.png"
            alt="Cake illustration"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="absolute -translate-y-1/2  top-[30%] md:top-1/2 right-[-15%] w-[80%] sm:w-[60%] md:w-1/3">
          <ProgressiveImage
            src="/cake3.png"
            placeholder="/placeholder-image2.png"
            alt="Decorated cake"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 w-full max-w-5xl  md:pt-32 text-center ">
        <h1 className={`text-3xl font-bold text-red-600 md:text-4xl ${fonts.className}`}>Freshly Baked, Always Loved.</h1>
        <p className="pt-2 text-base font-bold text-gray-700 sm:pt-3 md:text-xl">
          Order Your Favorite Cake Today!
        </p>

        {/* Search & Location */}
        <div className="flex flex-col items-center gap-3 px-4 pt-4 mx-auto sm:flex-row sm:gap-4 sm:pt-6 w-full max-w-3xl">
          <Dialog>
            <DialogTrigger className="flex items-center justify-center gap-2 px-3 py-2 font-semibold text-white bg-orange-500 rounded-lg shadow-md sm:py-3 md:px-3 hover:bg-orange-600 w-full sm:w-1/2 md:w-1/3">
              <FaLocationDot size={20} /> Choose Location
            </DialogTrigger>
            <DialogContent className="p-4 overflow-y-auto rounded-lg shadow-xl sm:p-6 max-w-2xl max-h-[90vh]">
              <DialogHeader className="text-center">
                <DialogTitle className="text-xl font-bold sm:text-2xl">Select Your City</DialogTitle>
                <div className="mt-3 text-center">
                  <p className="mb-4 text-sm font-medium text-gray-700">
                    Enjoy 2-Hour Cake Delivery 🚀
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">Popular Cities</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                    {cities.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        aria-label={`Order cakes in ${item.name}`}
                        className="flex flex-col items-center p-2 transition bg-gray-100 rounded-lg shadow-md sm:p-3 hover:shadow-lg hover:scale-105"
                      >
                        <Image
                          className="object-cover w-14 h-14 rounded-md sm:w-[70px] sm:h-[70px]"
                          width={70}
                          height={70}
                          src={item.image}
                          alt={`${item.name} city`}
                        />
                        <span className="mt-1 text-sm font-medium sm:mt-2">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold sm:mt-5">Other Cities</h3>
                  <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {otherCities.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="p-1 text-sm font-medium text-gray-700 transition hover:text-orange-500"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="flex items-center w-full h px-3 py-2 bg-white rounded-lg sm:mt-0 sm:w-2/3">
            <CiSearch size={20} className="text-gray-500" />
            <input
              type="text"
              className="w-full px-2 py-1 text-sm focus:outline-none md:px-3 sm:text-base"
              placeholder="Search for cakes, flavors & more"
              aria-label="Search cakes"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 px-4 py-4 sm:py-6 md:gap-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/"
              className="px-3 py-1.5 text-xs font-semibold border-2 rounded-full w-28 sm:text-sm bg-cyan-50 hover:bg-red-600 hover:text-white"
              aria-label={`Explore ${category} cakes`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full sm:max-w-full md:max-w-6xl lg:max-w-full ">
          <CategoryCards
            title="Cakes"
            subTitle="Sweet Delights"
            offer="20"
            link="/"
            image="/cake5.png"
            placeholderImg={"/placeholder-image3.png"}
          />
          <CategoryCards
            title="Desserts"
            subTitle="Dessert Dreams"
            offer="5"
            link="/"
            image="/cake6.png"
            placeholderImg={"/placeholder-image4.png"}
          />
          <CategoryCards
            title="Gifts"
            subTitle="Perfect Surprises"
            offer="15"
            link="/"
            image="/cake7.png"
            placeholderImg={"/placeholder-image5.png"}
          />
          <CategoryCards
            title="More"
            subTitle="Extra Treats"
            offer="16"
            link="/"
            image="/cake8.png"
            placeholderImg={"/placeholder-image6.png"}

          />
        </div>
      </div>
    </main>
  );
}
