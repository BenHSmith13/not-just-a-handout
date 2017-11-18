import React from 'react';
import Header from '../common/common_header';
import Map from './map';
import List from './list';
import hands from '../../assets/hands.jpeg';


export default class Involved extends React.Component {
  getStyles = () => {
    return {
      main: {
        backgroundImage: `url(${hands})`,
        height: '103vh',
        position: 'relative',
      },
      overlay: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'slateGrey',
        opacity: '0.5',
      },
      content: {
        position: 'relative',
        color: 'white',
      }
    };
  }
  
  render(){
    const styles = this.getStyles();
    return (
      <div style={styles.main}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <Header back={this.props.back} />
          <Map />
          <List />
        </div>
      </div>
    );
  }
}
