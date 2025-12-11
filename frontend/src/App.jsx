import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
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
