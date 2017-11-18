import React from 'react';
import image from '../../assets/homeless.jpeg';

export default class Header extends React.Component {
  getStyles() {
    const headerHeight = '400px'
    return {
      header: {
        backgroundImage: `url(${image})`,
        height: headerHeight,
        // position: 'absolute',
        top: 0,
        width: '100vw',
        color: 'white',
        backgroundAttachment: 'fixed',
      },
      text: {
        lineHeight: headerHeight,
      }
    }
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.header}>
        <h1 style={styles.text}>Not Just a Handout</h1>
      </div>
    );
  }
}