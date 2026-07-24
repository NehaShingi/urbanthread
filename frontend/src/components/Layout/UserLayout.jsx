//It will contain Header, Main Content, Footer
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer.jsx";
import Header from "../Common/Header.jsx";

const UserLayout = () => {
  return (
    <>
      {/*Header*/}
      <Header />
      {/*Main Content*/}
      <main>
        <Outlet />
      </main>

      {/*Footer*/}
      <Footer />
    </>
  );
};

export default UserLayout;
