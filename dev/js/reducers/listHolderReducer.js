import * as types from '../actions/ActionTypes';


function listHolderReducer(state = {}, action) {
  // const newState = state;

  switch (action.type) {
    case types.DELETE_ITEM:
    case types.GET_ALL_ITEMS:
    case types.ADD_ITEM:
      return action.items;
    // newState._embedded.items.push(action.item); // eslint-disable-line
      // return Object.assign({}, ...state, newState);
    case types.UPDATE_ITEM:
    default:
      return state;
  }
}

export default listHolderReducer;
