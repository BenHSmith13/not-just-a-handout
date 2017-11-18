import React from 'react';
import Header from '../common/common_header';
import Form from './form';
import food from '../../assets/food.jpeg';

export default class Vendor extends React.Component {
  getStyles = () => {
    return {
      main: {
        backgroundImage: `url(${food})`,
        height: '100%',
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
          <Form />
        </div>
      </div>
    );
  }
}
