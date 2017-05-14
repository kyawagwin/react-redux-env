import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Container, Header } from 'semantic-ui-react';

import About from './components/about';
import ContactPage from './contact_page';
import NavBar from './components/nav_bar';
import SearchBar from './components/search_bar';
import history from './history';
import BlogContainer from './containers/blog_container';
import GifContainer from './containers/gif_container';

import './App.css';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={ history }>
        <Container>
          <Header as="h1">React App</Header>
          <NavBar />
          <Route exact path="/" component={ SearchBar } />
          <Route path="/gif" component={ GifContainer } />
          <Route path="/blog" component={ BlogContainer } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ ContactPage } />
        </Container>
      </ConnectedRouter>
    );
  }
}

export default App;
