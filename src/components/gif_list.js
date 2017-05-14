import React, { Component } from 'react';
import GifItem from './gif_item';


const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={ image.id } gif={ image } onGifSelect={ props.onGifSelect } />
  });

  return (
    <ul>
      { gifItems }
    </ul>
  );
}

export default GifList;