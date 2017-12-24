'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _adder = require('../../containers/adder');

var _adder2 = _interopRequireDefault(_adder);

var _listHolder = require('../../containers/listHolder');

var _listHolder2 = _interopRequireDefault(_listHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { id: 'home-component' },
    _react2.default.createElement(_adder2.default, null),
    _react2.default.createElement(_listHolder2.default, null)
  );
};

exports.default = Home;