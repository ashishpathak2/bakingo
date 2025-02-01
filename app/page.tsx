"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import { fonts } from "@/components/Fonts";
import Image from 'next/image'
import { useState } from "react";
import Link from "next/link";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";




export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${fonts.className} `}>
      <Header handleMenu={handleMenu} showMenu={showMenu} />
      <Hero />
     
        <div className={` easy-in duration-500 transition-color flex flex-col absolute gap-6 px-9 pt-12 bg-white h-full w-full ${showMenu ? "translate-x-0" : "-translate-x-full" }`}>
        <div className="flex justify-between">
          <span className="text-bold text-lg">Menu</span>
          <button className="lg:hidden" onClick={() => { handleMenu() }}><IoCloseOutline size={26}/></button>
         </div>
        <div className="flex flex-col gap-5">
        <Link
              className="flex gap-1 bg-red-600 text-white font-semibold border p-2 rounded-xl "
              href={"/login"}
            >
              <CiUser size={24} />
              <span>Login/Signup</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-base md:text-lg font-semibold text-nowrap"
              href={"/order"}
            >
              <FaRoute />
              Track Order
            </Link>
            <Link
              className="flex items-center gap-2 text-base md:text-lg font-semibold"
              href={"/link"}
            >
              <BsCart4 />
              Cart
            </Link>
            
          </div>
        </div>
   

      <div className=" w-dvh h-dvh ">
        <Image
          className="w-full h-full hidden md:block"
          width={2000}
          height={2000}
          src="/desktop.jpg"
          alt=""
        />
        <Image
          className="w-full h-full md:hidden"
          width={500}
          height={500}
          src="/mobile.jpg"
          alt=""
        />
      </div>

      <Categories />
      <BestSeller/>
    </div>
  );
}
