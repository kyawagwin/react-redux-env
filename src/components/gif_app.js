import React, { Component } from 'react';

import GifsTemp from './gifs_temp';

export default class GifApp extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <GifsTemp gifs={ this.props.gif.gifs } />
      </div>
    );
  }
}