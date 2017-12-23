import * as types from './ActionTypes';
import * as ToReadAPI from '../api/api';


export const getAllItemsSuccess = items => ({
  type: types.GET_ALL_ITEMS,
  items,
});

export const getAllItems = () => dispatch =>
  ToReadAPI.getAll()
  .then(json => dispatch(getAllItemsSuccess(json)),
  );

export const updateItemSuccess = items => ({
  type: types.UPDATE_ITEM,
  items,
});

export const updateItem = item => dispatch =>
ToReadAPI.updateOne(item)
.then(() => ToReadAPI.getAll()
  .then(newJson => dispatch(updateItemSuccess(newJson))),
);

export const deleteItemSuccess = items => ({
  type: types.DELETE_ITEM,
  items,
});

export const deleteItem = item => dispatch =>
ToReadAPI.deleteOne(item)
.then(() => ToReadAPI.getAll()
  .then(newJson => dispatch(deleteItemSuccess(newJson))),
);

export default getAllItems;
