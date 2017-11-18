import React, { Component } from 'react';
import Header from './header';
import Map from './map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: '-21px' }}>
        <Header />
        <Map />
      </div>
    );
  }
}

export default App;
