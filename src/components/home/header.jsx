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
        lineHeight: headerHeight,
        backgroundAttachment: 'fixed',
      },
    }
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.header}>
        <h1>Not Just a Handout</h1>
      </div>
    );
  }
}