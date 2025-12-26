import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedShopRoute = ({ children }) => {
  const { isSeller, isSellerLoading } = useSelector((state) => state.shop);
  if (isSellerLoading) return <div>Loading...</div>;
  if (isSellerLoading === false) {
    if (!isSeller) {
      return <Navigate to="/login-shop" replace />;
    }
  }
  return children;
};
export default ProtectedShopRoute;
