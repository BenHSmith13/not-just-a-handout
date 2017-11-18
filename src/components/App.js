import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Home from './home/home';
import Involved from './involved/involved';
import Organizer from './organizer/organizer';
import Vendor from './vendor/verdor';
import './App.css';
import * as MongoActions from '../actions/mongo';
import * as DataActions from '../actions/open_data';
import * as LatLongActions from '../actions/latLong';

const select = state => ({
    resources: state.resource,
  }
);

export class App extends Component {

  constructor() {
    super();
    this.state = {
      location: '',
      route: 'home',
    };
  }

  componentDidMount() {
    this.getLocation();
    this.props.getResources();
    this.props.getHomeless();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.resources !== this.props.resources && this.props.resources) {
      _.forEach(this.props.resources, (resource) => {
        const { street, city, state, zip } = resource.address;
        const address = street + city + state + zip;
        const add = `http://maps.google.com/maps/api/geocode/json?address=${address}`
        this.props.getLatLong(add, resource);
      })
    }
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

  route = () => {
    const { route } = this.state;
    if (route === 'home') {
      return <Home setRoute={r => this.setState({ route: r })} />
    }
    if (route === 'involved') {
      return <Involved back={() => this.setState({ route: 'home' })} />
    }
    if (route === 'vendor') {
      return <Vendor back={() => this.setState({ route: 'home' })} />
    }
    if (route === 'organizer') {
      return <Organizer back={() => this.setState({ route: 'home' })} />
    }
  }

  render() {
    this.getLocation();
    return (
      <div className="App" style={{ marginTop: '-21px' }}>
        {this.route()}
      </div>
    );
  }
}

export default connect(select, { ...MongoActions, ...DataActions, ...LatLongActions })(App);
