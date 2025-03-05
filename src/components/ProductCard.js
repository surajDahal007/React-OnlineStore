import React from "react";
import {
  Link
} from "react-router-dom";


export default function ProductCard(props) {
  return (
    <div className="card container" style={{ width: "22rem" }}>
      <img src={props.image} height={300} alt="..." />
      <div className="card-body">
        <h5 className="card-title mb-4">{props.title}</h5>
        <p className="card-text d-flex justify-content-between my-0">
          <Link to={`/product/${props.id}`} rel="noreferrer" className="btn btn-primary">
            View
          </Link>
          <i>${props.price}</i>
        </p>
        
      </div>
    </div>
  );
}
