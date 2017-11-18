import React from 'react';
import { connect } from 'react-redux';
import * as MongoActions from '../actions/mongo';

export class Form extends React.Component {
  constructor() {
    super();
    
    this.state = {
      type: '',
      name: '',
      url: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      details: '',
    }
  }
  
  postData = () => {
    this.props.addResource({
      type: this.state.type,
      name: this.state.name,
      url: this.state.url,
      address: {
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      },
      phone: this.state.phone,
      details: this.state.details,
    })
  }
  
  render() {
    return (
      <div>
        <div>
          type: <input type="text" onChange={e => this.setState({ type: e.target.value })} />
        </div>
        <div>
          name: <input type="text" onChange={e => this.setState({ name: e.target.value })} />
        </div>
        <div>
          url: <input type="text" onChange={e => this.setState({ url: e.target.value })} />
        </div>
        <div>
          street: <input type="text" onChange={e => this.setState({ street: e.target.value })} />
        </div>
        <div>
          city: <input type="text" onChange={e => this.setState({ city: e.target.value })} />
        </div>
        <div>
          state: <input type="text" onChange={e => this.setState({ state: e.target.value })} />
        </div>
        <div>
          zip: <input type="text" onChange={e => this.setState({ zip: e.target.value })} />
        </div>
        <div>
          phone: <input type="text" onChange={e => this.setState({ phone: e.target.value })} />
        </div>
        <div>
          details: <input type="text" onChange={e => this.setState({ details: e.target.value })} />
        </div>
        
        <button onClick={this.postData}>SUBMIT</button>
      </div>
    );
  }
}

export default connect(() => ({}), MongoActions)(Form);