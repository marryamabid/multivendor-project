import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  if (isLoading === true) {
    return <div>Loading...</div>;
  }
  if (isLoading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
  }
  return children;
};
export default ProtectedRoute;
