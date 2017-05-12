import { connect } from 'react-redux';

import Blog from '../components/blog';

function mapStateToProps(state) {
  return {
    blog: state.blog
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const blogContainer = connect(mapStateToProps,mapDispatchToProps)(Blog);

export default blogContainer;