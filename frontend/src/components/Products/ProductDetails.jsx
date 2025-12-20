import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const productDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  console.log(data);

  const navigate = useNavigate();
  const handleMessageSubmit = () => {
    navigate(`/inbox?conversation=5078372929bs8`);
  };
  return (
    <>
      <div className="bg-white">
        {data ? (
          <div className={`${styles.section} w-[90%] md:w-[80%]`}>
            <div className="w-full py-5">
              <div className="w-full md:flex block">
                <div className="w-full md:w-[50%] ">
                  <img
                    src={data?.image_Url[select].url}
                    alt=""
                    className="w-[80%] h-[370px] object-contain"
                  />
                  <div className="w-full flex">
                    <div
                      className={`${
                        select === 0 ? "border border-gray-300" : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={data?.image_Url[0].url}
                        alt=""
                        className="h-[170px]"
                        onClick={() => setSelect(0)}
                      />
                    </div>
                    <div
                      className={`${
                        select === 1 ? "border border-gray-300" : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={data?.image_Url[1].url}
                        alt=""
                        className="h-[170px]"
                        onClick={() => setSelect(1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[50%] p-4">
                  <h1 className={`${styles.productTitle} text-lg`}>
                    {data.name}
                  </h1>
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
                    className={`${styles.button} !mt-6 !rounded-sm !h-11 !flex !items-center`}
                  >
                    <span className="text-[#fff] flex items-center">
                      Add to cart <AiOutlineShoppingCart className="ml-1" />
                    </span>
                  </div>
                  <div className="flex items-center pt-8">
                    <img
                      src={data.shop.shop_avatar.url}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />

                    <div className="p-4">
                      <h3 className={`${styles.shop_name} p-1`}>
                        {data.shop.name}
                      </h3>
                      <h5 className="text-sm p-1">
                        ({data.shop.ratings}) Ratings
                      </h5>
                    </div>
                    <div
                      className={`w-[150px]  my-3 flex items-center justify-center  cursor-pointer bg-[#6443d1] mt-4 rounded h-11`}
                      onClick={handleMessageSubmit}
                    >
                      <span className="text-white flex items-center">
                        Send Message <AiOutlineMessage className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductDetailsInfo data={data} />
            <br />
            <br />
          </div>
        ) : null}
      </div>
    </>
  );
};
const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className=" py-2 px-3 md:px-10 bg-[#f5f6fb] rounded ">
      <div className="flex w-full justify-between border-b border-b-gray-300 pt-3 pb-2">
        <div className="relative">
          <h5
            className="text-gray-900 font-medium text-sm px-1 leading-5 cursor-pointer md:text-xl "
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-gray-900 font-medium text-sm px-1 leading-5 cursor-pointer md:text-xl "
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-gray-900 font-medium text-sm px-1 leading-5 cursor-pointer md:text-xl "
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-xl leading-8 pb-10 whitespace-pre-line">
            Experience premium performance with this flagship smartphone
            designed for speed, style, and reliability. Display: 6.7-inch Super
            Retina XDR display with vibrant colors and smooth visuals Processor:
            A-series high-performance chip for fast multitasking and gaming
            Camera: Advanced triple-camera system with Night Mode, Ultra-Wide,
            and 4K video recording. Storage: 256GB internal storage for apps,
            photos, and videos RAM: 8GB RAM for seamless performance. Battery:
            Long-lasting battery with fast charging support. Build: Premium
            glass and aluminum body with a sleek finish. Security: Face ID for
            secure and quick unlocking.Operating System: Latest iOS with regular
            security and feature updates Designed for users who want power,
            elegance, and reliability in one device.
          </p>
          <p className="py-2 text-xl leading-8 pb-10 whitespace-pre-line">
            Built to handle everyday tasks and intensive workloads with ease,
            this smartphone delivers smooth performance whether you are
            streaming, gaming, or multitasking between apps. The optimized
            processor and memory management ensure faster response times,
            efficient power usage, and a consistently fluid user experience
            throughout the day.
          </p>
          <p className="py-2 text-xl leading-8 pb-10 whitespace-pre-line">
            Crafted with attention to detail, the device features a premium
            finish that feels comfortable in hand while maintaining a modern and
            elegant look. With support for high-speed connectivity, advanced
            security features, and regular software updates, it offers a
            reliable and future-ready experience for both personal and
            professional use.
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full flex justify-center items-center min-h-[40vh]">
          <p className=" text-gray-700">No Reviews yet!</p>
        </div>
      ) : null}
      {active === 3 ? (
        <>
          <div className="w-full block md:flex p-5">
            <div className="w-full md:w-[50%]">
              <div className="flex items-center">
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full mr-2"
                />
                <div className="pl-4">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="text-sm pb-2">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
              </div>
              <div className="pt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet nam voluptatem magni obcaecati blanditiis distinctio,
                  expedita praesentium, officiis pariatur minus accusamus,
                  quibusdam inventore libero suscipit architecto! Architecto
                  illo illum magnam.
                </p>
              </div>
            </div>
            <div className="w-full md:[50%] mt-5 md:mt-0 md:flex flex-col items-end">
              <div className="text-left">
                <h5 className="font-medium">
                  Joined on: <span className="font-normal">23 Jan 2023</span>
                </h5>
                <h5 className="font-medium pt-3">
                  Total Products: <span className="font-normal">1,543</span>
                </h5>
                <h5 className="font-medium pt-3">
                  Total Reviews: <span className="font-normal">234</span>
                </h5>
                <Link to="/">
                  <div
                    className={`${styles.button} !rounded-sm !h-[40px] !mt-5`}
                  >
                    <h4 className="text-white">Visit Shop</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
export default productDetails;
