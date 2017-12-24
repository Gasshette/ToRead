'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _listHolderReducer = require('./listHolderReducer');

var _listHolderReducer2 = _interopRequireDefault(_listHolderReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

var allReducers = (0, _redux.combineReducers)({
  items: _listHolderReducer2.default

});
// import adderReducer from './adderReducer';
exports.default = allReducers;