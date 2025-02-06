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
      className={`fixed top-0 left-0 w-full flex justify-center transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-[#fff3d3]"
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
            <DialogTrigger className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-2 rounded-full transition-all duration-300 shadow-md">
              <CiUser className="w-6 h-6" />
              <span>Login / Signup</span>
            </DialogTrigger>

            <DialogContent className="p-0 overflow-hidden max-w-xl mx-auto rounded-lg shadow-xl">
              <DialogHeader>
                <DialogDescription>
                  <div className="relative flex items-center justify-center w-full p-8 bg-cyan-50/75">
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30">
                      <Image src="/loginpage.jpg" alt="Login" layout="fill" objectFit="cover" />
                    </div>
                    <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-80 rounded-xl shadow-lg">
                      <h2 className="text-3xl font-bold text-black text-center">
                        {isLogin ? "Welcome Back" : "Create Account"}
                      </h2>
                      <p className="text-center text-sm text-gray-700 mt-3">Sign in to continue enjoying our services</p>
                      <form className="mt-5">
                        <div className="flex items-center gap-3 p-3 border rounded-lg shadow-sm">
                          <Phone className="text-gray-600" size={22} />
                          <input
                            type="text"
                            placeholder="Enter Mobile No"
                            className="w-full text-gray-800 placeholder-gray-500 text-sm focus:outline-none bg-transparent"
                            required
                          />
                        </div>
                        <button type="submit" className="w-full p-3 mt-6 font-semibold bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 transition">
                          Send OTP
                        </button>
                      </form>
                      <div className="mt-6 text-center text-sm text-gray-700">Or login with</div>
                      <div className="flex justify-center gap-4 mt-4">
                        <button className="flex items-center gap-2 text-black hover:bg-gray-700/25 bg-white font-medium px-4 py-[5px] rounded-lg shadow transition">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                          </svg>
                          Google
                        </button>
                        <button className="flex items-center gap-2 text-black  hover:bg-gray-700/25 bg-white font-medium px-4 py-[5px] rounded-lg shadow transition">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <linearGradient id="6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1" x1="15.072" x2="24.111" y1="13.624" y2="24.129" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e3e3e3"></stop><stop offset="1" stop-color="#e2e2e2"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1)" d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2" x1="26.453" x2="36.17" y1="25.441" y2="37.643" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5"></stop><stop offset=".03" stop-color="#eee"></stop><stop offset="1" stop-color="#eee"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2)" d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3" x1="3" x2="45" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d74a39"></stop><stop offset="1" stop-color="#c73d28"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3)" d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8	H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4" x1="24" x2="24" y1="8" y2="38.181" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".15"></stop><stop offset="1" stop-opacity=".03"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4)" d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5" x1="3" x2="45" y1="17.73" y2="17.73" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5"></stop><stop offset="1" stop-color="#f5f5f5"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5)" d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278	C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6" x1="24" x2="24" y1="8.446" y2="27.811" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e05141"></stop><stop offset="1" stop-color="#de4735"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6)" d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278	c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z"></path>
                          </svg>
                          Email
                        </button>
                        <button className="flex items-center gap-2 text-black hover:bg-gray-700/25 bg-white font-medium px-4 py-[5px] rounded-lg shadow transition">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                          </svg>
                          WhatsApp
                        </button>
                        
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
