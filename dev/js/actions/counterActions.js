import * as types from './ActionTypes';

// For more information about async call with thunk middleware :
// http://redux.js.org/docs/advanced/AsyncActions.html

// We create an action creator, it's just a function returning an object
// It'll be sent to the reducer
export const increaseCounter = counter => ({
  type: types.INCREASE_COUNTER,
  counter: counter + 1,
});

export const decreaseCounter = counter => ({
  type: types.DECREASE_COUNTER,
  counter: counter - 1,
});

