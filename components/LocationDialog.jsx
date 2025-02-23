import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6"
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const cities = [
    { image: "/delhi.webp", name: "Delhi" },
    { image: "/gurgaon.webp", name: "Gurgaon" },
    { image: "/noida.webp", name: "Noida" },
    { image: "/bangalore.webp", name: "Bangalore" },
    { image: "/hyderabad.webp", name: "Hyderabad" },
    { image: "/mumbai.webp", name: "Mumbai" },
];

const otherCities = [
    "Ghaziabad",
    "Kolkata",
    "Sunderabad",
    "Coimbatore",
    "Kanpur",
    "Jaipur",
    "Chennai",
    "Jalandhar",
    "Faridabad",
    "Patna",
    "Ranchi",
    "Ludhiana",
    "Lucknow",
    "Pune",
    "Dehradun",
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "Ahmedabad",
    "Surat",
    "Amritsar",
    "Bhopal",
    "Haridwar",
    "Noida",
    "Vijayawada",
    "Agra",
    "Panipat",
    "Karnal",
];


export const LocationDialog = () => {
    const [activeTab, setActiveTab] = useState("popular");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
  
    const filteredCities = otherCities.filter((city) =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center justify-center text-nowrap gap-2 px-4 py-2 font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-md hover:scale-105 transition-all ease-in-out duration-300">
            <FaLocationDot size={20} /> Choose Location
          </button>
        </DialogTrigger>
        <DialogContent className="p-0 sm:max-w-[500px] md:max-w-[600px] max-h-[90vh] overflow-hidden rounded-xl"> {/* Adjusted max-w and max-h */}
          <div className="p-4 bg-gradient-to-r from-orange-400 to-orange-600"> {/* Reduced padding */}
            <h2 className="text-2xl font-bold text-white text-center">
              Select Your City
            </h2>
            <p className="mt-2 text-sm font-medium text-white text-center">
              Enjoy 2-Hour Cake Delivery 🚀
            </p>
          </div>
  
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "popular"
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-gray-500 hover:text-orange-600"
              }`}
              onClick={() => setActiveTab("popular")}
            >
              Popular Cities
            </button>
            <button
              className={`flex-1 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "all"
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-gray-500 hover:text-orange-600"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Cities
            </button>
          </div>
  
          <div className="p-4 overflow-y-auto max-h-[45vh] sm:max-h-[50vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"> {/* Adjusted max-h */}
            {activeTab === "popular" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <button
                    key={city.name}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      selectedCity === city.name
                        ? "ring-2 ring-orange-500 bg-orange-50"
                        : "bg-white hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedCity(city.name)}
                  >
                    <Image
                      className="w-16 h-16 rounded-full object-cover mb-2"
                      width={64}
                      height={64}
                      src={city.image || "/placeholder.svg"}
                      alt={`${city.name} city`}
                    />
                    <span className="text-sm font-medium">{city.name}</span>
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div className="mb-4 relative">
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {filteredCities.map((city) => (
                    <button
                      key={city}
                      className={`py-2 px-4 text-sm font-medium rounded-md transition-colors duration-300 ${
                        selectedCity === city
                          ? "bg-orange-100 text-orange-600"
                          : "bg-white hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedCity(city)}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
  
          <div className="p-4 bg-gray-50 flex justify-end">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                selectedCity
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedCity}
            >
              Confirm Selection
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };