import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar.jsx";
import CartDrawer from "../Layout/CartDrawer.jsx";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/*Logo- Left Side of navbar*/}
        <div>
          <Link
            to="/"
            className="text-3xl tracking-wide transition-all duration-300 hover:opacity-80"
          >
            <span className="font-light text-black">Urban</span>
            <span className="font-extrabold text-red-600">Thread</span>
          </Link>
        </div>

        {/*Center- Navigation Links*/}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:tetx-black text-sm font-medium uppercase"
          >
            MEN
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:tetx-black text-sm font-medium uppercase"
          >
            WOMEN
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:tetx-black text-sm font-medium uppercase"
          >
            TOP WEAR
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:tetx-black text-sm font-medium uppercase"
          >
            BOTTOM WEAR
          </Link>
        </div>

        {/*Right- Icons*/}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/*Search*/}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button className="md:hidden hover:text-black">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;
