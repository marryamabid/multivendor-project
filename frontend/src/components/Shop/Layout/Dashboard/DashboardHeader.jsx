import { AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiShoppingBag, FiPackage } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backend_url } from "../../../../server";

const DashboardHeader = () => {
  const { shop } = useSelector((state) => state.shop);
  console.log(shop);

  return (
    <>
      <div className="w-full h-[70px] bg-white shadow stickey top-0 left-0 z-30 flex justify-between items-center px-4">
        <div>
          <Link to="/dashboard">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className=" flex items-center mr-4">
            <Link to="/dashboard/cupouns" className="md:block hidden">
              <AiOutlineGift
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-events" className="md:block hidden">
              <MdOutlineLocalOffer
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-products" className="md:block hidden">
              <FiShoppingBag
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-orders" className="md:block hidden">
              <FiPackage
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-messages" className="md:block hidden">
              <BiMessageSquareDetail
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to={`/shop/${shop._id}`}>
              <img
                src={`${backend_url}/${shop.avatar}`}
                alt=""
                className="w-[40px] h-[35px] rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardHeader;
