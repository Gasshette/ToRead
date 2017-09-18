import * as types from './ActionTypes';

export const deleteLine = id => ({
  type: types.DELETE_LINE,
  id,
});

export const getAllLines = () => ({
  type: types.GET_ALL_LINES,
});

