import React from "react";

export default function ProductCard(props) {
  return (
    <div className="card container" style={{ width: "22rem" }}>
      <img src={props.image} height={300} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text d-flex justify-content-between">
        <a href="/" className="btn btn-primary">
          View
        </a>
          <i>${props.price}</i>
        </p>
        
      </div>
    </div>
  );
}
