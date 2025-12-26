import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const ProtectedShopRoute = ({ children }) => {
  const { isSeller, isSellerLoading } = useSelector((state) => state.shop);
  console.log(isSellerLoading);
  if (isSellerLoading === true) {
    return <Loader />;
  } else {
    if (isSellerLoading === false) {
      if (!isSeller) {
        return <Navigate to="/login-shop" replace />;
      }
    }
  }

  return children;
};
export default ProtectedShopRoute;
