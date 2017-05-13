import ActionTypes from '../constants/action_types';
import database from './database';

export function watchBlogAddedEvent(dispatch) {
  database.ref('/blogs').on('child_added', (snap) => {
    const blog = snap.val();
    blog.id = snap.key;
    dispatch(getBlogAddedAction(blog));
  });
}

function getBlogAddedAction(blog) {
  return {
    type: ActionTypes.BlogAdded,
    blog
  }
}