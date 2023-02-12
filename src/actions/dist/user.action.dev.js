"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unfollowUser = exports.followUser = exports.getFriends = exports.updateBio = exports.uploadPicture = exports.getUser = exports.GET_USER_ERRORS = exports.UNFOLLOW_USER = exports.FOLLOW_USER = exports.GET_FRIENDS = exports.UPDATE_BIO = exports.UPLOAD_PICTURE = exports.GET_USER = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET_USER = "GET_USER";
exports.GET_USER = GET_USER;
var UPLOAD_PICTURE = "UPLOAD_PICTURE";
exports.UPLOAD_PICTURE = UPLOAD_PICTURE;
var UPDATE_BIO = "UPDATE_BIO";
exports.UPDATE_BIO = UPDATE_BIO;
var GET_FRIENDS = "GET_FRIENDS";
exports.GET_FRIENDS = GET_FRIENDS;
var FOLLOW_USER = "FOLLOW_USER";
exports.FOLLOW_USER = FOLLOW_USER;
var UNFOLLOW_USER = "UNFOLLOW_USER";
exports.UNFOLLOW_USER = UNFOLLOW_USER;
var GET_USER_ERRORS = "GET_USER_ERRORS";
exports.GET_USER_ERRORS = GET_USER_ERRORS;

var getUser = function getUser(uid) {
  return function (dispatch) {
    return _axios["default"].get("http://localhost:5000/api/user/".concat(uid)).then(function (res) {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.getUser = getUser;

var uploadPicture = function uploadPicture(data, id) {
  return function (dispatch) {
    return _axios["default"].post("http://localhost:5000/api/user/upload", data).then(function (res) {
      return _axios["default"] // return axios to chain the two requests
      .get("http://localhost:5000/api/user/".concat(id)).then(function (res) {
        dispatch({
          type: UPLOAD_PICTURE,
          payload: res.data.picture
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.uploadPicture = uploadPicture;

var updateBio = function updateBio(bio, userId) {
  return function (dispatch) {
    return _axios["default"].put("http://localhost:5000/api/user/" + userId, {
      bio: bio
    }).then(function (res) {
      dispatch({
        type: UPDATE_BIO,
        payload: bio
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.updateBio = updateBio;

var getFriends = function getFriends(uid) {
  return function (dispatch) {
    return _axios["default"].get("http://localhost:5000/api/user/friends/" + uid).then(function (res) {
      dispatch({
        type: GET_FRIENDS,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.getFriends = getFriends;

var followUser = function followUser(followerId, idToFollow) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "patch",
      url: "http://localhost:5000/api/user/follow/" + followerId,
      data: {
        idToFollow: idToFollow
      }
    }).then(function (res) {
      dispatch({
        type: FOLLOW_USER,
        payload: {
          idToFollow: idToFollow
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.followUser = followUser;

var unfollowUser = function unfollowUser(followerId, idToUnfollow) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "patch",
      url: "http://localhost:5000/api/user/unfollow/" + followerId,
      data: {
        idToUnfollow: idToUnfollow
      }
    }).then(function (res) {
      dispatch({
        type: UNFOLLOW_USER,
        payload: {
          idToUnfollow: idToUnfollow
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.unfollowUser = unfollowUser;