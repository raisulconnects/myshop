import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ProductDetails from "../Pages/ProductDetails";
import RootLayout from "./RootLayout";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "*", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default router;
