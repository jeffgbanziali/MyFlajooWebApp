"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.editComment = exports.allComments = exports.addComment = exports.deletePost = exports.updatePost = exports.unlikePost = exports.likePost = exports.addPosts = exports.getPosts = exports.GET_POST_ERRORS = exports.UPDATE_POST = exports.DELETE_POST = exports.DELETE_COMMENT = exports.EDIT_COMMENT = exports.ADD_COMMENT = exports.ALL_COMMENTS = exports.UNLIKE_POST = exports.LIKE_POST = exports.GET_ADD_POSTS = exports.GET_POSTS = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//post actions
var GET_POSTS = "GET_POSTS";
exports.GET_POSTS = GET_POSTS;
var GET_ADD_POSTS = "GET_ADD_POSTS";
exports.GET_ADD_POSTS = GET_ADD_POSTS;
var LIKE_POST = "LIKE_POST";
exports.LIKE_POST = LIKE_POST;
var UNLIKE_POST = "UNLIKE_POST";
exports.UNLIKE_POST = UNLIKE_POST;
var ALL_COMMENTS = "ALL_COMMENTS";
exports.ALL_COMMENTS = ALL_COMMENTS;
var ADD_COMMENT = "ADD_COMMENT";
exports.ADD_COMMENT = ADD_COMMENT;
var EDIT_COMMENT = "EDIT_COMMENT";
exports.EDIT_COMMENT = EDIT_COMMENT;
var DELETE_COMMENT = "DELETE_COMMENT";
exports.DELETE_COMMENT = DELETE_COMMENT;
var DELETE_POST = "DELETE_POST";
exports.DELETE_POST = DELETE_POST;
var UPDATE_POST = "UPDATE_POST";
exports.UPDATE_POST = UPDATE_POST;
var GET_POST_ERRORS = "GET_POST_ERRORS";
exports.GET_POST_ERRORS = GET_POST_ERRORS;

var getPosts = function getPosts(num) {
  return function (dispatch) {
    return _axios["default"].get("http://localhost:5000/api/post").then(function (res) {
      var array = res.data.slice(0, num);
      dispatch({
        type: GET_POSTS,
        payload: array
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.getPosts = getPosts;

var addPosts = function addPosts(data) {
  return function (dispatch) {
    return _axios["default"].post("http://localhost:5000/api/post/", data).then(function (res) {
      dispatch({
        type: GET_ADD_POSTS,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.addPosts = addPosts;

var likePost = function likePost(postId, userId) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "patch",
      url: "http://localhost:5000/api/post/like-post/" + postId,
      data: {
        id: userId
      }
    }).then(function (res) {
      dispatch({
        type: LIKE_POST,
        payload: {
          postId: postId,
          userId: userId
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.likePost = likePost;

var unlikePost = function unlikePost(postId, userId) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "patch",
      url: "http://localhost:5000/api/post/unlike-post/" + postId,
      data: {
        id: userId
      }
    }).then(function (res) {
      dispatch({
        type: UNLIKE_POST,
        payload: {
          postId: postId,
          userId: userId
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.unlikePost = unlikePost;

var updatePost = function updatePost(postId, message) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "put",
      url: "http://localhost:5000/api/post/".concat(postId),
      data: {
        message: message
      }
    }).then(function (res) {
      dispatch({
        type: UPDATE_POST,
        payload: {
          message: message,
          postId: postId
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.updatePost = updatePost;

var deletePost = function deletePost(postId) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "delete",
      url: "http://localhost:5000/api/post/".concat(postId)
    }).then(function (res) {
      dispatch({
        type: DELETE_POST,
        payload: {
          postId: postId
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.deletePost = deletePost;

var addComment = function addComment(postId, commenterId, text, commenterPseudo) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "patch",
      url: "http://localhost:5000/api/post/comment-post/".concat(postId),
      data: {
        commenterId: commenterId,
        text: text,
        commenterPseudo: commenterPseudo
      }
    }).then(function (res) {
      dispatch({
        type: ADD_COMMENT,
        payload: {
          postId: postId
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.addComment = addComment;

var allComments = function allComments(postId) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "get",
      url: "http://localhost:5000/api/post/all-comments-post/".concat(postId)
    }).then(function (res) {
      dispatch({
        type: ALL_COMMENTS,
        payload: {
          postId: postId,
          comments: res.data
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.allComments = allComments;

var editComment = function editComment(postId, commentId, text) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "patch",
      url: "http://localhost:5000/api/post/edit-comment-post/".concat(postId),
      data: {
        commentId: commentId,
        text: text
      }
    }).then(function (res) {
      dispatch({
        type: EDIT_COMMENT,
        payload: {
          postId: postId,
          commentId: commentId,
          text: text
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.editComment = editComment;

var deleteComment = function deleteComment(postId, commentId) {
  return function (dispatch) {
    return (0, _axios["default"])({
      method: "patch",
      url: "http://localhost:5000/api/post/delete-comment-post/".concat(postId),
      data: {
        commentId: commentId
      }
    }).then(function (res) {
      dispatch({
        type: DELETE_COMMENT,
        payload: {
          postId: postId,
          commentId: commentId
        }
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.deleteComment = deleteComment;