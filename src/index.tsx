import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import NewProduct from "./pages/NewProduct";
import ProtectedRoute from "./pages/ProtectedRoute";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound description="잘못된 경로입니다." />,
    children: [
      { index: true, path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.PRODUCTS, element: <AllProducts /> },
      { path: `${ROUTES.PRODUCTS}/:id`, element: <ProductDetail /> },
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
      { path: ROUTES.MY_PAGE, element: <MyPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
