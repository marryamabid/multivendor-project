import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import styles from "../../styles/style";

const ShopInfo = ({ isOwner }) => {
  const { shop } = useSelector((state) => state.shop);
  const logoutHandler = () => {};
  return (
    <>
      <div className="w-full py-5">
        <div className="w-full flex items-center justify-center">
          <img
            s
            src={`${backend_url}/${shop.avatar}`}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
        </div>
        <h3 className="text-center py-2 text-[20px]">{shop.name}</h3>
        <p className="text-sm text-shadow-gray-950 p-[10px] flex items-center ">
          {shop.description}
        </p>
        <div className="p-3">
          <h5 className="font-[600]">Address</h5>
          <h4 className="text-[#000000a6]">{shop.address}</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Phone Number</h5>
          <h4 className="text-[#000000a6]">{shop.phoneNumber}</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Total Products</h5>
          <h4 className="text-[#000000a6]">10</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Shop Ratings</h5>
          <h4 className="text-[#000000b0]">4/5</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Joined On</h5>
          <h4 className="text-[#000000b0]">{shop?.createdAt?.slice(0, 10)}</h4>
        </div>
        {isOwner && (
          <div className="py-3 px-4">
            <div className={`${styles.button} !h-[42px] !w-full  !rounded-md`}>
              <span className="text-white">Edit Shop</span>
            </div>
            <div
              className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
              onClick={logoutHandler}
            >
              <span className="text-white">Log Out</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ShopInfo;
