import { createContext, useState } from "react";
import products from "../Data/products";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [allproducts, setAllProducts] = useState(products);
  const [cart, setCart] = useState([]);

  let subtotal = cart.reduce((acc, item) => {
    return acc + Number(item.quantity * item.price);
  }, 0);

  const handleAddItem = (product) => {
    const targetProduct = cart.find((prod) => prod.id === product.id);

    if (targetProduct) {
      const newArr = cart.map((prod) =>
        prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
      );

      setCart(newArr);
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (product) => {
    const newArr = cart.filter((prod) => prod.id !== product.id);
    setCart(newArr);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        allproducts,
        cart,
        handleAddItem,
        subtotal,
        handleRemoveItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
