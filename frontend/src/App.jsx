import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLAyout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //User Layout
        <Route path="/" element={<UserLayout />}></Route>
        //Admin Layout
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
