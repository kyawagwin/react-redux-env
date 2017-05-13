import ActionTypes from '../constants/action_types';
import database from './database';

export function getBlog() {
  return dispatch => {
    dispatch(getBlogRequestedAction());
    return database.ref('/blogs').once('value', snap => {
      const blogs = snap.val();
      dispatch(getBlogFulfilledAction(blogs))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getBlogRejectedAction());
    });
  }
}

function getBlogRequestedAction() {
  return {
    type: ActionTypes.GetBlogRequested
  }
}

function getBlogFulfilledAction(blogs) {
  return {
    type: ActionTypes.GetBlogFulfilled,
    blogs
  }
}

function getBlogRejectedAction() {
  return {
    type: ActionTypes.GetBlogRejected
  }
}