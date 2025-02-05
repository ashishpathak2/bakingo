import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({ title, subTitle, offer, link, image }) => {
  return (
    <div className="bg-white rounded-[2.8rem] p-5 pt-8 overflow-hidden shadow-md 
      w-full max-w-xs md:max-w-sm lg:max-w-[360px] h-72 flex flex-col gap-3 
      transition-all ease-in-out duration-300 hover:scale-105 relative">

      {/* Text Content */}
      <div className="flex flex-col gap-1 z-10">
        <p className="text-gray-700 text-2xl font-extrabold md:text-3xl">{title}</p>
        <p className="text-gray-400 font-semibold md:text-lg">
          {subTitle.toUpperCase()}
        </p>
      </div>

      {/* Offer Badge */}
      <p className="text-orange-600 inline-block rounded-2xl bg-orange-100/50 
        px-4 py-2 font-semibold z-10 md:text-lg">
        UPTO {offer}% OFF
      </p>

      {/* Image and Button Container */}
      <div className="relative flex-1 w-full mt-4">
        {/* Button aligned with image */}
        <Link href={link} className="absolute bottom-4 left-4 z-20
          rounded-full p-3 w-12 h-12 flex justify-center items-center 
          bg-orange-400 hover:bg-orange-500 transition-colors
          md:w-14 md:h-14">
          <ArrowRight size={25} className="text-white" />
        </Link>
      </div>

      <div className="absolute -bottom-5 -right-10 w-[70%] h-[85%] 
          overflow-hidden flex justify-end items-end">
          <Image
            src={image}
            alt="Category image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom "
            priority
          />
        </div>
    </div>
  );
};

export default CategoryCard;