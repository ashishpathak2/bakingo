"use client";
import React, { useState } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { CiUser } from "react-icons/ci";
// import { IoCloseOutline } from "react-icons/io5";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header({ handleMenu }) {
  const [isLogin, setIsLogin] = useState(false);
  const handleFormType = () => setIsLogin(!isLogin);

  return (
    <header className="w-full md:w-3/4 relative -mb-20 px-4 pt-8 md:pt-12 h-20 mx-auto">
      <nav
        className="flex items-center justify-between h-full"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center  md:gap-4">
          <button
            type="button"
            className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={handleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded="false"
          >
            <CiMenuBurger size={30} aria-hidden="true" />
          </button>

          <div className="flex-shrink-0">
            <Link href="/" className="inline-block" aria-label="Bakingo - Home">
              <img
                src="https://bkmedia.bakingo.com/ssr-static/bakingo.svg"
                alt="Bakingo logo"
                className="w-26 md:w-auto"
              />
            </Link>
          </div>
        </div>

        <div className="text-black flex items-center gap-4 md:gap-10">
          <Link
            href="/order"
            className="hidden lg:flex items-center gap-2 text-base md:text-lg font-semibold text-nowrap hover:text-red-600 transition-colors"
            aria-label="Track your order"
          >
            <FaRoute aria-hidden="true" />
            <span>Track Order</span>
          </Link>

          <Link
            href="/link"
            className="hidden lg:flex items-center gap-2 text-base md:text-lg font-semibold hover:text-red-600 transition-colors"
            aria-label="View cart"
          >
            <BsCart4 aria-hidden="true" />
            <span>Cart</span>
          </Link>

          <Dialog>
            <DialogTrigger
              className="flex items-center gap-2 text-xs md:text-lg bg-red-600 hover:bg-transparent hover:text-black transition-all duration-200 text-white font-semibold md:border px-3 py-2 rounded-3xl md:px-4 md:py-3 md:rounded-full md:border-slate-700"
              aria-label={isLogin ? "Open login dialog" : "Open signup dialog"}
            >
              <CiUser className="w-5 h-5 md:w-7 md:h-7" aria-hidden="true" />
              <span>Login/Signup</span>
            </DialogTrigger>

            <DialogContent className="p-0 overflow-hidden max-w-3xl mx-auto">
              <DialogTitle className="hidden"></DialogTitle>
              <DialogHeader className="flex justify-center items-center">
                <DialogDescription className="relative w-full flex">
                  {/* Form Container with Background Image */}
                  <div className="relative flex items-center justify-center w-full p-6 bg-cyan-50/65">
                    {/* Background Image */}
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50 ">
                      <Image
                        src="/loginpage.jpg"
                        alt="Login image"
                        layout="fill"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        objectFit="cover"
                        priority
                        role="presentation"
                      />
                    </div>

                    {/* Form Content */}
                    <div className="relative z-10 w-full max-w-md p-6 flex flex-col gap-5 bg-white bg-opacity-60 rounded-lg shadow-md">
                      <div className="text-center flex flex-col gap-2">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-black">
                          {isLogin ? "Welcome back" : "Create account"}
                        </h2>
                        <div className="font-medium text-slate-800 text-sm tracking-wide">
                          Signup to get started
                        </div>
                      </div>

                      <div className="flex gap-4 items-center text-black justify-center">
                        <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                        <span className="font-bold text-nowrap">
                          Login or Register
                        </span>
                        <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                      </div>

                      <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <div className="flex items-center gap-2 p-2 border border-black rounded-lg">
                            <Phone color="black" size={20} aria-hidden="true" />
                            <input
                              id="email"
                              type="text"
                              placeholder="Enter Mobile No"
                              className="w-full placeholder:text-sm placeholder:font-semibold focus:outline-none bg-transparent"
                              required
                              autoComplete="email"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full p-2 mt-6 text-sm sm:text-lg font-semibold transition-all duration-300 bg-red-700 text-white tracking-widest rounded-lg hover:bg-red-800"
                            aria-label={
                              isLogin
                                ? "Sign in to your account"
                                : "Create new account"
                            }
                          >
                            Send OTP
                          </button>
                        </div>
                      </form>

                      <div className="flex gap-4 items-center text-black justify-center">
                        <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                        <span className="font-bold text-sm">or</span>
                        <div className="p-[0.05] w-1/2 bg-gray-700"></div>
                      </div>

                      <div className="flex w-full justify-around mt-4">
                        <Link
                          className="hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-300 bg-black p-2 rounded-xl"
                          href={"/"}
                        >
                          <FaGoogle size={25} fill="white" />
                        </Link>
                        <Link
                          className="hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-300  bg-black  p-2 rounded-xl"
                          href={"/"}
                        >
                          <IoLogoWhatsapp size={25} fill="white" />
                        </Link>
                        <Link
                          className="hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-300  bg-black  p-2 rounded-xl"
                          href={"/"}
                        >
                          <SiGmail size={25} fill="white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}
