import React from 'react';

export default class Organizer extends React.Component {
  render(){
    return (
      <div>
        <button onClick={this.props.back}>Back</button>
      </div>
    );
  }
}
