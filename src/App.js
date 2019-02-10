import React, { Component } from 'react';
import Axios from 'axios';

const API_ADDRESS = 'http://localhost:1234';

export default class App extends Component {
  state = {
    stockProducts: []
  };

  componentDidMount() {

    Axios.get(API_ADDRESS + '/api/stock-products')
      .then(response => {
        this.setState({ stockProducts: response.data });
        console.log(this.state.stockProducts);
      })
      .catch(error => {
        alert(error)
      })
  }

  render() {
    return (
      <div>
        {this.state.stockProducts.map((product, index) => {
          return <div key={index}>{product.name.toLowerCase()}, {product.category.toLowerCase()}</div>
        })}
      </div>
    );
  }
}