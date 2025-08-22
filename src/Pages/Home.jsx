import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Searchbar from "../Components/Searchbar";
import useCart from "../useHooks/useCart";

export default function Home() {
  const { allproducts } = useCart();
  const [sort, setSort] = useState("default");
  const [query, setQuery] = useState("");
  let displayProducts = [...allproducts];

  if (sort === "hightolow") displayProducts.sort((a, b) => b.price - a.price);
  if (sort === "lowtohigh") displayProducts.sort((a, b) => a.price - b.price);

  if (query) {
    displayProducts = allproducts.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <div className="max-w-[95%] m-auto">
      <h1 className="text-center text-6xl mt-5 mb-5">Welcome To Our Shop</h1>

      <Searchbar setQuery={setQuery} />

      <div className="flex justify-between items-center">
        <h4 className="text-2xl my-5">Current Trendy Products:</h4>
        {/* Filter Dropdown */}
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter By Price
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a
                onClick={() => {
                  setSort("hightolow");
                }}
              >
                High To Low
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSort("lowtohigh");
                }}
              >
                Low To High
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-1.5">
        {displayProducts?.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
