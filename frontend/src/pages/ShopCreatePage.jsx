import ShopCreate from "../components/Shop/ShopCreate";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ShopCreatePage = () => {
  const { isSeller, shop } = useSelector((state) => state.shop);
  const navigate = useNavigate();
  console.log(shop);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${shop._id}`);
    }
  }, [isSeller, shop, navigate]);
  return (
    <div>
      <ShopCreate />
    </div>
  );
};
export default ShopCreatePage;
