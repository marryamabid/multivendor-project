import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../static/data.jsx";
import Footer from "../components/Layout/Footer";
import { Header } from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails.jsx";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = productData.find((item) => item.name === productName);
    setData(data);
  }, []);
  return (
    <>
      <Header />
      <ProductDetails data={data} />
      <Footer />
    </>
  );
};
export default ProductDetailsPage;
