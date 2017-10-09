import * as types from '../actions/ActionTypes';

function adderReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, action.item];
    default:
      return state;
  }
}

export default adderReducer;
