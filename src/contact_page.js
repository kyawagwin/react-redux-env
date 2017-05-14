import React, { Component } from 'react';

import ContactForm from './contact_form';

export default class ContactPage extends Component {
  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit} />
    );
  }
}