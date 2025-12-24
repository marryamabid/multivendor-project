import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedShopRoute = ({ isSeller, isSellerLoading, children }) => {
  console.log("ProtectedShopRoute - isSeller:", isSeller);
  if (isSellerLoading) return <div>Loading...</div>;
  if (!isSeller) {
    return <Navigate to="/login-shop" replace />;
  }
  return children;
};
export default ProtectedShopRoute;
