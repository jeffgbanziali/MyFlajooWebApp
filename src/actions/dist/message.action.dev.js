"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessage = exports.GET_MESSAGE = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET_MESSAGE = "GET_MESSAGE";
exports.GET_MESSAGE = GET_MESSAGE;

var getMessage = function getMessage(uid) {
  return function (dispatch) {
    return _axios["default"].get("http://localhost:5000/api/message/".concat(uid)).then(function (res) {
      dispatch({
        type: GET_MESSAGE,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.getMessage = getMessage;