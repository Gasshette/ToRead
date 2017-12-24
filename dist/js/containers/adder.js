'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _adderActions = require('../actions/adderActions');

var _adder = require('../components/adder');

var _adder2 = _interopRequireDefault(_adder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps() {
  return {};
};

// "{}" around our action are IMPORTANT. Without it, your action will be "undefined"
var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ addItem: _adderActions.addItem }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(_adder2.default);