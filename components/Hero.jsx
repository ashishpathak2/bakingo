"use client";
import Link from "next/link";
import CategoryCards from "@/components/CategoryCards";
import ProgressiveImage from "@/components/ProgressiveImage";
import { SearchInput } from "@/components/SearchInput";
import { LocationDialog } from "@/components/LocationDialog";

const categories = [
  "Birthday",
  "Anniversary",
  "Customized",
  "Occasion",
  "Relationship",
  "Desserts",
];

export default function Hero() {
  return (
    <main className="select-none relative flex flex-col items-center w-full min-h-screen overflow-hidden bg-[#fff3d3] pt-[80px] md:pt-[100px]">
      {/* Background Images - Improved Responsiveness and Positioning */}
      <div className="absolute inset-0 h-full w-full overflow-hidden"> {/* Container for background images */}
        <div className="absolute top-1/4 left-0 w-1/2 md:w-1/3 h-auto transform -rotate-6 transition-transform duration-500 hover:rotate-0 opacity-60 md:opacity-80">
          {/* <ProgressiveImage
            src="/cake.png"
            placeholder="/placeholder-image1.png"
            alt="Cake illustration"
            width={500}
            height={500}
            className="w-full h-auto object-contain md:object-cover filter drop-shadow-xl" // object-contain for smaller screens, object-cover for larger
          /> */}
          <ProgressiveImage
            src="/cake.png"
            placeholder="/placeholder-image1.png"
            alt="My Image"
            width={500} // Set the desired width (or leave it undefined for natural width)
            height={300} // Set the desired height (or leave it undefined for natural height)
            containerClassName="my-image-container" // Add any custom container classes
            imageClassName="rounded-lg" // Add any custom image classes
            objectFit="contain" // Override default objectFit if needed
            objectPosition="top center" // Override default objectPosition if needed
            priority // Add priority prop if needed
          />
        </div>
        <div className="absolute top-1/2 -translate-y-2/3 right-0 w-1/2 md:w-1/3 h-auto transform rotate-6 transition-transform duration-500 hover:rotate-0 opacity-60 md:opacity-80">
          {/* <ProgressiveImage
            src="/cake3.png"
            placeholder="/placeholder-image2.png"
            alt="Decorated cake"
            width={500}
            height={500}
            className="w-full h-auto object-contain md:object-cover filter drop-shadow-xl" // object-contain for smaller screens, object-cover for larger
          /> */}
          <ProgressiveImage
            src="/cake3.png"
            placeholder="/placeholder-image2.png"
            alt="My Image"
            width={500} // Set the desired width (or leave it undefined for natural width)
            height={300} // Set the desired height (or leave it undefined for natural height)
            containerClassName="my-image-container" // Add any custom container classes
            imageClassName="rounded-lg hidden md:block" // Add any custom image classes
            objectFit="contain" // Override default objectFit if needed
            objectPosition="top center" // Override default objectPosition if needed
            priority // Add priority prop if needed
          />
        </div>
      </div>


      {/* Main Content - Improved Responsiveness and Alignment */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-red-500/80 to-red-700 tracking-tight ">
            Freshly Baked, Always Loved.
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 max-w-2xl mx-auto">
            Order Your Favorite Cake Today!
          </p>
        </div>

        {/* Search & Location - Improved Layout */}
        <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 px-4 mb-8"> {/* Flex column on small screens, row on larger */}
          <LocationDialog className="w-full sm:w-auto" /> {/* Add className for width control */}
          <SearchInput className="w-full sm:w-auto" /> {/* Add className for width control */}
        </div>

        {/* Categories - Improved Styling and Responsiveness */}
        <div className="flex flex-wrap justify-center gap-3 px-4 mb-8 md:mb-12">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/"
              className="px-4 py-2 text-sm text-center font-semibold border-2 rounded-full min-w-[120px] bg-white/80 backdrop-blur-sm text-gray-800 transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg active:scale-95"
              aria-label={`Explore ${category} cakes`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Category Cards - Improved Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl px-4 "> 
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