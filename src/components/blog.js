import React from 'react';
import Seed from '../actions/seed';

export default class Blog extends React.Component {
  render() {
    console.log(Seed.blogs);

    return (
      <h1>Hello World!</h1>
    );
  }
}