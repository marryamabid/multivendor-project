import { useEffect, useState } from "react";
import { productData } from "../../static/data.jsx";
import styles from "../../styles/style";
import ProductCard from "../../components/Route/ProductCard/ProductCard.jsx";
const SuggestedProduct = ({ data }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (data) {
      const d = productData.filter((i) => i.category === data.category);
      setProduct(d);
    }
  }, [data]);
  return (
    <>
      {data ? (
        <div className={`${styles.section} p-4`}>
          <h2
            className={`${styles.heading} text-2xl font-medium border-b border-b-gray-300 mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
            {product &&
              product.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default SuggestedProduct;
