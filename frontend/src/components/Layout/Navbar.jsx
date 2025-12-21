import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className="flex items-center ">
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className="flex">
            <Link
              to={item.url}
              className={`${
                active === index + 1
                  ? "text-[#17dd1f]"
                  : "text-black md:text-white"
              } pb-[30px] md:pb-0 font-[500] px-6 cursor-pointer`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
