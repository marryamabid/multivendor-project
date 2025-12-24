import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/style";
import { productData } from "../../static/data.jsx";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { categoriesData } from "../../static/data.jsx";
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
import { useSelector } from "react-redux";
import { backend_url } from "../../server.js";
import Cart from "../Cart/Cart.jsx";
import WhishList from "../WhishList/WhishList.JSX";
import { RxCross1 } from "react-icons/rx";

export const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user);
  const [searchData, setSearchData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWhishList, setOpenWhishList] = useState(false);
  const [open, setOpen] = useState(false);
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
      <div className="hidden md:block">
        <div className="w-11/12 mx-auto ">
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
                    <Link key={product.id} to={`/product/${product.name}`}>
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
            <div className={`${styles.button} !rounded-md`}>
              <Link to="/shop-create">
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
            active === true ? "fixed left-0 top-0 z-50 shadow-sm" : null
          } transition flex items-center justify-between w-full bg-[#3321c8] h-[70px] px-4`}
        >
          {/* Categories */}

          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative flex items-center w-[270px] h-[60px]">
              <BiMenuAltLeft size={30} className="absolute left-0 top-0 z-50" />
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
          </div>

          {/* Center: Navbar */}
          <div className="flex-1 flex justify-center">
            <Navbar active={activeHeading} />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
            {/* Heart */}
            <div className="relative cursor-pointer">
              <AiOutlineHeart
                size={30}
                color="white"
                onClick={() => setOpenWhishList(true)}
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[12px] rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer">
              <AiOutlineShoppingCart
                size={30}
                color="white"
                onClick={() => setOpenCart(true)}
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[12px] rounded-full flex items-center justify-center">
                1
              </span>
            </div>

            {/* Profile */}
            <div className="flex w-full justify-center">
              {isAuthenticated ? (
                <div>
                  <Link to="/profile">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                    />
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-[18px] pr-[10px] text-[#000000b7]"
                  >
                    Login/
                  </Link>
                  <Link to="/sign-up" className="text-[18px] text-[#000000b7]">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Cart popup  */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
          {/* Wishlist popup  */}
          {openWhishList ? (
            <WhishList setOpenWhishList={setOpenWhishList} />
          ) : null}
        </div>
      </div>
      {/* mobile view */}
      <div
        className={`${
          active ? "fixed top-0 left-0 z-50 shadow-sm" : ""
        } w-full h-[70px] bg-white shadow-sm  top-0 left-0 md:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={30}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
              className="cursor-pointer mt-3"
            />
          </Link>
          <div>
            <div className="mr-[20px] relative ">
              <AiOutlineShoppingCart
                size={30}
                onClick={() => setOpenCart(true)}
                className="cursor-pointer"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[12px] rounded-full flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        </div>
        {/* header sidebar */}
        {open ? (
          <div
            className={` w-full fixed  z-20 top-0 left-0 bg-gray-950/40 h-screen`}
          >
            <div className="w-[60%] fixed bg-white z-20 top-0 left-0  h-screen ">
              <div className="w-full flex justify-between items-center">
                <div className="relative">
                  <AiOutlineHeart size={30} className="mt-2 ml-5" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 text-white text-[12px] rounded-full flex items-center justify-center">
                    1
                  </span>
                </div>
                <RxCross1
                  className="mr-5 mt-5 cursor-pointer "
                  size={30}
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="my06 w-[92%] mt-2 m-auto h-[40px] relative">
                <input
                  type="text"
                  placeholder="Search Product..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-[40px] w-full px-2 rounded-md border-[2px] border-blue-500"
                />
                {searchData && searchData.length > 0 && (
                  <div className="absolute w-full bg-slate-50 shadow-md z-[9] p-4 max-h-[30vh] overflow-y-auto">
                    {searchData.map((product) => {
                      const d = product.name;
                      const product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link
                          key={product.id}
                          to={`/product/${product_name}`}
                          onClick={() => {
                            setOpen(true);
                            setSearchData("");
                            setSearchTerm("");
                          }}
                        >
                          <div className="w-full flex items-start py-3">
                            <img
                              src={product.image_Url[0]?.url}
                              alt={product.name}
                              className="w-[40px] h-[40px] mr-[10px]"
                            />
                            <h1>{product.name}</h1>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
                <Navbar active={activeHeading} />
                <div className={`${styles.button} ml-4 !rounded-md`}>
                  <Link to="/shop-create">
                    <h1 className="text-white flex  items-center ">
                      Become Seller
                      <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                </div>
                <br />
                <br />
                <div className="flex items-center justify-center">
                  {isAuthenticated ? (
                    <div>
                      <Link to="/profile">
                        <img
                          src={`${backend_url}${user.avatar}`}
                          alt=""
                          className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                        />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="text-[18px] pr-[10px] text-[#000000b7]"
                      >
                        Login/
                      </Link>
                      <Link
                        to="/sign-up"
                        className="text-[18px] text-[#000000b7]"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
