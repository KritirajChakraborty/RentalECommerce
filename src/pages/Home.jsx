import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Category from "./Category";
import Collections from "./Collections";
import Newsletter from "./Newsletter";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSeller />
      <Newsletter />
    </div>
  );
};

export default Home;
