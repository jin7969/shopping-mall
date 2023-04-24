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
import NewProduct from "./pages/NewProduct";
import { ROUTES } from "./constants";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.PRODUCTS, element: <AllProducts /> },
      { path: ROUTES.PRODUCT_DETAIL, element: <ProductDetail /> },
      {
        path: ROUTES.NEW_PRODUCT,
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.MY_CART,
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
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
