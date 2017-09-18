import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import * as moviesReducer from './moviesReducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  counterReducer,
  moviesReducer: moviesReducer.moviesReducer,
  movieReducer: moviesReducer.movieReducer,
});

export default allReducers;
