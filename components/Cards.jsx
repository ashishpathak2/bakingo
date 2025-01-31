import { FaIndianRupeeSign } from "react-icons/fa6";
import { fonts } from "@/components/Fonts";
import { FaStar } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import Link from "next/link";
import { Egg } from 'lucide-react';
import { EggOff } from 'lucide-react';




export default function Cards({
  key,
  image,
  name,
  offerPrice,
  price,
  discount,
  ratings,
  reviews,
  isEggless
}) {
  return (
    <Link key={key} href="" className="">
      <div
        className={`${fonts.className} hover:scale-105  transition-all ease-in-out duration-300 border border-opacity-40 border-yellow-600 w-48 md:w-64 rounded-b-2xl rounded-t-2xl overflow-hidden`}
      >
        <div className="">
          <img src={image} className="hover:scale-105 transition-all ease-in-out duration-500"  alt="" />{" "}
        </div>
        <div className="flex flex-col mt-2 gap-1 py-2 px-3">
          <p className="font-semibold truncate ">{name}</p>
          <div className="flex gap-3 items-center ">
            <div className="flex items-center gap-1">
              <FaIndianRupeeSign size={16} />{" "}
              <span className="font-semibold text-lg md:text-xl">{offerPrice}</span>
            </div>
            <div className="flex items-center">
              {" "}
              <FaIndianRupeeSign size={10} />{" "}
              <span className="font-semibold text-xs md:text-sm text-black/80 line-through">
                {" "}
                {price}{" "}
              </span>
            </div>
            <span className="font-semibold text-xs md:text-sm text-orange-600">
              {discount}% OFF
            </span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 pb-1">
              <span className="text-sm font-semibold">{ratings}</span>
              <FaStar className="text-yellow-600" size={12} />
            </div>
            <span className={`flex md:gap-1 items-center text-xs font-bold ${isEggless ? "bg-red-700" : "bg-green-700"  } rounded-full md:px-2 md:py-1 p-1 text-white/90`}>
                {isEggless ? "Egg" : "Eggless"}
                {isEggless ? <Egg size={15} fill="white" color="white"/> : <EggOff size={15} fill="white" color="white"/>  }
                </span>
          </div>
        </div>
      </div>
    </Link>
  );
}


