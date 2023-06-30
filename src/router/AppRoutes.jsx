import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<h1>Not Found 404</h1>} />
    </Routes>
  )
}

export default AppRoutes;