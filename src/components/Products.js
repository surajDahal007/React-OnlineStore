import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard'

export default function ProductList() {
  const [productData, setProductData] = useState([]); 

  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data); 
        setProductData(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []); 


  return (
    <div className="container mt-4">
      <h1>Online Store All Products</h1>
      <hr className="mb-4 py-4 my-3"/>
      {productData.length > 0 ? (
        <div className="row g-4">
          {productData.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6"> 
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}