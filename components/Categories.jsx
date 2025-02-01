import { fonts } from "@/components/Fonts";
import Image from "next/image";

export default function Categories() {
  const allCategories = [
    { image: "/category1.webp", name: "Regular Cakes" },
    { image: "/category2.webp", name: "Gourmet Cakes" },
    { image: "/category3.webp", name: "Photo Cakes" },
    { image: "/category4.webp", name: "Theme Cakes" },
  ];

  return (
    <section className="w-full md:w-5/6 mx-auto py-5 px-4">
      <h3 className={`pb-3 pt-5 md:pt-12 md:pb-6 text-center lg:text-start text-xl md:text-4xl font-semibold text-red-800 ${fonts.className}`}>
        Order Our Best Bakery Options
      </h3>
      
      {/* Grid Layout for Better Responsiveness */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-x-8 sm:gap-y-6 justify-center w-full">
        {allCategories.map((item, index) => (
          <div key={index} className="text-center flex flex-col gap-2 md:gap-3 py-3 md:py-5 items-center">
            <div className="relative max-w-xs md:max-w-sm">
              <div className="rounded-2xl bg-orange-200 rotate-6">
                <div className="rounded-2xl bg-orange-300/90 -rotate-3 p-1">
                  <Image
                    className="-rotate-3 rounded-2xl transition-transform ease-in-out duration-500 hover:scale-105"
                    width={500}
                    height={500}
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <span className="font-semibold text-lg sm:text-xl truncate w-40 md:w-64">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
