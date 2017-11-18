import React from 'react';
import Header from './header';
import hands from '../../assets/hands.jpeg';
import people from '../../assets/people.jpeg';
import food from '../../assets/food.jpeg';

export default class Home extends React.Component {
  constructor() {
    super();
  }
  
  getStyles = () => {
    const sectionHeight = '200px';
    return {
      stats: {
        height: sectionHeight,
        backgroundColor: 'slateGrey',
        color: 'white',
      },
      involved: {
        height: sectionHeight,
        color: 'white',
        cursor: 'pointer',
        backgroundImage: `url(${hands})`,
        backgroundPosition: 'center',
      },
      
      event: {
        height: sectionHeight,
        color: 'white',
        cursor: 'pointer',
        backgroundImage: `url(${people})`,
        backgroundAttachment: 'fixed',
        position: 'relative',
      },
      eventSub: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'slateGrey',
        opacity: '0.5',
        zIndex: '3',
      },
      eventText: {
        zIndex: '5',
      },
      vendor: {
        height: sectionHeight,
        color: 'white',
        cursor: 'pointer',
        backgroundImage: `url(${food})`,
        backgroundPosition: 'center',
        position: 'relative',
      },
      
    };
  }
  
  render(){
    const styles = this.getStyles();
    return (
      <div>
        <Header />
        
        <div style={styles.stats}>
          <h3>In your county there are X homeless individuals and families</h3>
          // TODO: some stats graph based on your location
        </div>
        
        <div style={styles.involved} onClick={() => this.props.setRoute('involved')}>
          <div style={styles.eventSub}></div>
          <h3>Get Involved</h3>
          Looking for an opportunity to serve the community? Look no further.
        </div>
        
        <div style={styles.stats}>
          <h3>More stats</h3>
        </div>
        
        <div style={styles.event} onClick={() => this.props.setRoute('event')}>
          <div style={styles.eventSub}></div>
          <div style={styles.eventText}>
            <h3>Organizing an Event</h3>
            Are giving out food, cutting hair, or providing jo training? Post your event here to get it in the hands of those who need it most.
          </div>
        </div>
        
        <div style={styles.stats}>
          <h3>More stats</h3>
        </div>
        
        <div style={styles.vendor} onClick={() => this.props.setRoute('vendor')}>
          <div style={styles.eventSub}></div>
          <h3>Service Vendors</h3>
          Do you run a shelter, food pantry, or other service? Add your service here.
        </div>
        
      </div>
    );
  }
}
