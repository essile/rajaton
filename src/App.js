import React, { Component } from 'react';
import Axios from 'axios';

const API_ADDRESS = 'http://localhost:5000';

export default class App extends Component {
  state = {
    testData: ''
  };

  componentDidMount() {

    Axios.get(API_ADDRESS + '/api/hello')
      .then(response => {
        this.setState({ testData: response.data.test });
      })
      .catch(error => {
        alert('backend is not answering. ' + error)
      })
  }

  render() {
    return (
      <div>
        moi: {this.state.testData}
      </div>
    );
  }
}