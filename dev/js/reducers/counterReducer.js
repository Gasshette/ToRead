import * as types from '../actions/ActionTypes';

function counterReducer(state = [], action) {
  switch (action.type) {
    case types.INCREASE_COUNTER:
      return Object.assign([], ...state, {
        counter: action.counter,
        message: 'Counter increased ! :)',
      });
    case types.DECREASE_COUNTER:
      return Object.assign([], ...state, {
        counter: action.counter,
        message: 'Counter decreased ! :(',
      });
    default:
      return state;
  }
}

export default counterReducer;
