"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _user = _interopRequireDefault(require("./user.reducer"));

var _users = _interopRequireDefault(require("./users.reducer"));

var _post = _interopRequireDefault(require("./post.reducer"));

var _message = _interopRequireDefault(require("./message.reducer"));

var _errors = _interopRequireDefault(require("./errors.reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  // user: userReducer,
  userReducer: _user["default"],
  usersReducer: _users["default"],
  // posts: postsReducer,
  postReducer: _post["default"],
  // conversation: conversationReducer,
  messageReducer: _message["default"],
  // error: errorReducer
  errorReducer: _errors["default"]
});

exports["default"] = _default;