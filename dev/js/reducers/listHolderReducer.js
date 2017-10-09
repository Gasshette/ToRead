import * as types from '../actions/ActionTypes';

function listHolderReducer(state = [], action) {
  switch (action.type) {
    case types.GET_ALL_ITEMS:
      return [...action.items];
    default:
      return state;
  }
}

export default listHolderReducer;
