import React from 'react';

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
        <button onClick={this.props.back}>Back</button>
      </div>
    );
  }
}
