import React from "react";

const ProductItem = ({ productItem, ondelete }) => {
  return (
    <div className="card" id={productItem.id}>
      <img
        className="card-img-top"
        src="../../assets/images/images.png"
        alt="Card cap"
      />
      <div className="card-body">
        <h3 className="card-title m-0 mb-3">{productItem.title}</h3>
        <p className="m-0">
          <b>${productItem.price}</b>
        </p>
        <p className="card-text">{productItem.description}</p>
        <button className="btn btn-info d-block mb-2 w-100 text-white">
          View Details
        </button>
        <button
          className="btn btn-info d-block mb-2 w-100 text-white"
          onClick={() => ondelete(productItem.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
