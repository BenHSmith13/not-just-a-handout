import React from 'react';
import { connect } from 'react-redux';
import * as MongoActions from '../../actions/mongo';

export class EventForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      submitted: false,
      name: '',
      time: '',
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
      type: 'Event',
      name: `${this.state.name}: ${this.state.time}`,
      address: {
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      },
      phone: this.state.phone,
      details: this.state.details,
    });
    
    this.setState({
      submitted: true,
      type: '',
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      details: '',
    });
  }
  
  getStyles = () => {
    return {
      container: {
        width: '800px',
        margin: 'auto',
        textAlign: 'left',
        padding: '20px',
      }
    }
  }
  
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.container}>
        {this.state.submitted ? <h3>Thank you!</h3> : null}
        <form>
          <div className="form-group">
            <label for="InputName">Name</label>
            <input 
              onChange={e => this.setState({ name: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputName" 
              placeholder="Ben Smith or Logan Youth Outreach" 
            />
          </div>
          <div className="form-group">
            <label for="InputTime">Time</label>
            <input 
              onChange={e => this.setState({ time: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputTime" 
              placeholder="Tue, Dec 17 from Noon to 7pm" 
            />
          </div>
          <div className="form-group">
            <label for="InputStreet">Street Address</label>
            <input 
              onChange={e => this.setState({ street: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputStreet" 
              placeholder="123 Fake St." 
            />
          </div>
          <div className="form-group">
            <label for="InputCity">City</label>
            <input 
              onChange={e => this.setState({ city: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputCity" 
              placeholder="Logan" 
            />
          </div>
          <div className="form-group">
            <label for="InputState">State</label>
            <input 
              onChange={e => this.setState({ state: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputState" 
              placeholder="UT" 
            />
          </div>
          <div className="form-group">
            <label for="InputZip">Zip Code</label>
            <input 
              onChange={e => this.setState({ zip: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputZip" 
              placeholder="84123" 
            />
          </div>
          <div className="form-group">
            <label for="InputPhone">Phone Number</label>
            <input 
              onChange={e => this.setState({ phone: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputName" 
              placeholder="(801) 555-1234" 
            />
          </div>
          
          <div className="form-group">
            <label for="DetailsTextarea">Details</label>
            <textarea onChange={e => this.setState({ details: e.target.value })} className="form-control form-control-sm" id="DetailsTextarea" rows="3" />
          </div>
          
          <button className="btn btn-primary" onClick={this.postData}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), MongoActions)(EventForm);