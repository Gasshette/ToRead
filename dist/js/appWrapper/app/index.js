'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _displayer = require('../displayer');

var _displayer2 = _interopRequireDefault(_displayer);

var _home = require('../../components/home');

var _home2 = _interopRequireDefault(_home);

var _error = require('../../components/error404');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_header2.default, null),
    _react2.default.createElement(
      'main',
      null,
      _react2.default.createElement(
        _displayer2.default,
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _error2.default })
        )
      )
    )
  );
};

exports.default = App;