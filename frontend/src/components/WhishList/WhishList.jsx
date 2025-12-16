import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/style";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const WhishList = ({ setOpenWhishList }) => {
  const cartData = [
    {
      id: 1,
      name: "iPhone 14 Pro Max 256GB, 8GB RAM, Silver",
      description:
        "Latest iPhone 14 Pro Max with 256GB storage, 8GB RAM, and sleek silver color",
      price: 999,
    },
    {
      id: 2,
      name: "iPhone 14 Pro Max 256GB, 8GB RAM, Silver",
      description:
        "Latest iPhone 14 Pro Max with 256GB storage, 8GB RAM, and sleek silver color",
      price: 199,
    },
    {
      id: 3,
      name: "iPhone 14 Pro Max 256GB, 8GB RAM, Silver",
      description:
        "Latest iPhone 14 Pro Max with 256GB storage, 8GB RAM, and sleek silver color",
      price: 879,
    },
  ];
  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-full bg-[#0000004b]">
      <div className="fixed top-0 right-0 h-full w-[25%] bg-white shadow-sm flex flex-col overflow-y-auto">
        <div>
          <div className="absolute top-3 right-3 flex justify-end pt-5 pr-5  w-full">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={(prev) => setOpenWhishList(!prev)}
            />
          </div>
          {/*Items length */}
          <div className={`${styles.section} p-4 flex items-center gap-2`}>
            <AiOutlineHeart size={26} />
            <h5 className="font-semibold text-2xl p-3">3 Items</h5>
          </div>
          {/* Cart Single Item */}

          <div className="w-full border-t border-gray-200">
            {cartData &&
              cartData.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <CartSingle data={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="w-full p-4 border-b  border-gray-200">
      <div className=" flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img
          src={`https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838`}
          alt=""
          className="w-[80px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h4>{data.name}</h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default WhishList;
