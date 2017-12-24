'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./listHolder.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListHolder = function (_React$Component) {
  _inherits(ListHolder, _React$Component);

  function ListHolder() {
    _classCallCheck(this, ListHolder);

    // Binding function used to trigger our actions.
    // A you when you're using a compass to find the north,
    // event (here, onClick) need to know their context to execute correctly
    var _this = _possibleConstructorReturn(this, (ListHolder.__proto__ || Object.getPrototypeOf(ListHolder)).call(this));

    _this.getItemDatas = _this.getItemDatas.bind(_this);
    _this.delete = _this.delete.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.listBuilder = _this.listBuilder.bind(_this);
    return _this;
  }

  _createClass(ListHolder, [{
    key: 'getItemDatas',
    value: function getItemDatas(e) {
      return (0, _jquery2.default)(e.target).closest('li').data('item');
    }
  }, {
    key: 'delete',
    value: function _delete(e) {
      var itemToDelete = this.getItemDatas(e);
      this.props.deleteItem(JSON.stringify(itemToDelete));
    }
  }, {
    key: 'update',
    value: function update(e) {
      var itemToUpdate = this.getItemDatas(e);
      itemToUpdate.chapterNumber = e.target.value;
      this.props.updateItem(JSON.stringify(itemToUpdate));
    }
  }, {
    key: 'listBuilder',
    value: function listBuilder() {
      var _this2 = this;

      return this.props.items._embedded.items.map(function (item) {
        return _react2.default.createElement(
          'li',
          { key: item._links.item.href, 'data-item': JSON.stringify(item) },
          _react2.default.createElement(
            'div',
            { className: 'flex-container' },
            _react2.default.createElement(
              'div',
              { className: 'flex-content' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-warning', onClick: _this2.delete },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex-content' },
              item.name
            ),
            _react2.default.createElement(
              'div',
              { className: 'flext-content' },
              _react2.default.createElement('input', { type: 'number', step: item.step, className: 'form-control', defaultValue: item.chapterNumber, onChange: _this2.update })
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var content = void 0;
      if (JSON.stringify(this.props.items) !== JSON.stringify({})) {
        content = _react2.default.createElement(
          'div',
          { id: 'listholder-component' },
          _react2.default.createElement(
            'ul',
            null,
            this.listBuilder()
          )
        );
      } else {
        content = _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }
      return content;
    }
  }]);

  return ListHolder;
}(_react2.default.Component);

ListHolder.propTypes = {
  deleteItem: _propTypes2.default.func.isRequired,
  updateItem: _propTypes2.default.func.isRequired,
  items: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.number])).isRequired
};

exports.default = ListHolder;