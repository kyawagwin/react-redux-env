import React, { Component } from 'react';

import './search_bar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };
  }

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div className="ui icon input searchbar">
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={ this.handleChange }  
        />
        <i className="search icon"></i>
      </div>
    );
  }
}

export default SearchBar;