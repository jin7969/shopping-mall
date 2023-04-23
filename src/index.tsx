import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import { ROUTES } from "./constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.PRODUCTS, element: <AllProducts /> },
      { path: ROUTES.PRODUCT_DETAIL, element: <ProductDetail /> },
      { path: ROUTES.MY_CART, element: <MyCart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
