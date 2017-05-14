import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { Menu } from 'semantic-ui-react';

import store from '../store/store';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeMenuItem: 'home'
    };
  }

  handleMenuItemClick = (e, { name, to }) => {
    this.setState({ activeMenuItem: name });
    store.dispatch(push(to));
  }

  render() {

    const { activeMenuItem } = this.state;

    return (
      <Menu>
            <Menu.Item
              name='home'
              to="/"
              active={activeMenuItem === 'home'}
              onClick={this.handleMenuItemClick}
            >
              Home
            </Menu.Item>

            <Menu.Item
              name='gif'
              to="/gif"
              active={activeMenuItem === 'gif'}
              onClick={this.handleMenuItemClick}
            >
              gif
            </Menu.Item>

            <Menu.Item
              name='blog'
              to="/blog"
              active={activeMenuItem === 'blog'}
              onClick={this.handleMenuItemClick}
            >
              Blog
            </Menu.Item>

            <Menu.Item
              name='about'
              to="/about"
              active={activeMenuItem === 'about'}
              onClick={this.handleMenuItemClick}
            >
              About
            </Menu.Item>
            <Menu.Item
              name='contact'
              to="/contact"
              active={activeMenuItem === 'contact'}
              onClick={this.handleMenuItemClick}
            >
              Contact
            </Menu.Item>
          </Menu>
    );
  }
}