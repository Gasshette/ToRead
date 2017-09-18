import * as types from '../actions/ActionTypes';

export function moviesReducer(state = {}, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return Object.assign({}, ...state, action.movies);
    default:
      return state;
  }
}

export function movieReducer(state = {}, action) {
  switch (action.type) {
    case types.GET_MOVIE:
      return Object.assign({}, ...state, action.movies.movies[action.id]);
    default:
      return state;
  }
}

