import { connect } from 'react-redux';

import Blog from '../components/blog';
import { getBlog } from '../actions/get_blog';
import { addBlog } from '../actions/add_blog';
import { watchBlogAddedEvent } from '../actions/blog_added_event';

function mapStateToProps(state) {
  return {
    blog: state.blog
  };
}

function mapDispatchToProps(dispatch) {
  watchBlogAddedEvent(dispatch);
  return {
    onGetBlog: () => dispatch(getBlog()),
    onAddBlog: (blog) => dispatch(addBlog(blog))
  };
}

const blogContainer = connect(mapStateToProps,mapDispatchToProps)(Blog);

export default blogContainer;