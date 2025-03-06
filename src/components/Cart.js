import React, { useState, useEffect } from "react";

const Cart = (props) => {
  let count = 0;
  let totalQuantity = 0;
  let totalPrice = 0;

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

  const deleteAllItems = () => {
    localStorage.clear();
    props.setCartItems(0);
  };

  const deleteOneItem = (k) => {
    localStorage.removeItem(k);
    props.setCartItems(localStorage.length);
  };

  const handleBuyNow = ()=>{
    alert('This feature is comming soon.');
  }

  return (
    <div className="my-1 container">
      <h2 className="text-center my-5">Cart Items</h2>

      {productData.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" width={350}>Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
              <th className="col"></th>
            </tr>
          </thead>
          <tbody >
            {Object.keys(localStorage).map((key) => {
              totalPrice =
                totalPrice +
                productData[key - 1].price * localStorage.getItem(key);
              totalQuantity =
                totalQuantity + parseInt(localStorage.getItem(key));

              return (
                <tr key={key}>
                  <th scope="row">{++count}</th>
                  <td>{productData[key - 1].title}</td>
                  <td>$ {productData[key - 1].price}</td>
                  <td>{localStorage.getItem(key)}</td>
                  <td>
                    ${productData[key - 1].price * localStorage.getItem(key)}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        deleteOneItem(key);
                      }}
                    >
                      DELETE &#10006;
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={handleBuyNow}>BUY</button>
                  </td>
                </tr>
              );
            })}
            <tr className="fw-bold ">
              <td>GRAND TOTAL: </td>
              <td></td>
              <td></td>
              <td>{totalQuantity}</td>
              <td>$ {totalPrice}</td>
              {totalQuantity === 0 ? (
                "No actions available"
              ) : (
                <>
                  <td>
                    <button
                      className="btn btn-outline-danger fw-bold fst-italic"
                      onClick={deleteAllItems}
                    >
                      Delete All &#10006;
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={handleBuyNow}>Buy NOW !</button>
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <img src="loading.gif" alt="LOADING..." />
        </div>
      )}
    </div>
  );
};

export default Cart;
