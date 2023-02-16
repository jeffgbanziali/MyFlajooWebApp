"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = postReducer;

var _post = require("../actions/post.actions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _post.GET_POSTS:
      return action.payload;

    case _post.LIKE_POST:
      return state.map(function (post) {
        if (post._id === action.payload.postId) {
          return _objectSpread({}, post, {
            likers: [action.payload.userId].concat(_toConsumableArray(post.likers))
          });
        }

        return post;
      });

    case _post.UNLIKE_POST:
      return state.map(function (post) {
        if (post._id === action.payload.postId) {
          return _objectSpread({}, post, {
            likers: post.likers.filter(function (id) {
              return id !== action.payload.userId;
            })
          });
        }

        return post;
      });

    case _post.ALL_COMMENTS:
      return state.map(function (post) {
        if (post._id === action.payload.postId) {
          return _objectSpread({}, post, {
            comments: action.payload.comments
          });
        } else return post;
      });

    case _post.ADD_COMMENT:
      return state.map(function (post) {
        if (post._id === action.payload.postId) {
          return _objectSpread({}, post, {
            comments: [action.payload.comment].concat(_toConsumableArray(post.comments))
          });
        } else return post;
      });

    case _post.UPDATE_POST:
      return state.map(function (post) {
        if (post._id === action.payload.postId) {
          return _objectSpread({}, post, {
            message: action.payload.message
          });
        } else return post;
      });

    case _post.DELETE_POST:
      return state.filter(function (post) {
        return post._id !== action.payload.postId;
      });

    case _post.EDIT_COMMENT:
      return state.map(function (post) {
        if (post._id === action.payload.postId) {
          return _objectSpread({}, post, {
            comments: post.comments.map(function (comment) {
              if (comment._id === action.payload.commentId) {
                return _objectSpread({}, comment, {
                  text: action.payload.text
                });
              } else {
                return comment;
              }
            })
          });
        } else return post;
      });

    case _post.DELETE_COMMENT:
      return state.map(function (post) {
        if (post._id === action.payload.postId) {
          return _objectSpread({}, post, {
            comments: post.comments.filter(function (comment) {
              return comment._id !== action.payload.commentId;
            })
          });
        } else return post;
      });

    default:
      return state;
  }
}