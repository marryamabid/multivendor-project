import { Header } from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/hero.jsx";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
    </div>
  );
};
export default HomePage;
