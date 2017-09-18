import * as types from './ActionTypes';
import * as apiMock from '../api/api';


export const getMoviesSuccess = movies => ({
  type: types.GET_MOVIES,
  movies,
});

export const getMovies = () => dispatch =>
  apiMock.getMovies()
  .then(json => dispatch(getMoviesSuccess(json)),
  );

export const getMovieSuccess = (movies, id) => ({
  type: types.GET_MOVIE,
  movies,
  id,
});

export const getMovie = id => dispatch =>
  apiMock.getMovies()
  .then(json => dispatch(getMovieSuccess(json, id)),
  );
