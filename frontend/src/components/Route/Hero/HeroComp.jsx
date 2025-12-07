import React from "react";
import { Link } from "react-router-dom";

const HeroComp = () => {
  return (
    <div
      className="relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className="w-[90%] 800px:w-[60%] mx-auto">
        <h1 className="text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-semibold capitalize">
          Best Collection for <br /> home Decoration
        </h1>

        <p className="pt-5 text-[16px] font-Poppins font-sembold text-[#000000ba] leading-relaxed text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
          asperiores, laudantium temporibus soluta optio consequatur aliquam
          deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block mt-5">
          <button className="bg-gradient-to-r from-[#4c3eff] to-[#8a7eff] text-white px-6 py-3 rounded-md font-Poppins text-[18px] shadow-md hover:opacity-90 duration-200">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroComp;
