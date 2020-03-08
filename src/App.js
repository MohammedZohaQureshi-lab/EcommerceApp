import React, { Component } from 'react';
import ProductList from './components/productList/productList.component';
import ProductModal from "./components/productmodal/productmodal.component";
import './App.css';
import products from './Products.json'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: products.storeProducts,
      showModal: false
    }
  }
  deleteItem = (delid) => {
    const [...tempproducts] = this.state.productsList;
    const newproducts = tempproducts.filter(product => product.id !== delid)
    this.setState({ productsList: [...newproducts] })
  }
  componentDidMount() {
    document.querySelector(".card-content .card:first-child").classList.add("active")
    console.log("Active class added")
  }
  showtheModal = (bool) => {
    this.setState({ showModal: bool })
  }

  render() {
    const { productsList, showModal } = this.state;
    return (
      <div className="container">
        <div className="container-fluid pt-3">
          <h1 className="text-center py-3 m-0">Products</h1>
          <ProductList productsList={productsList} handledelete={this.deleteItem} toggleModel={this.showtheModal} >
            {showModal ? <ProductModal modalshow={showModal}/> : null}
          </ProductList>
        </div>


      </div>
    );
  }
}

export default App;

