'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _app = require('./appWrapper/app');

var _app2 = _interopRequireDefault(_app);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

require('../scss/style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_app2.default, null)
  )
), document.getElementById('root'));