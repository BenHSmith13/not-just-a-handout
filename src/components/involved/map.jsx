/*global google*/
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as MapActions from '../../actions/heatMapLocations';
import * as LatLongActions from '../../actions/latLong';

function select(state) {
  return {
    locations: state.heatMapLocations,
    resources: state.resource,
    latLong: state.latLong
  }
}

export class Map extends React.Component {
  constructor() {
    super();
    this.mapElement = null;
    this.map = null;
    this.heatmap = null;
  }

  componentDidMount() {
    this.props.getLocations();
    if (this.mapElement && !this.map) {
      this.map = new google.maps.Map(this.mapElement, {
        zoom: 13,
        center: {lat: 40.7608, lng: -111.8910},
        mapTypeId: 'satellite'
      });
    }
    this.putMarkersOnMap();
  }

  putMarkersOnMap() {
    _.forEach(this.props.latLong, (ll, key) => {
      const res  = _.find(this.props.resources, resource => {
        return resource._id == key;
      });
      new google.maps.Marker({
        position: ll,
        map: this.map,
        title: res.name
      });
    })
  }

  getStyles = () => {
    return {
      map: {
        height: '70vh',
        width: '70vh',
        margin: '15px'
      }
    }
  }

  render() {
    const styles = this.getStyles();
    return (
      <div ref={e => { this.mapElement = e; }} style={styles.map}></div>
    );
  }
}

export default connect(select, { ...MapActions, ...LatLongActions})(Map);
