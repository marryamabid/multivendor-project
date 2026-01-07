import { useState } from "react";
import DashboardHeader from "../../components/Shop/Layout/Dashboard/DashboardHeader.jsx";
import DashboardSideBar from "../../components/Shop/Layout/Dashboard/DashboardSideBar.jsx";
const ShopDashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <DashboardHeader />
      <div className="w-full  ">
        <div className="w-[20%] min-h-screen">
          {/* Sidebar can be added here */}
          <DashboardSideBar active={active} />
        </div>
      </div>
    </>
  );
};
export default ShopDashboardPage;
