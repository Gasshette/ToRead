'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItem = exports.deleteItemSuccess = exports.updateItem = exports.updateItemSuccess = exports.getAllItems = exports.getAllItemsSuccess = undefined;

var _ActionTypes = require('./ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

var _api = require('../api/api');

var ToReadAPI = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getAllItemsSuccess = exports.getAllItemsSuccess = function getAllItemsSuccess(items) {
  return {
    type: types.GET_ALL_ITEMS,
    items: items
  };
};

var getAllItems = exports.getAllItems = function getAllItems() {
  return function (dispatch) {
    return ToReadAPI.getAll().then(function (json) {
      return dispatch(getAllItemsSuccess(json));
    });
  };
};

var updateItemSuccess = exports.updateItemSuccess = function updateItemSuccess(items) {
  return {
    type: types.UPDATE_ITEM,
    items: items
  };
};

var updateItem = exports.updateItem = function updateItem(item) {
  return function (dispatch) {
    return ToReadAPI.updateOne(item).then(function () {
      return ToReadAPI.getAll().then(function (newJson) {
        return dispatch(updateItemSuccess(newJson));
      });
    });
  };
};

var deleteItemSuccess = exports.deleteItemSuccess = function deleteItemSuccess(items) {
  return {
    type: types.DELETE_ITEM,
    items: items
  };
};

var deleteItem = exports.deleteItem = function deleteItem(item) {
  return function (dispatch) {
    return ToReadAPI.deleteOne(item).then(function () {
      return ToReadAPI.getAll().then(function (newJson) {
        return dispatch(deleteItemSuccess(newJson));
      });
    });
  };
};

exports.default = getAllItems;