import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from '../reducers';
import * as listHolderActions from '../actions/listHolderActions';

/* eslint-disable */
const logger = createLogger();
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, promise, logger),
);
/* eslint-enable */

store.dispatch(listHolderActions.getAllItems());

export default store;
