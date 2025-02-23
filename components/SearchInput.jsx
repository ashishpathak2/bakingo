import { useState, useEffect, useRef, useCallback } from "react";
import Fuse from "fuse.js";
import { CiSearch } from "react-icons/ci";

const products = [
  {
    image: "https://bkmedia.bakingo.com/choco-vanilla-cake0006chva-AAA.jpg",
    name: "Rich Chocolate Truffle Cake",
    offerPrice: "499",
    price: "599",
    ratings: "4.9",
    reviews: "50444",
    isEggless: true,
  },
  {
    image: "https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg",
    name: "Chocolate Vanilla Half & Half Cake",
    offerPrice: "699",
    price: "799",
    ratings: "5.0",
    reviews: "50444",
    isEggless: false,
  },
  {
    image: "https://bkmedia.bakingo.com/fresh-fruit-cake0014frui-AAA.jpg",
    name: "Tropical Fruit n Almond Cake",
    offerPrice: "1499",
    price: "1699",
    ratings: "4.4",
    reviews: "50224",
    isEggless: true,
  },
  {
    image:
      "https://bkmedia.bakingo.com/pista-topped-rasmalai-cake-cake3550rash-A.jpg",
    name: "Rose Petals N Pistachio Rasmalai Cake",
    offerPrice: "1499",
    price: "1699",
    ratings: "4.4",
    reviews: "50224",
    isEggless: true,
  },
  {
    image: "https://bkmedia.bakingo.com/black-forest-cake0001chbl-AAA.jpg",
    name: "Classic Black Forest Cake",
    offerPrice: "1499",
    price: "1699",
    ratings: "4.4",
    reviews: "50224",
    isEggless: false,
  },
];

// Fuzzy Search Configuration
const fuse = new Fuse(products, {
  keys: ["name"],
  threshold: 0.3, // Lower = stricter matching, higher = looser
  distance: 100,
  includeScore: true,
});

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [suggestionTab, setSuggestionTab] = useState(false);
  const inputRef = useRef(null);

  // Debounced Search Function (Performance Optimization)
  const handleSearch = useCallback((query) => {
    if (query.length < 2) {
      setFilteredResults([]);
      return;
    }
    const results = fuse.search(query).map((result) => result.item);
    setFilteredResults(results);
    setSuggestionTab(results.length > 0);
  }, []);

  // Input Change Handler
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleSearch(value);
  };

  // Click Outside to Close Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSuggestionTab(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col sm:mt-0 sm:w-2/3 relative" ref={inputRef}>
      {/* Search Input */}
      <div
        className={`flex items-center w-full px-3 py-2 bg-white ${
          suggestionTab ? "rounded-t-lg" : "rounded-md"
        } shadow-md`}
      >
        <CiSearch size={20} className="text-gray-500" />
        <input
          type="text"
          maxLength={60}
          value={searchValue}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm focus:outline-none md:px-3 sm:text-base"
          placeholder="Search for cakes, flavors & more"
          aria-label="Search cakes"
          role="searchbox"
        />
      </div>

      {/* Suggestions Dropdown */}
      {suggestionTab && (
        <div
          className="absolute top-full left-0 w-full max-h-64 overflow-y-auto bg-white rounded-b-lg shadow-lg z-50 p-2 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <ul className="text-start">
            {filteredResults.map((item, index) => (
              <li
                key={index}
                className="flex items-center px-3 py-2 gap-3 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <span className="font-semibold text-gray-700">
                    {item.name}
                  </span>
                  <p className="text-sm text-gray-500">
                    ₹{item.offerPrice}{" "}
                    <span className="line-through text-gray-400">
                      ₹{item.price}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
