import * as types from '../actions/ActionTypes';


function listHolderReducer(state = {}, action) {
  const newState = state;

  switch (action.type) {
    case types.GET_ALL_ITEMS:
      return action.items;
    case types.ADD_ITEM:
      newState._embedded.items.push(action.item); // eslint-disable-line
      return Object.assign({}, ...state, newState);
    default:
      return state;
  }
}

export default listHolderReducer;
