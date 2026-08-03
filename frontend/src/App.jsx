import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./pages/Home.jsx";
import { Toaster } from "sonner";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right"></Toaster>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
