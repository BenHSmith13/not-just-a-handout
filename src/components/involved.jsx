import React from 'react';
import _ from 'lodash';

export default class Involved extends React.Component {


  getStyles() {
    return {
      padleft: {
        paddingLeft: '80%',
      },
    }
  }

  showLinks(foodLink, shelterLink) {
    let locations = {
      1 : {
        city: 'Alta',
        name: 'Alta Food Bank',
        type: 'food',
      },
      2:{
        city: 'Beaver',
        name: 'Beaver Shelter',
        type: 'shelter',
      },
      3:{
        city: 'Delta',
        name: 'Delta Food Bank',
        type: 'food',
      },
      4:{
        city: 'Blanding',
        name: 'Blanding Shelter',
        type: 'shelter',
      },
    }

    return _.map(locations, (location) => {
      let city = location.city;
      let link = location.type == 'food' ? foodLink : shelterLink;
      return (<li>
        <a href={`${link}?city=${city}&state=UT`} target='_blank'>{location.name}</a>
      </li>)
    })
  }

  render() {
    const styles = this.getStyles();
    const foodLink = 'https://www.homelessshelterdirectory.org/cgi-bin/id/cityfoodbanks.cgi'
    const shelterLink = 'https://www.homelessshelterdirectory.org/cgi-bin/id/city.cgi'
    return (
      <div>
        <div style={styles.padleft}>
          <h2>How can I get involved?</h2>
          <ul>
            {this.showLinks(foodLink, shelterLink)}
          </ul>
        </div>
      </div>
    );
  }
}