import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

import Header from './components/Header'
class App extends Component {
  state = {
    email: 'e',
    name: 'n'
  }
  render() {
    return (
      <div className="App">
          <Header /> 
          <Form />
      </div>
    );
  }
}

export default App;
