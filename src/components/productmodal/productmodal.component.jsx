import React from "react";
const ProductModal = ({ modalshow }) => {
  const gridstyle = {
    display: "grid",
    gridTemplateColumns: "100px 1fr"
  };
  return (
    <div
      className="modal d-block"
      style={{ background: "rgba(0, 0, 0, 0.611764705882353)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3" style={gridstyle}>
              <label>Name</label>
              <input type="text" placeholder="Product Name" />
            </div>
            <div className="mb-3" style={gridstyle}>
              <label>Description</label>
              <input type="text" placeholder="Product Description" />
            </div>
            <div className="mb-3" style={gridstyle}>
              <label>Price</label>
              <input type="number" min="0" placeholder="Product Price" />
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-info"
              onClick={console.log("ADDED")}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
