import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useState } from "react";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  //   const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};
  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000060] flex items-center justify-center z-50">
      {data ? (
        <div className="w-[90%] md:w-[60%] h-[90vh] overflow-y-scroll md:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
          <RxCross1
            size={25}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <div className="w-full md:flex">
            <div className="w-full md:w-[50%] ">
              <img
                src={data.image_Url[0].url}
                alt={data.name}
                className="w-full h-[300px] object-contain"
              />
              <div className="flex">
                <img
                  src={data.shop.shop_avatar.url}
                  alt={data.name}
                  className="rounded-full w-[50px] h-[50px]  mr-4"
                />
                <div>
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-3 text-sm">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
              </div>
              <div
                className={`w-[150px]  my-3 flex items-center justify-center  cursor-pointer bg-[#6443d1] mt-4 rounded h-11`}
                onClick={handleMessageSubmit}
              >
                <span className="text-white flex items-center">
                  Send Message <AiOutlineMessage className="ml-1" />
                </span>
              </div>
              <h5 className="text-sm text-rose-500 mt-5">
                ({data.total_sell}) Sold out
              </h5>
            </div>
            <div className="w-full md:w-[50%] p-5">
              <h1 className={`${styles.productTitle} text-lg`}>{data.name}</h1>
              <p>{data.description}</p>
              <div className="flex pt-4">
                <h4 className={`${styles.productDiscountPrice}`}>
                  ${data.discount_price}
                </h4>
                <h3 className={`${styles.price}`}>
                  {data ? data.price + "$" : null}
                </h3>
              </div>
              <div className="flex justify-between mt-12 pr-3 items-center">
                <div>
                  <button
                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l 
                px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                    {count}
                  </span>
                  <button
                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l 
                px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                <div>
                  {click ? (
                    <AiFillHeart
                      size={40}
                      className="cursor-pointer"
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={40}
                      className="cursor-pointer"
                      onClick={() => setClick(!click)}
                      title="Add to wishlist"
                    />
                  )}
                </div>
              </div>
              <div
                className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
              >
                <span className="text-[#fff] flex items-center">
                  Add to cart <AiOutlineShoppingCart className="ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
