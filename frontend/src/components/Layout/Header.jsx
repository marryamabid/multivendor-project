import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/style";
import { productData } from "../../static/data.jsx";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { categoriesData } from "../../static/data.jsx";
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
export const Header = ({ activeHeading }) => {
  const [searchData, setSearchData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between h-[50px] my-5">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length > 0 && (
              <div className="absolute w-full bg-slate-50 shadow-md z-[9] p-4 max-h-[30vh] overflow-y-auto">
                {searchData.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="w-full flex items-start py-3">
                      <img
                        src={product.image_Url[0]?.url}
                        alt={product.name}
                        className="w-[40px] h-[40px] mr-[10px]"
                      />
                      <h1>{product.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-white flex  items-center ">
                Become Seller
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "sticky top-0 z-10 shadow-sm" : ""
        } transition flex items-center justify-between w-full bg-[#3321c8] h-[70px] px-4`}
      >
        {/* Left: Categories */}
        <div className="relative flex items-center w-[270px] h-[60px]">
          <BiMenuAltLeft size={30} className="absolute left-2" />
          <button className="flex-1 h-full pl-10 pr-8 bg-white rounded-t-md text-lg font-medium flex items-center justify-between">
            All Categories
            <IoIosArrowDown
              onClick={() => setDropDown(!dropDown)}
              className="cursor-pointer"
            />
          </button>
          {dropDown && (
            <DropDown
              categoriesData={categoriesData}
              setDropDown={setDropDown}
            />
          )}
        </div>

        {/* Center: Navbar */}
        <div className="flex-1 flex justify-center">
          <Navbar active={activeHeading} />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          {/* Heart */}
          <div className="relative cursor-pointer">
            <AiOutlineHeart size={30} color="white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[12px] rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart size={30} color="white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[12px] rounded-full flex items-center justify-center">
              1
            </span>
          </div>

          {/* Profile */}
          <div className="relative cursor-pointer">
            <CgProfile size={30} color="white" />
          </div>
        </div>
      </div>
    </>
  );
};
