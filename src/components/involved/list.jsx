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
  constructor() {
    super();
    this.state = {
      selected: null,
    };
  }

  getStyles() {
    return {
      padleft: {
        position: 'absolute',
        width: '40vw',
        right: '-5px',
        top: '95px',
        boxShadow: '-3px 5px 10px grey',
        borderRadius: '5px',
        backgroundColor: 'lightsteelblue',
        height: '80vh',
        overflow: 'scroll',
      },
      item: {
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: '3px 10px 0px 6px',
        borderRadius: '3px',
        textAlign: 'left',
        padding: '5px',
      },
    }
  }

  showResources() {
    return _.map(this.props.resources, res => {
      const { name, address, details, phone, url, _id } = res;
      const styles = this.getStyles();
      const expanded = this.state.selected === _id;
      return (
        <div style={{ ...styles.item, height: expanded ? '' : '30px'}} onClick={() => this.setState({ selected: _id })}>
          <div style={styles.title}>{name}</div>
          <hr />
          {url ? <a href={url} target="__blank">{url}</a> : null}
          <div>
            {address.street} <br/>
            {address.city}, {address.zip}
          </div>
          <div>{phone}</div>
          <div>{details}</div>
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
