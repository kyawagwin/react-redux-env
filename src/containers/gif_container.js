import { connect } from 'react-redux';

import GifApp from '../components/gif_app';

function mapStateToProps(state) {
  return {
    gif: state.gif
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const gifContainer = connect(mapStateToProps, mapDispatchToProps)(GifApp);

export default gifContainer;