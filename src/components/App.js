import React, { Component } from 'react';
import Header from './header'
import './App.css';
import Involved from './involved';

class App extends Component {

  constructor() {
    super();
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => this.showPosition(position));
    } else {
      this.setState({ location: "Geolocation is not supported by this browser."})
    }
  }

  showPosition(position) {
    const location = { lat: position.coords.latitude, long: position.coords.longitude }
    this.setState({ location })
  }

  render() {
    this.getLocation();
    return (
      <div className="App" style={{ marginTop: '-21px' }}>
        <Header />
        <header className="App-header" />{/*This heder is default to html*/}
        <Involved location={this.state.location} />
      </div>
    );
  }
}

export default App;
