import { connect } from 'react-redux';

import SignUpPage from '../signup_page';
import * as Actions from '../actions/auth';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return Actions;
}

const signupContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

export default signupContainer;