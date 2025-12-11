import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Layout/Header";
import styles from "../styles/style";
import { useEffect, useState } from "react";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(d);
    } else {
      const filteredData = productData.filter(
        (i) => i.category === categoryData
      );
      setData(filteredData);
    }
  }, []);
  return (
    <>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full text-2xl pb-[100px]">
            No Products Found!
          </h1>
        ) : null}
      </div>
    </>
  );
};
export default ProductPage;
