import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';
import Header from './header';
import hands from '../../assets/hands.jpeg';
import people from '../../assets/people.jpeg';
import food from '../../assets/food.jpeg';
import vetPic from '../../assets/VeteranStat.jpeg';

function select(state) {
  return {
    stateHomeless: state.openData.generalHomeless,
  }
}

export class Home extends React.Component {
  data01 = () => {
    const { stateHomeless } = this.props;
    return {
      title: '',
      xAxis: {
        categories: _.map(stateHomeless, h => h.year),
      },
      series: [
        {
          data: _.map(stateHomeless, h => _.toInteger(h.annualized_homess_person_count)),
          name: 'Total Homeless Persons',
        },
        {
          data: _.map(stateHomeless, h => _.toInteger(h.number_of_homeless_persons_in_families)),
          name: 'Homeless Persons in Families',
        },
        {
          data: _.map(stateHomeless, h => _.toInteger(h.number_of_chronically_homeless_persons)),
          name: 'Chronically Homeless Persons',
        },
      ],
    };
  }

  getStyles = () => {
    const sectionHeight = '400px';
    const statHeight = '460px';
    return {
      stats: {
        height: statHeight,
        backgroundColor: 'slateGrey',
        color: 'white',
        padding: '5px',
      },
      involved: {
        height: sectionHeight,
        color: 'white',
        cursor: 'pointer',
        backgroundImage: `url(${hands})`,
        backgroundPosition: 'center',
        position: 'relative',
        padding: '5px',
      },

      event: {
        height: sectionHeight,
        color: 'white',
        cursor: 'pointer',
        backgroundImage: `url(${people})`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '5px',
      },
      eventSub: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'slateGrey',
        opacity: '0.5',
        zIndex: '3',
        top: '0',
        right: '0',
      },
      eventText: {
        zIndex: '5',
        position: 'relative',
      },
      vendor: {
        height: sectionHeight,
        color: 'white',
        cursor: 'pointer',
        backgroundImage: `url(${food})`,
        backgroundPosition: 'center',
        position: 'relative',
        padding: '5px',
      },

    };
  }

  render(){
    const styles = this.getStyles();
    return (
      <div>
        <Header />

        <div style={styles.stats}>
          <h3>Homelessness in Utah</h3>
          <ReactHighcharts config={this.data01()}/>
        </div>

        <div style={styles.involved} onClick={() => this.props.setRoute('involved')}>
          <div style={styles.eventSub}></div>
          <div style={styles.eventText}>
            <h3>Get Involved</h3>
            Looking for an opportunity to serve the community? Look no further.
          </div>
        </div>
        
        <div style={styles.stats}>
          <h3>Homeless in your Area</h3>
          <div><iframe width="700px" title="Homeless Headcount Salt Lake County 2011-2014" height="425px" src="https://opendata.utah.gov/w/7zgr-ceqa/u7hz-5yd9?cur=OOJiQmZqZ42&from=root" frameborder="0"scrolling="no"><a href="https://opendata.utah.gov/Social-Services/Homeless-Headcount-Salt-Lake-County-2011-2014/7zgr-ceqa" title="Homeless Headcount Salt Lake County 2011-2014" target="_blank">Homeless Headcount Salt Lake County 2011-2014</a></iframe><p><a href="http://www.socrata.com/" target="_blank">Powered by Socrata</a></p></div>
        </div>

        <div style={styles.event} onClick={() => this.props.setRoute('event')}>
          <div style={styles.eventSub}></div>
          <div style={styles.eventText}>
            <h3>Organizing an Event</h3>
            Are giving out food, cutting hair, or providing jo training? Post your event here to get it in the hands of those who need it most.
          </div>
        </div>

        <div style={styles.stats}>
          Nationally, about 13 percent of the adult homeless
          population is made up of veterans while only 7
          percent of the national population has veteran status
          (National Coalition for Homeless Veterans).
          <div style={{ marginTop: '20px' }}><img src={vetPic} /></div>
        </div>

        <div style={styles.vendor} onClick={() => this.props.setRoute('vendor')}>
          <div style={styles.eventSub}></div>
          <div style={styles.eventText}>
            <h3>Service Vendors</h3>
            Do you run a shelter, food pantry, or other service? Add your service here.
          </div>
        </div>
      </div>
    );
  }
}

export default connect(select, {})(Home);
