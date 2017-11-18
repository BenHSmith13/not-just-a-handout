import React from 'react';
import _ from 'lodash';
import places from '../../consts/places'
import { connect } from 'react-redux';
import { getRadius } from '../../actions/radius';


function select(state) {
  let locations = state.radius;
  let cities = _.map(locations.zip_codes, lo => (lo.city))
  return {
    locations,
    cities,
    resources: state.resource
  }
}

export class List extends React.Component {


  getStyles() {
    return {
      padleft: {
        position: 'absolute',
        width: '40vw',
        right: '-5px',
        top: '80px',
        boxShadow: '-3px 5px 10px grey',
        borderRadius: '5px',
        backgroundColor: 'lightsteelblue',
        height: '71vh',
      },
    }
  }

  componentDidMount() {
    // TODO: make the endpoint actually take initial zip and radius size
    const getNearByPlaces = 'https://www.zipcodeapi.com/rest/cFuSX0PfqZ57WKlJ76lu01cF9Ce1xap5o2gEvHjPhTMe2OyndbB3TUmC7Vve89Ox/radius.json/84103/15/miles'
    this.props.getRadius(getNearByPlaces);
  }

  showLinks() {
    const foodLink = 'https://www.homelessshelterdirectory.org/cgi-bin/id/cityfoodbanks.cgi'
    const shelterLink = 'https://www.homelessshelterdirectory.org/cgi-bin/id/city.cgi'
    const nearPlaces = _.intersection(places, this.props.cities)
    let locations = []
     _.forEach(nearPlaces, (place) => {
      locations.push({city: place, name: `${place} Shelter`, type: 'shelter'})
      locations.push({city: place, name: `${place} Food Bank`, type: 'food'})
    })

    return _.map(locations, (location) => {
      let city = location.city;
      let link = location.type === 'food' ? foodLink : shelterLink;
      return (
        <li>
          <a href={`${link}?city=${city}&state=UT`} target='_blank'>{location.name}</a>
        </li>
      );
    })
  }


  render() {
    const styles = this.getStyles();
    return (
      <div>
        <div style={styles.padleft}>
          <h2>How can I get involved?</h2>
          <ul>
            {this.showLinks()}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(select, { getRadius })(List);
