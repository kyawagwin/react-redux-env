import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { blogReducer } from './blog_reducer';
import { authReducer } from './auth_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  router: routerReducer,
  form: formReducer
});

export default rootReducer;