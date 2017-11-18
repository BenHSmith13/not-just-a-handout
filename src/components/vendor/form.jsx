import React from 'react';
import { connect } from 'react-redux';
import * as MongoActions from '../../actions/mongo';

export class Form extends React.Component {
  constructor() {
    super();
    
    this.state = {
      submitted: false,
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
    });
    
    this.setState({
      submitted: true,
      type: '',
      name: '',
      url: '',
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
        padding: '10px',
      }
    }
  }
  
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.container}>
        {this.state.submitted ? <h3>Thank you!</h3> : null}
        <form>
          <div class="form-group">
            <label for="SelectType">Type</label>
            <select className="form-control form-control-sm" id="SelectType" onChange={e => this.setState({ type: e.target.value })}>
              <option value="Outreach Program">Outreach Program</option>
              <option value="Prepared Meals">Prepared Meals</option>
              <option value="Food Pantry">Food Pantry</option>
              <option value="Clothing, Personal Care, and other Necessities">Clothing, Personal Care, and other Necessities</option>
              <option value="Medical Resource">Medical Resource</option>
              <option value="Addiction Recovery Resource">Addiction Recovery Resource</option>
              <option value="Support Group">Support Group</option>
              <option value="Education and Legal Service">Education and Legal Service</option>
              <option value="Family Support Service">Family Support Services</option>
              <option value="Housing Service">Housing Service</option>
              <option value="Mental Health, Counseling, and Crisis Lines">Mental Health, Counseling, and Crisis Lines</option>
              <option value="Employment Service">Employment Service</option>
              <option value="Veteran Service">Veteran Service</option>
              <option value="Resources for Children">Resources for Children</option>
              <option value="Service Providers and Governmental Agencies">Service Providers and Governmental Agencies</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>
          
          <div className="form-group">
            <label for="InputName">Name</label>
            <input 
              onChange={e => this.setState({ name: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputName" 
              placeholder="Company Name" 
            />
          </div>
          <div className="form-group">
            <label for="InputUrl">Website</label>
            <input 
              onChange={e => this.setState({ url: e.target.value })} 
              type="text" 
              className="form-control form-control-sm" 
              id="InputUrl" 
              placeholder="example.com" 
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

export default connect(() => ({}), MongoActions)(Form);