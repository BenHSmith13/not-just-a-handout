import React from 'react';
import _ from 'lodash';
import places from '../../consts/places'
import { connect } from 'react-redux';

function select(state) {
  return {
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

  showResources() {
    return _.map(this.props.resources, res => {
      const { name, address, details, phone, url } = res;
      return (
        <div>
          <div>{name}</div>
          <div><p>{address.street}</p><p>{address.city}</p><p>{address.zip}</p></div>
          <div>{details}</div>
          <div>{phone}</div>
          {url ? <div>{url}</div> : null}
          <br />
          <p>----------------------------</p>
        </div>
      )
    })
  }

  render() {
    const styles = this.getStyles();
    return (
      <div>
        <div style={styles.padleft}>
          <h2>How can I get involved?</h2>
          {this.showResources()}
        </div>
      </div>
    );
  }
}

export default connect(select)(List);
