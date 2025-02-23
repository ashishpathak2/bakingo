"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { AuthForm } from "@/components/AuthForm";
import { userLogout } from "@/actions/signOutAction";
import { IoCloseOutline } from "react-icons/io5";

export default function Header({ user }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full flex justify-center items-center h-16 md:h-20 transition-colors duration-300 z-50 px-4 sm:px-6 lg:px-12 ${isScrolled ? "bg-white shadow-md" : "bg-[#fff3d3]"
          }`}
      >
        <nav className="flex items-center justify-between w-full lg:w-5/6">
          {/* LEFT - LOGO & MENU BUTTON */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setShowMenu(true)}
              aria-label="Open menu"
            >
              <CiMenuBurger size={28} />
            </button>

            <Link href="/" className="flex items-center">
              <Image src="/bakingo.svg" alt="Bakingo logo" width={100} height={40} priority />
            </Link>
          </div>

          {/* RIGHT - NAV LINKS & AUTH */}
          <div className="flex gap-6">
            <div className="hidden lg:flex gap-6">
              <Link href="/order" className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-semibold transition">
                <FaRoute />
                <span>Track Order</span>
              </Link>
              <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-semibold transition">
                <BsCart4 />
                <span>Cart</span>
              </Link>
            </div>

            {user?.name ? (
              <form action={userLogout}>
                <button type="submit" className="text-gray-700 font-semibold hover:text-red-600 transition">
                  {user.name}
                </button>
              </form>
            ) : (
              <AuthForm className="transition-colors" />
            )}
          </div>


        </nav>
      </header>



      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setShowMenu(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-screen w-72 max-w-xs bg-white p-6 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* MOBILE MENU HEADER */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setShowMenu(false)} aria-label="Close menu">
            <IoCloseOutline size={28} />
          </button>
        </div>

        {/* MOBILE MENU LINKS */}
        <div className="flex flex-col gap-5 text-gray-700">
          <Link href="/order" className="flex items-center gap-2 text-base font-semibold">
            <FaRoute />
            Track Order
          </Link>
          <Link href="/cart" className="flex items-center gap-2 text-base font-semibold">
            <BsCart4 />
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
