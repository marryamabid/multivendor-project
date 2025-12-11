import { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import styles from "../../../styles/style";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const sortedData =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = sortedData.slice(0, 5);
    setData(firstFive);
  }, []);
  return (
    <>
      <div className={`${styles.section} `}>
        <div className={`${styles.heading} text-center`}>
          <h1>Best Deals</h1>
        </div>
        <div
          className="grid grid-cols-1 gap-[20px] md:grid-cols-2 
        md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0"
        >
          {data &&
            data.length > 0 &&
            data.map((i, index) => (
              <div key={index}>
                <ProductCard key={index} data={i} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default BestDeals;
