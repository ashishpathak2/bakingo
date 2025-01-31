import { fonts } from "@/components/Fonts";
import Cards from "../components/Cards";
import Link from "next/link";



export default function BestSeller() {

    const products = [
        {
            image: "https://bkmedia.bakingo.com/choco-vanilla-cake0006chva-AAA.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Rich Chocolate Truffle Cake",
            offerPrice: "499",
            price: "599",
            discount: "9",
            ratings: "4.9",
            reviews: "50444",
            isEggless:true
        },
        {
            image: "https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Chocolate Vanilla Half & Half Cake",
            offerPrice: "699",
            price: "799",
            discount: "5",
            ratings: "5.0",
            reviews: "50444",
            isEggless:false
        },
        {
            image: "https://bkmedia.bakingo.com/fresh-fruit-cake0014frui-AAA.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Tropical Fruit n Almond Cake",
            offerPrice: "1499",
            price: "1699",
            discount: "7",
            ratings: "4.4",
            reviews: "50224",
            isEggless:true
        },
        {
            image: "https://bkmedia.bakingo.com/pista-topped-rasmalai-cake-cake3550rash-A.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Rose Petals N Pistachio Rasmalai C",
            offerPrice: "1499",
            price: "1699",
            discount: "7",
            ratings: "4.4",
            reviews: "50224",
            isEggless:true
        },
        {
            image: "https://bkmedia.bakingo.com/sq-pineapple-cake0022pifr-CCC.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Rose Petals N Pistachio Rasmalai C",
            offerPrice: "1499",
            price: "1699",
            discount: "7",
            ratings: "4.4",
            reviews: "50224",
            isEggless:false
        },
        {
            image: "https://bkmedia.bakingo.com/chocolate-chip-cake0008choc-AAA.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Rose Petals N Pistachio Rasmalai C",
            offerPrice: "1499",
            price: "1699",
            discount: "7",
            ratings: "4.4",
            reviews: "50224",
            isEggless:true
        },
        {
            image: "https://bkmedia.bakingo.com/black-forest-cake0001chbl-AAA.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Rose Petals N Pistachio Rasmalai C",
            offerPrice: "1499",
            price: "1699",
            discount: "7",
            ratings: "4.4",
            reviews: "50224",
            isEggless:false
        },
        {
            image: "https://bkmedia.bakingo.com/kitkat-chocolate-cake-cake1119choco-AAA.jpg?tr=h-265,w-265?tr=w-266,q-70",
            name:"Rose Petals N Pistachio Rasmalai C",
            offerPrice: "1499",
            price: "1699",
            discount: "7",
            ratings: "4.4",
            reviews: "50224",
            isEggless:true
        }
    ];
    return (
        <section className="bg-red-50/50 md:p-2 md:mt-10 pb-12">
        <div className="w-full md:w-5/6 mx-auto md:pt-12 pt-6">
                <div className="flex w-full justify-between pb-4 px-3">
                <h4 className={`${fonts.className} text-center md:text-start text-xl md:text-4xl font-semibold text-red-800`}>
                        Our Best Sellers
                        </h4>
                <Link href="" className="hover:text-white hover:bg-red-700 transition-all ease-in-out duration-300 md:text-lg my-auto font-semibold border-2 border-red-700 rounded-full px-2 md:px-4 md:py-1">View all</Link>
            </div>

            
            <div className="flex flex-wrap  px-2 md:px-0 gap-x-3 gap-y-4 md:gap-y-9 md:gap-x-7">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="flex items-center flex-col grow h-full">
                            <Cards
                                image={product.image}
                                name={product.name}
                                offerPrice={product.offerPrice}
                                price={product.price}
                                discount={product.discount}
                                ratings={product.ratings}
                                isEggless={product.isEggless}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    )
}