'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../actions/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function listHolderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var newState = state;

  switch (action.type) {
    case types.DELETE_ITEM:
    case types.GET_ALL_ITEMS:
      return action.items;
    case types.ADD_ITEM:
      newState._embedded.items.push(action.item); // eslint-disable-line
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(state), [newState]));
    default:
      return state;
  }
}

exports.default = listHolderReducer;