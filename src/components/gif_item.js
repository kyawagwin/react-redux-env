import React, { Component } from 'react';

const GifItem = ({ gif, onGifSelect }) => {
  return (
    <li onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} />
    </li>
  );
};

export default GifItem;