'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItem = exports.addItemSuccess = undefined;

var _ActionTypes = require('./ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

var _api = require('../api/api');

var ToReadAPI = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addItemSuccess = exports.addItemSuccess = function addItemSuccess(item) {
  return {
    type: types.ADD_ITEM,
    item: item
  };
};

var addItem = exports.addItem = function addItem(item) {
  return function (dispatch) {
    return ToReadAPI.addOne(item).then(function (json) {
      return dispatch(addItemSuccess(json));
    });
  };
};