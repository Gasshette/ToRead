'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./header.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    { id: 'header-component' },
    _react2.default.createElement(
      'h1',
      null,
      'ToRead App'
    ),
    _react2.default.createElement(
      'p',
      null,
      'To keep tracks on what you\'re reading, because I know remembering things is hard for you..'
    )
  );
};

exports.default = Header;