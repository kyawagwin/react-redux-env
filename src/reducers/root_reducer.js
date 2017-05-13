import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { blogReducer } from './blog_reducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  router: routerReducer
});

export default rootReducer;