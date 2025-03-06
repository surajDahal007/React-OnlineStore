import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const [product, setProduct] = useState(null);
  // const [cartItem, setCartItem] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams(); // get id from URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching this product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyItem = () => {
    alert("Comming soon! Stay tuned.");
  };

  const handleAddToCart = () => {
    if (quantity < 1) {
      alert("Minumum items should be 1.");
    } else {
      props.setCartItems(props.cartItems + 1);
      localStorage.setItem(product.id, quantity);
      console.log(localStorage);
      alert("Item added to cart.");
    }
  };

  // handle changes in i/p field 'No. of Items'
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="container my-4 py-3">
      {product ? (
        <div className="p-5 mb-4 bg-body-tertiary border rounded-5">
          <div className="container-fluid">
            <h3 className="display-5 fw-bold">{product.title}</h3>
            <div className="col-md-10 fs-4">
              <div className="text-center my-5">
                <img
                  src={`${product.image}`}
                  height={300}
                  width={300}
                  alt={product.title}
                />
              </div>
              <hr />
              <p>
                <span className="fw-bold">Category:</span> {product.category}
              </p>
              <p>
                <span className="fw-bold">Description:</span>
                <br /> {product.description}
              </p>

              <p>
                <span className="fw-bold">Rating:</span>{" "}
                {product.rating
                  ? `${product.rating.rate} by ${product.rating.count} people`
                  : "N/A"}
              </p>

              <p className="fw-bold">
                <i>Price:</i> ${product.price}
              </p>

              <div className="d-flex justify-content-between my-5 mb-0">
                <div>
                  <input
                    type="number"
                    placeholder="No. of Items"
                    id="number"
                    min="1"
                    onChange={handleChange}
                  />
                  &nbsp;
                  <button
                    className="btn btn-outline-primary"
                    onClick={handleAddToCart}
                  >
                    Add to Cart &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </button>
                </div>
                <button
                  className="btn btn-success fw-bold fst-italic"
                  onClick={handleBuyItem}
                >
                  Buy &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-bag-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img src="/loading.gif" alt="LOADING..." />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
