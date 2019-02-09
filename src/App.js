import React, { Component } from 'react';
import './App.css';

const API_ADDRESS = 'http://localhost:5000';

class App extends Component {
  state = {
    testData: ''
  };

  componentDidMount() {

    this.callBackendAPI()
      .then(res => this.setState({ data: res.test }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch(API_ADDRESS + '/api/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div>
        moi: {this.state.data}
      </div>
    );
  }
}

export default App;