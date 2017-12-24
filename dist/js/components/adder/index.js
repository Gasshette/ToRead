'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./adder.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Adder = function (_React$Component) {
  _inherits(Adder, _React$Component);

  function Adder() {
    _classCallCheck(this, Adder);

    // Binding function used to trigger our actions.
    // A you when you're using a compass to find the north,
    // event (here, onClick) need to know their context to execute correctly
    var _this = _possibleConstructorReturn(this, (Adder.__proto__ || Object.getPrototypeOf(Adder)).call(this));

    _this.addItem = _this.addItem.bind(_this);
    _this.reset = _this.reset.bind(_this);
    _this.defineState = _this.defineState.bind(_this);

    _this.state = { name: '' };
    return _this;
  }

  _createClass(Adder, [{
    key: 'addItem',
    value: function addItem() {
      this.props.addItem(this.state);
    }
  }, {
    key: 'reset',
    value: function reset() {
      (0, _jquery2.default)('#adder-component input').val('');
      (0, _jquery2.default)('#adder-component input').attr('value', '');
      this.setState({ name: '' });
    }
  }, {
    key: 'defineState',
    value: function defineState() {
      this.setState({
        name: (0, _jquery2.default)("input[name=itemName").val(),
        chapterNumber: (0, _jquery2.default)("input[name=chapterNumber").val(),
        step: (0, _jquery2.default)("input[name=step").val()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'adder-component', className: 'form-input form-inline' },
        _react2.default.createElement('input', {
          className: 'form-control input-lg',
          type: 'Text',
          placeholder: 'Name',
          name: 'itemName',
          onChange: this.defineState
        }),
        _react2.default.createElement('input', { type: 'number', className: 'form-control input-lg', name: 'chapterNumber', defaultValue: '0', min: '0', onChange: this.defineState }),
        _react2.default.createElement('input', { type: 'number', className: 'form-control input-lg', name: 'step', step: '0.1', defaultValue: '1', min: '0.1', onChange: this.defineState }),
        _react2.default.createElement(
          'abbr',
          { title: 'Add your line ! :)' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-success btn-lg',
              id: 'lineName',
              name: 'lineName',
              onClick: this.addItem
            },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok' })
          )
        ),
        _react2.default.createElement(
          'abbr',
          { title: 'Erase the form... :/' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-lg',
              onClick: this.reset
            },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-refresh' })
          )
        )
      );
    }
  }]);

  return Adder;
}(_react2.default.Component);

Adder.propTypes = {
  addItem: _propTypes2.default.func.isRequired
};

// Adder.defaultProps = {
//   addLine: () => console.log('coucou'),
// };

exports.default = Adder;