import { fonts } from "@/components/Fonts";

export default function Categories() {
  const allCategories = [
    {
      image: "https://bkmedia.bakingo.com/theme_cake_9.jpg?tr=w-484,q-70",
      name: "Regular Cakes",
    },
    {
      image: "https://bkmedia.bakingo.com/gourmet_cake_0.jpg?tr=w-484,q-70",
      name: "Gourmet Cakes",
    },
    {
      image: "https://bkmedia.bakingo.com/photo_cake_desktop.jpg?tr=w-484,q-70",
      name: "Photo Cakes",
    },
    {
      image: "https://bkmedia.bakingo.com/theme_cake_9.jpg?tr=w-484,q-70",
      name: "Theme Cakes",
    },
  ];

  return (
    <div className=" w-full md:w-5/6  m-auto py-5 ">
      <h4
        className={`pb-5 pt-5 md:pt-12 md:pb-6 text-center lg:text-start text-xl md:text-4xl font-semibold text-red-800  ${fonts.className} `}
      >
        Order Our Best Bakery Options
      </h4>
      <div className="flex flex-wrap justify-center  md:items-start gap-x-6 md:gap-x-0 md:justify-evenly ">
        {allCategories.map((item,index) => {
          return (
            <div key={index} className="text-center  w-40 md:w-64 flex flex-col md:gap-3 gap-2 md:py-5 py-3">
              <div className=" pt-1 pr-1 rounded-2xl bg-orange-200 rotate-6">
                <div className=" pt-1 pr-1  rounded-2xl bg-orange-300/90 -rotate-3">
              <img className="-rotate-3  rounded-2xl  transition-all ease-in-out duration-500 hover:scale-105 "  src={item.image} alt="" />
              </div>
              </div>
            <span className="font-medium text-xl "> {item.name} </span>
            </div>
          )
          
        })}
      </div>

      <div></div>
    </div>
  );
}
