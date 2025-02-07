import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({ title, subTitle, offer, link, image }) => {
  return (
    <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-3 sm:p-4 md:p-5 md:pt-6 lg:pt-8 
      overflow-hidden shadow-md w-full  h-[150px] sm:h-[180px] md:h-[210px] lg:h-[290px] 
      flex flex-col gap-1 sm:gap-2 transition-all ease-in-out duration-300 
      hover:scale-[1.02] relative group">

      {/* Text Content - Responsive typography */}
      <div className="flex flex-col gap-0.5 sm:gap-1 z-10">
        <p className="text-gray-700 text-lg sm:text-base md:text-xl lg:text-3xl font-extrabold 
          tracking-tight leading-tight">
          {title}
        </p>
        <p className="text-gray-400 text-xs md:text-sm lg:text-lg font-semibold">
          {subTitle.toUpperCase()}
        </p>
      </div>

      {/* Offer Badge - Responsive sizing */}
      <p className="text-orange-600 inline-block rounded-xl sm:rounded-2xl 
        bg-orange-100/50 px-2 sm:px-1 sm:w-4/5 sm:mx-auto md:px-2 py-2 sm:py-1  
        text-[0.68rem] md:text-xs lg:text-lg font-semibold z-10">
        UPTO {offer}% OFF
      </p>

      {/* Image and Button Container */}
      <div className="flex">
        {/* Button - Responsive sizing and positioning */}
        <Link 
          href={link} 
          className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 z-20
            rounded-full p-2 sm:p-2.5 md:p-3 w-9 h-9 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 
            flex justify-center items-center bg-orange-400 hover:bg-orange-500 
            transition-all duration-300 group-hover:scale-110"
        >
          <ArrowRight 
            className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" 
          />
        </Link>

        {/* Image Container - Increased size and improved positioning */}
        <div className="absolute -bottom-3 sm:-bottom-2 md:-bottom-10 -right-5 sm:-right-4 md:-right-12 
           w-[75%] h-[85%] xs:w-[50%] xs:h-[50%] sm:w-[60%] md:w-[85%]  sm:h-[80%] md:h-[75%] lg:h-[95%] overflow-hidden 
          flex justify-end items-end">
          <Image
            src={image}
            alt={`${title} category`}
            fill
            // sizes="(max-width: 640px) 75vw, 
            //        (max-width: 768px) 50vw, 
            //        (max-width: 1024px) 75vw, 
            //        33vw"
            className="object-contain object-bottom transform 
              group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;