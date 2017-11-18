import React from 'react';
import Header from '../common/common_header';
import Map from './map';
import List from './list';

export default class Involved extends React.Component {

  render(){
    return (
      <div>
        <Header back={this.props.back} title="Get Involved" />
        <Map />
        <List />
      </div>
    );
  }
}
