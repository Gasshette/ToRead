import * as types from '../actions/ActionTypes';

function adderReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_LINE:
      console.log('my state = ', state);
      return [...state, action.line];
    default:
      return state;
  }
}

export default adderReducer;
