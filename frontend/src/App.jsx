import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./pages/Home.jsx";
import { Toaster } from "sonner";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
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
        </Route>
        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
