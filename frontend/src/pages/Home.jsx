import Hero from "../components/Layout/Hero.jsx";
import GenderCollectionSection from "../components/Products/GenderCollectionSection.jsx";
import NewArrivals from "../components/Products/NewArrivals.jsx";
import ProductDetails from "../components/Products/ProductDetails.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/*Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-2">Best Seller</h2>
      <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full mb-2"></div>
      <ProductDetails />
    </div>
  );
};

export default Home;
