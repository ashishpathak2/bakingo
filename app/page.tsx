"use client";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import { fonts } from "@/components/Fonts";
import { useState } from "react";
import Link from "next/link";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${fonts.className } overflow-hidden `}>
      <Header handleMenu={handleMenu} />
      <Hero />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 flex flex-col gap-6 px-9 pt-12 bg-white h-screen w-screen z-50 ease-in-out duration-500 transition-transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Menu</span>
          <button className="lg:hidden" onClick={handleMenu}>
            <IoCloseOutline size={26} />
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <Link
            className="flex items-center gap-2 text-base md:text-lg font-semibold whitespace-nowrap"
            href="/order"
          >
            <FaRoute />
            Track Order
          </Link>
          <Link
            className="flex items-center gap-2 text-base md:text-lg font-semibold whitespace-nowrap"
            href="/cart"
          >
            <BsCart4 />
            Cart
          </Link>
        </div>
      </div>

      {/* Responsive Image Section */}
      <div className="w-screen h-screen">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/desktop.jpg" />
          <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="/tablet.avif" />
          <img className="w-full h-full object-cover" src="/mobile.jpg" alt="Background" loading="lazy" />
        </picture>
      </div>

      <Categories />
      <BestSeller />
    </div>
  );
}
