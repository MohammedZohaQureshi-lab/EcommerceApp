import React from "react";

const AddProduct = ({ totalitems, modaltoggle }) => {
  debugger;
  return (
    <div className="addProduct">
      <p className="text-secondary p-0 pb-3">
        Products Available :<b className="text-info"> {totalitems}</b>
      </p>
      <button
        className="btn btn-outline-info d-block mb-2"
        style={{ width: "200px" }}
        onClick={() => modaltoggle(true)}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
