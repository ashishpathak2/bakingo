import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProgressiveImage from "@/components/ProgressiveImage";

const CategoryCard = ({ title, subTitle, offer, link, image, placeholderImg }) => {
  return (
    <Link href={link}>
      <div
        className="bg-white rounded-2xl sm:rounded-[2.5rem] p-3 sm:p-4 md:p-5 lg:p-6
        overflow-hidden shadow-lg w-full min-h-[150px] sm:min-h-[180px] md:min-h-[190px] lg:min-h-[290px]
        grid grid-rows-[auto_1fr] gap-1 sm:gap-2 transition-all ease-in-out duration-300
        hover:scale-[1.03] hover:shadow-lg relative group "
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
              imageClassName="object-contain w-full h-full rounded-lg
                transform transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Link Button */}
          <Link
            href={link}
            className="absolute bottom-4 right-4 z-20
              rounded-full p-2 sm:p-2.5 md:p-3 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
              flex justify-center items-center bg-orange-400 hover:bg-orange-500
              transition-all duration-300 group-hover:scale-110 shadow-md"
          >
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
