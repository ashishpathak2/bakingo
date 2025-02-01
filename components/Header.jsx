"use client";
import React, { useState } from "react";
import { AtSign, LockKeyhole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
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
        <div className="flex-shrink-0">
          <Link href="/" className="inline-block" aria-label="Bakingo - Home">
            <img
              src="https://bkmedia.bakingo.com/ssr-static/bakingo.svg"
              alt="Bakingo logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        <div className="text-black items-center hidden lg:flex gap-2 md:gap-10">
          <Link
            href="/order"
            className="flex items-center gap-2 text-base md:text-lg font-semibold text-nowrap hover:text-red-600 transition-colors"
            aria-label="Track your order"
          >
            <FaRoute aria-hidden="true" />
            <span>Track Order</span>
          </Link>

          <Link
            href="/link"
            className="flex items-center gap-2 text-base md:text-lg font-semibold hover:text-red-600 transition-colors"
            aria-label="View cart"
          >
            <BsCart4 aria-hidden="true" />
            <span>Cart</span>
          </Link>

          <Dialog>
      <DialogTrigger
        className="flex items-center gap-2 text-base md:text-lg bg-red-600 hover:bg-transparent hover:text-black transition-all duration-200 text-white font-semibold border p-2 md:px-4 md:py-3 rounded-full border-slate-700"
        aria-label={isLogin ? "Open login dialog" : "Open signup dialog"}
      >
        <CiUser size={24} aria-hidden="true" />
        <span>Login/Signup</span>
      </DialogTrigger>

      <DialogContent className="md:max-w-md h-[60vh]   flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {isLogin ? "Login" : "Sign Up"}
          </DialogTitle>
          <DialogDescription>
            <div className="relative flex flex-col ">
              {/* Form Container */}
              <div className="w-full absolute bg-cyan-50/50 p-6 sm:p-8 md:p-10">
                <div className="text-center flex flex-col gap-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-black">
                    {isLogin ? "Welcome back" : "Create account"}
                  </h2>
                  <div className="font-medium text-slate-800 text-sm tracking-wide">
                    {isLogin ? "Please enter your details" : "Signup to get started"}
                  </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="text-sm font-semibold">
                        Email:
                      </label>
                      <div className="flex items-center gap-2 p-2 border border-black rounded-lg">
                        <AtSign color="black" size={20} aria-hidden="true" />
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full placeholder:text-sm placeholder:font-semibold focus:outline-none bg-transparent"
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="password" className="text-sm font-semibold">
                        Password:
                      </label>
                      <div className="flex items-center gap-2 p-2 border border-black rounded-lg">
                        <LockKeyhole color="black" size={20} aria-hidden="true" />
                        <input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="w-full placeholder:text-sm placeholder:font-semibold focus:outline-none bg-transparent"
                          required
                          autoComplete={isLogin ? "current-password" : "new-password"}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full p-2 mt-6 text-lg sm:text-xl font-bold transition-all duration-300 hover:bg-red-700 hover:text-white tracking-widest border border-black rounded-lg"
                      aria-label={isLogin ? "Sign in to your account" : "Create new account"}
                    >
                      {isLogin ? "Sign in" : "Sign up"}
                    </button>

                    <div className="flex gap-1 justify-center items-center font-semibold text-sm sm:text-base">
                      <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                      <button
                        type="button"
                        onClick={handleFormType}
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                      >
                        {isLogin ? "Sign up" : "Sign in"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Image Container */}
              <div className="w-full rounded-xl">
                <Image
                  src="/loginpage.jpg"
                  alt="Login image"
                  width={1000}
                  height={1000}
                  className="w-full object-fill"
                  priority
                  role="presentation"
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={handleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded="false"
        >
          <CiMenuBurger size={26} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
