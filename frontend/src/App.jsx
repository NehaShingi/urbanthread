import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Admin/AdminLayout.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from "sonner";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import ProductDetails from "./components/Products/ProductDetails.jsx";
import Checkout from "./components/Cart/Checkout.jsx";
import OrderConfirmationPage from "./pages/OrderConfirmationPage.jsx";
import OrderDetailsPage from "./pages/OrderDetailsPage.jsx";
import MyOrderPage from "./pages/MyOrdersPage.jsx";
import AdminHomePage from "./pages/AdminHomePage.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right"></Toaster>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="order/:id" element={<OrderDetailsPage />} />
          <Route path="my-orders" element={<MyOrderPage />} />
        </Route>
        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
