import * as types from './ActionTypes';
import * as ToReadAPI from '../api/api';

export const addItemSuccess = item => ({
  type: types.ADD_ITEM,
  item,
});

export const addItem = item => dispatch => ToReadAPI.addOne(item)
  .then(json => dispatch(addItemSuccess(json)));
