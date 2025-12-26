import ShopInfo from "../components/Shop/ShopInfo";
import ShopProfile from "../components/Shop/ShopProfile";
import styles from "../styles/style";
const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5] `}>
      <div className="w-full flex justify-between py-10">
        <div className="w-[25%] bg-white rounded-md shadow-sm overflow-y-scroll h-[100vh] stickey top-2 left-0 z-10">
          <ShopInfo isOwner={true} />
        </div>
        <div className="w-[73%] rounded-md ">
          <ShopProfile isOwner={true} />
        </div>
      </div>
    </div>
  );
};
export default ShopHomePage;
