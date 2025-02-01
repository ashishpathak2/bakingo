import { fonts } from "@/components/Fonts";
import Image from "next/image";

export default function Categories() {
  const allCategories = [
    {
      image: "/category1.webp",
      name: "Regular Cakes",
    },
    {
      image: "/category2.webp",
      name: "Gourmet Cakes",
    },
    {
      image: "/category3.webp",
      name: "Photo Cakes",
    },
    {
      image: "/category4.webp",
      name: "Theme Cakes",
    },
  ];

  return (
    <section className="w-full md:w-5/6 m-auto py-5">
      <h3
        className={`pb-3 pt-5 md:pt-12 md:pb-6 text-center lg:text-start text-xl md:text-4xl font-semibold text-red-800 ${fonts.className}`}
      >
        Order Our Best Bakery Options
      </h3>
      <div className="flex flex-wrap justify-center w-full gap-x-5 sm:gap-x-12 sm:justify-normal">
        {allCategories.map((item, index) => (
          <div
            key={index}
            className="text-center w-40 md:w-64 flex flex-col md:gap-3 gap-2 md:py-5 py-3"
          >
            <div className="pt-1 pr-1 rounded-2xl bg-orange-200 rotate-6">
              <div className="pt-1 pr-1 rounded-2xl bg-orange-300/90 -rotate-3">
                <Image
                  className="-rotate-3 rounded-2xl transition-all ease-in-out duration-500 hover:scale-105"
                  width={500}
                  height={500}
                  src={item.image}
                  alt={`Image of ${item.name}`}
                  loading="lazy"
                />
              </div>
            </div>
            <span className="font-semibold text-xl">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
