import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/*Women's Collection */}
        <div className="group relative flex-1 overflow-hidden">
          {/* Red Accent Line */}
          <div className="w-12 h-1 bg-red-600 mb-3"></div>
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <div className="absolute bottom-8 left-8 z-10 bg-white/95 p-5 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900  mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-red-600 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/*Men's Collection */}
        <div className="group relative flex-1 overflow-hidden">
          {/* Red Accent Line */}
          <div className="w-12 h-1 bg-red-600 mb-3"></div>
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <div className="absolute bottom-8 left-8 z-10 bg-white/95 p-5 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900  mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-red-600 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
