import * as types from './ActionTypes';

export const addLine = line => ({
  type: types.ADD_LINE,
  line,
});

export const deleteLine = id => ({
  type: types.DELETE_LINE,
  id,
});
