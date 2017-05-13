import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import history from '../history';
import rootReducer from '../reducers/root_reducer';

const logger = createLogger();
const router = routerMiddleware(history); 

const store = createStore(
  rootReducer, 
  {}, 
  applyMiddleware(thunk, logger, router)
);

export default store;