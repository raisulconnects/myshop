import { Link, useParams } from "react-router";
import products from "../Data/products";
import ProductCard from "../Components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();

  const targetProduct = products[id - 1];
  return (
    <>
      <div className="flex gap-20 items-center justify-center translate-y-[25%]">
        <Link to={"/home"}>
          <button className="btn btn-success scale-120 hover:scale-125 transition-all">
            Go Back
          </button>
        </Link>
        <ProductCard product={targetProduct} />
      </div>
    </>
  );
}
