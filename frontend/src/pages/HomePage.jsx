import { Header } from "../components/Layout/Header.jsx";

import Categories from "../components/Route/Categories/Categories.jsx";
import Hero from "../components/Route/Hero/HeroComp.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts.jsx";
import Events from "../components/Events/Events.jsx";
import Sponsored from "../components/Route/Sponsored/Sponsored.jsx";
import Footer from "../components/Layout/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <BestDeals />
      <Sponsored />
      <Footer />
    </div>
  );
};
export default HomePage;
