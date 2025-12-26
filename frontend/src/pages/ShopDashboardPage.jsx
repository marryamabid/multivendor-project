import { useState } from "react";
import DashboardHeader from "../components/Shop/Layout/Dashboard/DashboardHeader.jsx";
import DashboardSideBar from "../components/Shop/Layout/Dashboard/DashboardSideBar.jsx";
const ShopDashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <DashboardHeader />
      <div className="w-full flex items-center justify-between ">
        <div className="w-[336px]">
          {/* Sidebar can be added here */}
          <DashboardSideBar active={1} />
        </div>
      </div>
    </>
  );
};
export default ShopDashboardPage;
