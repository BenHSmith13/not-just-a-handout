import React from 'react';
import request from 'superagent'

export default class Header extends React.Component {

  postUser() {
    request
      .post('/http://localhost:8000/user')
      .send({ userId: 'Manny', species: 'cat' })
      .end((err, res) => {
        // Do something
      });
  }

  render() {
    this.postUser();
    return (
      <div>User Page</div>
    );
  }
}