"use client";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import { fonts } from "@/components/Fonts";
import { useState } from "react";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <div className={`${fonts.className} overflow-hidden`}>
      <Header onMenuToggle={toggleMenu} />

      <Hero />
      <Categories />
      <BestSeller />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 flex flex-col gap-6 px-9 pt-12 bg-white h-screen w-screen z-50 transform transition-transform duration-500 ease-in-out ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={toggleMenu}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <IoCloseOutline size={26} />
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <Link
            href="/order"
            className="flex items-center gap-2 text-base md:text-lg font-semibold whitespace-nowrap"
          >
            <FaRoute />
            Track Order
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 text-base md:text-lg font-semibold whitespace-nowrap"
          >
            <BsCart4 />
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
