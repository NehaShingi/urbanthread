import Topbar from "../Layout/Topbar.jsx";
import Navbar from "./Navbar.jsx";
//It will contain Topbar, Navbar and Cart Drawer
const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;
