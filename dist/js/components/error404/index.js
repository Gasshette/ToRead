"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error404 = function Error404() {
  return _react2.default.createElement(
    "div",
    { id: "error404-component" },
    _react2.default.createElement(
      "h3",
      null,
      "Ooops..."
    ),
    _react2.default.createElement(
      "p",
      null,
      "The page you are looking for does not exists, sorry !"
    )
  );
};

exports.default = Error404;