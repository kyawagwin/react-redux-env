import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import history from './history';
import BlogContainer from './containers/blog_container';
import About from './components/about';

import './App.css';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={BlogContainer} />
          <Route path="/about" component={About} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
