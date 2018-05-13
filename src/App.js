import React, { Component } from 'react';
import './App.css';
import BoxBuilder from './containers/BoxBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxBuilder />
      </div>
    );
  }
}

export default App;
