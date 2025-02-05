"use client";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiMenuBurger, CiUser } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header({ onMenuToggle }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-center transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#fff3d3]"
      } z-50 p-3 md:px-6 md:py-4`}
    >
      <nav className="flex items-center w-full lg:w-5/6 justify-between h-full">
        <div className="flex items-center md:gap-4">
          <button
            type="button"
            className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onMenuToggle}
            aria-label="Toggle navigation menu"
          >
            <CiMenuBurger size={30} />
          </button>
          <Link href="/">
            <Image src="/bakingo.svg" alt="Bakingo logo" width={100} height={100} />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-10">
          <Link href="/order" className="hidden lg:flex items-center gap-2 font-semibold hover:text-red-600">
            <FaRoute />
            <span>Track Order</span>
          </Link>

          <Link href="/cart" className="hidden lg:flex items-center gap-2 font-semibold hover:text-red-600">
            <BsCart4 />
            <span>Cart</span>
          </Link>

          <Dialog>
            <DialogTrigger className="flex items-center gap-2 bg-red-600 hover:bg-transparent hover:text-black text-white font-semibold px-3 py-2 rounded-3xl transition-all duration-200">
              <CiUser className="w-5 h-5" />
              <span>Login/Signup</span>
            </DialogTrigger>

            <DialogContent className="p-0 overflow-hidden max-w-3xl mx-auto">
              <DialogHeader>
                <DialogDescription>
                  <div className="relative flex items-center justify-center w-full p-6 bg-cyan-50/65">
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50">
                      <Image src="/loginpage.jpg" alt="Login" layout="fill" objectFit="cover" />
                    </div>
                    <div className="relative z-10 w-full max-w-md p-6 bg-white bg-opacity-60 rounded-lg shadow-md">
                      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
                        {isLogin ? "Welcome back" : "Create account"}
                      </h2>
                      <form>
                        <div className="flex items-center gap-2 p-2 border rounded-lg">
                          <Phone size={20} />
                          <input
                            type="text"
                            placeholder="Enter Mobile No"
                            className="w-full placeholder:text-sm focus:outline-none bg-transparent"
                            required
                          />
                        </div>
                        <button type="submit" className="w-full p-2 mt-6 font-semibold bg-red-700 text-white rounded-lg hover:bg-red-800">
                          Send OTP
                        </button>
                      </form>
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
