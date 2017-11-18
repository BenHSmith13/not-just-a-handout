/*global google*/
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as MapActions from '../../actions/heatMapLocations';

function select(state) {
  return {
    locations: state.heatMapLocations,
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
  }

  componentDidUpdate() {
    // if (!this.heatmap && !_.isEmpty(this.props.locations)) {
    //   this.heatmap = new google.maps.visualization.HeatmapLayer({
    //     data: this.getPoints(),
    //     map: this.map
    //   });
    // }
  }

  // toggleHeatmap() {
  //   this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
  // }
  //
  // changeGradient() {
  //   var gradient = [
  //     'rgba(0, 255, 255, 0)',
  //     'rgba(0, 255, 255, 1)',
  //     'rgba(0, 191, 255, 1)',
  //     'rgba(0, 127, 255, 1)',
  //     'rgba(0, 63, 255, 1)',
  //     'rgba(0, 0, 255, 1)',
  //     'rgba(0, 0, 223, 1)',
  //     'rgba(0, 0, 191, 1)',
  //     'rgba(0, 0, 159, 1)',
  //     'rgba(0, 0, 127, 1)',
  //     'rgba(63, 0, 91, 1)',
  //     'rgba(127, 0, 63, 1)',
  //     'rgba(191, 0, 31, 1)',
  //     'rgba(255, 0, 0, 1)'
  //   ]
  //   this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
  // }

  // changeRadius() {
  //   this.heatmap.set('radius', this.heatmap.get('radius') ? null : 20);
  // }
  //
  // changeOpacity() {
  //   this.heatmap.set('opacity', this.heatmap.get('opacity') ? null : 0.2);
  // }
  // getPoints() {
  //   return _.map(this.props.locations, l => new google.maps.LatLng(l[1], l[0]));
  // }

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

export default connect(select, MapActions)(Map);
