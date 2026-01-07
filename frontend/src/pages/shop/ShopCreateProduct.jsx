import CreateProduct from "../../components/Shop/CreateProduct";
import DashboardHeader from "../../components/Shop/Layout/Dashboard/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/Dashboard/DashboardSideBar";

const ShopCreateProduct = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex w-full">
        <div className="w-[20%] min-h-screen ">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-[80%] justify-center flex">
          <CreateProduct />
        </div>
      </div>
    </div>
  );
};
export default ShopCreateProduct;
