import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard'

export default function ProductList() {
  const [productData, setProductData] = useState([]); 

  useEffect(() => {
    
    const getProducts = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProductData(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []); 


  return (
    <div className="container mt-4">
      <h1>All Products</h1>
      <hr className="mb-3 py-4 my-2"/>
      
      {/* when product is set, then display pass props to card, until then loading gif  */}
      {productData.length > 0 ? (
        <div className="row g-4">
          {/* to display individual product in a card  */}
          {productData.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6"> 
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <img src="loading.gif" alt="Loading..." />
        </div>
      )}
    </div>
  );
}