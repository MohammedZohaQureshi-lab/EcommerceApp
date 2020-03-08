import React from "react";
import ProductItem from "../productItem/productItem.component";
import AddProduct from "../addproduct/addproduct.component";
const ProductList = props => {
  return (
    <div className="card-container">
      <AddProduct
        totalitems={props.productsList.length}
        modaltoggle={props.toggleModel}
      >
        Add productsList
      </AddProduct>
      <div className="card-content">
        {props.productsList.map(product => (
          <ProductItem
            key={product.id}
            productItem={product}
            ondelete={props.handledelete}
          />
        ))}
      </div>
      {props.children}
    </div>
  );
};

export default ProductList;
