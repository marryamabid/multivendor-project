import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../static/data.jsx";
import Footer from "../components/Layout/Footer";
import { Header } from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");
  console.log(name);
  console.log(productData);

  useEffect(() => {
    const foundProduct = productData.find(
      (item) => item.name.toLowerCase() === productName.toLowerCase()
    );
    setData(foundProduct);
    console.log(foundProduct);
  }, [productName]);

  return (
    <>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </>
  );
};
export default ProductDetailsPage;
