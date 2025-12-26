import { useEffect } from "react";
import ShopLogin from "../components/Shop/ShopLogin.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller } = useSelector((state) => state.shop);
  console.log(isSeller);
  useEffect(() => {
    if (isSeller === true) {
      navigate("/dashboard");
    }
  }, [isSeller, navigate]);
  return (
    <>
      <ShopLogin />
    </>
  );
};
export default ShopLoginPage;
