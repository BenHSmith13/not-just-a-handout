import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Map from './map';
import './App.css';
import Involved from './involved';
import Form from './form';
import * as MongoActions from '../actions/mongo';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getLocation();
    this.props.getResources();
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
        <Map />
        <Involved location={this.state.location} />
        <Form />
      </div>
    );
  }
}

export default connect(() => ({}), MongoActions)(App);
