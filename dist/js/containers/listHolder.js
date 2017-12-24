'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _listHolder = require('../components/listHolder');

var _listHolder2 = _interopRequireDefault(_listHolder);

var _redux = require('redux');

var _listHolderActions = require('../actions/listHolderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProp = function mapStateToProp(state) {
  return {
    items: state.items
  };
};

// "{}" around our action are IMPORTANT. Without it, your action will be "undefined"
var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ deleteItem: _listHolderActions.deleteItem, updateItem: _listHolderActions.updateItem }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProp, matchDispatchToProps)(_listHolder2.default);