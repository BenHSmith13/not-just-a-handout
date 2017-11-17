import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './header'
import './App.css';
import Involved from './involved';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: '-21px' }}>
        <Header />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        </header>
        <Involved />
      </div>
    );
  }
}

export default App;
