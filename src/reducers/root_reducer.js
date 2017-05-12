import { combineReducers } from 'redux';

import { blogReducer } from './blog_reducer';

const rootReducer = combineReducers({
  blog: blogReducer
});

export default rootReducer;