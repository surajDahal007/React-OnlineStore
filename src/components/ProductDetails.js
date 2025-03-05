import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {

  const [product, SetProduct] = useState([]);
  const {id} = useParams(); // get id from URL

  useEffect(()=>{
    const fetchProduct = async()=>{
      try {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let data = await response.json();
        SetProduct(data);        
        
      } catch (error) {
        console.error("Error fetching this product:", error);
      }
    }

    fetchProduct();
  },[id]);


  return (
    <div className='container my-4 py-3'>
      <div className="p-5 mb-4 bg-body-tertiary border rounded-5">
      <div className="container-fluid">
        <h3 className="display-5 fw-bold">{product.title}</h3>
        <div className="col-md-10 fs-4">
          <div className="text-center my-5">
            <img src={`${product.image}`} height={300} width={350} alt={product.title} />
          </div>
          <hr />
          <p>
            <span className='fw-bold'>Category:</span> {product.category}
          </p>
          <p>
            <span className='fw-bold'>Description:</span>
            <br /> {product.description}
          </p>

          <p>
            <span className='fw-bold'>Rating:</span> {product.rating? `${product.rating.rate} by ${product.rating.count} people`: "N/A"}
          </p>

          <p className='fw-bold'>
            <i>Price:</i> ${product.price}
          </p>

          <p>
            <button className='btn btn-primary'>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails
