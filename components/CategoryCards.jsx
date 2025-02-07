import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProgressiveImage from "@/components/ProgressiveImage";

const CategoryCard = ({ title, subTitle, offer, link, image, placeholderImg }) => {
  return (
    <div
      className="bg-white rounded-2xl sm:rounded-[2.5rem] p-3 sm:p-4 md:p-5 lg:p-6 
      overflow-hidden shadow-md w-full min-h-[150px] sm:min-h-[180px] md:min-h-[190px] lg:min-h-[290px] 
      grid grid-rows-[auto_1fr] gap-1 sm:gap-2 transition-all ease-in-out duration-300 
      hover:scale-[1.02] relative group"
    >
      {/* Text Content */}
      <div className="flex flex-col gap-0.5 sm:gap-1 z-10">
        <p
          className="text-gray-700 font-extrabold tracking-wider 
          text-[clamp(0.875rem,2vw,1.75rem)] leading-tight"
        >
          {title}
        </p>
        <p
          className="text-gray-400 font-semibold uppercase 
          text-[clamp(0.65rem,1.5vw,1.1rem)] leading-tight"
        >
          {subTitle}
        </p>
      </div>

      {/* Image and Button Container */}
      <div className="relative h-full">
        {/* Image Container */}
        <div className="h-full w-full flex justify-center items-center">
          <ProgressiveImage
            src={image}
            placeholder={placeholderImg}
            alt={`${title} category`}
            containerClassName="h-full w-full"
            imageClassName="object-contain w-full h-full 
              transform transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {/* Link Button */}
        <Link
          href={link}
          className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-20
            rounded-full p-1.5 sm:p-2 md:p-2.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
            flex justify-center items-center bg-orange-400 hover:bg-orange-500 
            transition-all duration-300 group-hover:scale-110"
        >
          <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
