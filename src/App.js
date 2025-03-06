import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div>
      <Router>
        <NavBar cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}  />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
