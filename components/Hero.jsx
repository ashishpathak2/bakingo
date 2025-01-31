import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { fonts } from "@/components/Fonts";
import Link from "next/link";

export default function Hero({}) {
  const categories = [
    {categoryName: "Birthday"},
    {categoryName: "Anniversary"},
    {categoryName: "Customized"},
    {categoryName: "Occasion"},
    {categoryName: "Relationship"},
    {categoryName: "Desserts"},
  ];

  return (
    <main className="absolute w-full flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1
        className={`text-5xl text-center pt-12 md:pt-0 pb-12 font-bold  ${fonts.className} text-red-600`}
      >
        Freshly baked, always loved.
      </h1>

      <div className="flex flex-col gap-2 w-full max-w-5xl">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-normal gap-8  px-5">
          <div className="flex px-4 py-2  bg-orange-200 rounded-2xl items-center w-full md:w-1/2">
            <FaLocationDot size={22} />
            <select
              defaultValue="option1"
              className="w-full bg-orange-200  p-2 rounded-lg focus:outline-none "
            >
              <option value="option1">Enter your delivery location</option>
            </select>
          </div>
          <div className="flex px-4 py-2 bg-white rounded-2xl w-full items-center">
            <CiSearch size={28} className="" />
            <input
              type="text"
              className="w-full p-2 ml-2 rounded-lg focus:outline-none"
              placeholder="Search for cakes, flavours and more"
            />
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-3 font-bold  text-xl mt-20 text-center items-center justify-center">
          {categories.map((item, index) => {
            return (
              <Link
                key={index}
                href=""
                className={`md:w-52 w-44 border-2 bg-cyan-50/60 p-3 rounded-full transition ease-in-out duration-300  hover:bg-transparent hover:border-black`}
              >
                {item.categoryName}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
