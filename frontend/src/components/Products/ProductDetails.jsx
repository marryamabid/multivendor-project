import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/style";

const productDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white">
        <div className={`${styles.section} w-[90%] h-screen md:w-[80%]`}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default productDetails;
