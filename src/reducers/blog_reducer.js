import ActionTypes from '../constants/action_types';

export function blogReducer(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetBlogRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        success: '',
        error: ''
      });
    }
    case ActionTypes.GetBlogFulfilled: {
      const blogs = action.blogs;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got blogs',
        error: ''
      });
      newState.blogs = [];
      if(blogs) {
        newState.blogs = Object.keys(blogs).map((k) => {
          blogs[k].id = k;
          return blogs[k];
        });
      }
      return newState;
    }
    case ActionTypes.GetBlogRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        success: '',
        error: 'Error getting blogs'
      });
    }

    case ActionTypes.AddBlogRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        success: '',
        error: ''
      });
    }
    case ActionTypes.AddBlogFulfilled: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added blog',
        error: ''
      });
      //newState.blogs = newState.blogs || [];
      //newState.blogs = newState.blogs.slice();
      //newState.blogs.push(blog);

      return newState;
    }
    case ActionTypes.AddBlogRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        success: '',
        error: 'Error adding blog'
      });
    }
    case ActionTypes.BlogAdded: {
      const newState = Object.assign({}, state);
      newState.blogs = newState.blogs || [];
      newState.blogs = newState.blogs.slice();
      newState.blogs.push(action.blog);
      return newState;
    }
    default:
      return state;
  }
};