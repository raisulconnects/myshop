import { useNavigate } from "react-router";
import useCart from "../useHooks/useCart";

export default function ProductCard({ product }) {
  const navigator = useNavigate();
  const { handleAddItem } = useCart();

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={product.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <h2 className="text-2xl font-bold">${product.price}</h2>
        <p>{product.description}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleAddItem(product);
            }}
          >
            Add To Cart
          </button>
          <button
            className="btn btn-accent"
            onClick={() => {
              navigator(`/product/${product.id}`);
            }}
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}
