import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation ) {
    errors.password = 'Passwords do not match';
  }

  return errors;
};

class SignUpForm extends Component {
  handleSubmit = (values) => {
    this.props.signUpUser(values);
  };

  renderAuthenticationError() {
    if (this.props.auth.error) {
      return <div>{ this.props.auth.error }</div>;
    }
    return <div></div>;
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  render() {
    return (
      <div>
        { this.renderAuthenticationError() }
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password"/>
          </div>
          <div className="field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" component="input" type="password"/>
          </div>
          <button type="submit" className="ui button">Sign Up</button>
        </form>
      </div>
    );
  }
}

SignUpForm = reduxForm({
  form: 'signup',
  validate
})(SignUpForm);

export default SignUpForm;