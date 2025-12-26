import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  ShopeActivationPage,
  ShopLoginPage,
  ShopHomePage,
  ShopDashboardPage,
} from "./routes/Routes.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./redux/store.js";
import { loadUser, loadShop } from "./redux/actions/user.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import ProtectedShopRoute from "./routes/ProtectedShopRoute.jsx";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadShop());
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignupPage />,
    },
    {
      path: "/activation/:activation_token",
      element: <ActivationPage />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/best-selling",
      element: <BestSellingPage />,
    },
    {
      path: "/events",
      element: <EventsPage />,
    },
    {
      path: "/faq",
      element: <FAQPage />,
    },
    {
      path: "/product/:name",
      element: <ProductDetailsPage />,
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/shop-create",
      element: <ShopCreatePage />,
    },
    {
      path: "/shop/activation/:activation_token",
      element: <ShopeActivationPage />,
    },

    {
      path: "/login-shop",
      element: <ShopLoginPage />,
    },
    {
      path: "/shop/:shopid",
      element: (
        <ProtectedShopRoute>
          <ShopHomePage />
        </ProtectedShopRoute>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedShopRoute>
          <ShopDashboardPage />
        </ProtectedShopRoute>
      ),
    },
    //  {
    //   path: "/checkout",
    //   element: (
    //     <ProtectedRoute isAuthenticated={isAuthenticated}>
    //       <CheckoutPage />
    //     </ProtectedRoute>
    //   ),
    // },
  ]);
  return (
    <>
      <RouterProvider router={routes} />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
