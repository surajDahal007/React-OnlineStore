/* 
* REACT ONLINE-STORE APP
* developed by SURAJ DAHAL
* github profile @surajDahal007
* Date - 6 March, 2024
*/

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  // to render no of items in cart, dynamically
  const [cartItems, setCartItems] = useState(0);

  return (
    <div>
      <Router>
        {/* because of cartButton, NavBar within Router  */}
        <NavBar cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Products />} />
          {/* to pass id to product through url   */}
          <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}  />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
