'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./displayer.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Displayer = function Displayer(props) {
  return _react2.default.createElement(
    'div',
    { id: 'displayer-component' },
    _react2.default.createElement(
      'div',
      { className: 'displayer-content' },
      props.children
    )
  );
};

/*eslint-disable */
Displayer.propTypes = {
  children: _propTypes2.default.object.isRequired
};

exports.default = Displayer;