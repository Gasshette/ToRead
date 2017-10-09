import * as types from './ActionTypes';
import * as ToReadAPI from '../api/api';

export const deleteItem = id => ({
  type: types.DELETE_ITEM,
  id,
});

export const getAllItemsSuccess = items => ({
  type: types.GET_ALL_ITEMS,
  items,
});

export const getAllItems = () => dispatch =>
  ToReadAPI.getAll()
  .then(json => dispatch(getAllItemsSuccess(json)),
  );

export default getAllItems;
