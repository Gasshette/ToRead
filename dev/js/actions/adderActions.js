import * as types from './ActionTypes';
import * as ToReadAPI from '../api/api';

export const addItemSuccess = items => ({
  type: types.ADD_ITEM,
  items,
});

export const addItem = item => dispatch => ToReadAPI.addOne(item)
  .then(() => ToReadAPI.getAll()
  .then(json => dispatch(addItemSuccess(json))));
