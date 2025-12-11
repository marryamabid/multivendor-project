import { productData } from "../../../static/data";
import styles from "../../../styles/style";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {
  return (
    <>
      <div className={`${styles.section} `}>
        <div className={`${styles.heading} text-center`}>
          <h1>Featured Products</h1>
        </div>
        <div
          className="grid grid-cols-1 gap-[20px] md:grid-cols-2 
        md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0"
        >
          {/* Featured products will be mapped here in the future */}
          {productData
            ? productData.map((item, index) => (
                <div key={index}>
                  <ProductCard key={index} data={item} />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
export default FeaturedProducts;
