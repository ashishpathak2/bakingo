import Link from "next/link";
import { FaRoute } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";


export default function Header({handleMenu ,showMenu }) {


    

  return (
      <nav className=" w-full md:w-3/4 flex relative -mb-20  px-4 pt-8 md:pt-12 h-20 items-center mx-auto justify-between ">
      <div className="">
        <Link href="/">
          <img
            className=""
            src="https://bkmedia.bakingo.com/ssr-static/bakingo.svg"
            alt=""
                  />
        
          </Link>
              
      </div>
          <div className=" text-black gap-2 md:gap-10 items-center hidden md:flex">
          <Link  className="flex items-center gap-2 text-base md:text-lg font-semibold text-nowrap" href={"/order"}> <FaRoute />
          Track Order </Link>
          <Link className="flex items-center gap-2 text-base md:text-lg font-semibold" href={"/link"}><BsCart4 />
          Cart </Link>
          <Link className="flex items-center gap-2 text-base md:text-lg  bg-red-600 hover:bg-transparent hover:text-black transition ease-in-out text-white font-semibold border p-2 md:px-4 md:py-3 rounded-full border-slate-700" href={"/login"}><CiUser size={24} />
          Login/Signup </Link>
          </div>

          <button className="md:hidden" onClick={() => { handleMenu() }}><CiMenuBurger size={26} /></button>

          

    </nav>
  );
}
