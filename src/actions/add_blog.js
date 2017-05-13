import database from './database';
import ActionTypes from '../constants/action_types';

export function addBlog(blog) {
  return dispatch => {
    dispatch(addBlogRequestedAction);
    const blogRef = database.ref('/blogs');
    blogRef.push(blog).then(() => {
      dispatch(addBlogFulfilledAction(blog));
    })
    .catch((error) => {
      console.log(error);
      dispatch(addBlogRejectedAction());
    });
  };
}

function addBlogRequestedAction() {
  return {
    type: ActionTypes.AddBlogRequested
  }
}

function addBlogFulfilledAction(blog) {
  return {
    type: ActionTypes.AddBlogFulfilled,
    blog
  }
}

function addBlogRejectedAction() {
  return {
    type: ActionTypes.AddBlogRejected
  }
}