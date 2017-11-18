import React from 'react';
import Header from '../common/common_header';

export default class Organizer extends React.Component {
  constructor() {
    super();
  }
  
  getStyles = () => {
    return {
      
    };
  }
  
  render(){
    const styles = this.getStyles();
    return (
      <div>
        <Header back={this.props.back} title="Get Involved" />
        some form that goes to out DB
      </div>
    );
  }
}
