import React from 'react';

export default class CommonHeader extends React.Component {
  getStyles() {
    const headerHeight = '75px'
    return {
      header: {
        height: headerHeight,
        top: 0,
        width: '100vw',
        color: 'white',
        lineHeight: headerHeight,
        backgroundColor: 'slateGrey',
        boxShadow: '5px 5px 3px grey',
        zIndex: '100',
      },
      title: {
        lineHeight: '90px',
      },
      button: {
        cursor: 'pointer',
        float: 'left',
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
      },
      icon: {
        fontSize: '50px',
        padding: '8px',
        lineHeight: '77px',
      }
    }
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.header}>
        <button style={styles.button} onClick={this.props.back}>
          <i className="material-icons" style={styles.icon}>arrow_back</i>
        </button>
        <h1 style={styles.title}>Not Just a Handout</h1>
      </div>
    );
  }
}