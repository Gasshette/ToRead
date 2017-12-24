'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteOne = exports.updateOne = exports.addOne = exports.getAll = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_PATH = "http://localhost:8080/api";

var err = function err(error) {
  return console.log('An error occured : ', error);
};

var getAll = exports.getAll = function getAll() {
  return (0, _isomorphicFetch2.default)(BASE_PATH + '/items').then(function (response) {
    if (!response.ok) {
      Promise.reject(response);
    }
    return response.json();
  }, function (error) {
    return err(error);
  });
};

// add one or more, doesn't matter since api is getting our request body as a List<Item>
var addOne = exports.addOne = function addOne(item) {
  return (0, _isomorphicFetch2.default)(BASE_PATH + '/items', {
    method: "POST",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(item)
  }).then(function (response) {
    return response.json();
  }, function (error) {
    return err(error);
  });
};

var updateOne = exports.updateOne = function updateOne(item) {
  var myItem = JSON.parse(item); // Why am i forced to do this ?

  return (0, _isomorphicFetch2.default)('' + JSON.parse(item)._links.item.href, {
    method: "PATCH",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(myItem)
  }).then(function (response) {
    return response.json();
  }, function (error) {
    return err(error);
  });
};

var deleteOne = exports.deleteOne = function deleteOne(item) {
  return (0, _isomorphicFetch2.default)('' + JSON.parse(item)._links.item.href, { method: "DELETE" }).then(function () {
    return item;
  }, function (error) {
    return err(error);
  });
};