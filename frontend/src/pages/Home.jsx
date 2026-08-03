import Hero from "../components/Layout/Hero.jsx";
import FeaturedCollection from "../components/Products/FeaturedCollection.jsx";
import FeaturesSection from "../components/Products/FeaturesSection.jsx";
import GenderCollectionSection from "../components/Products/GenderCollectionSection.jsx";
import NewArrivals from "../components/Products/NewArrivals.jsx";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import ProductGrid from "../components/Products/ProductGrid.jsx";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=1" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
];
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

      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-4 font-bold">
          Top Wears for Women
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full mb-4"></div>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
