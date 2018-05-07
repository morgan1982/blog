import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Customers />
      </div>
    );
  }
}

export default App;
