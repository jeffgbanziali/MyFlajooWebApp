import axios from 'axios';

//post actions

export const GET_POSTS = "GET_POSTS";
export const GET_ADD_POSTS = "GET_ADD_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const ALL_COMMENTS = "ALL_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const GET_POST_ERRORS = "GET_POST_ERRORS";


export const getPosts = (num) => {
    return (dispatch) => {
        return axios
            .get(`http://localhost:4000/api/post`)
            .then((res) => {
                const array = res.data.slice(0, num);
                dispatch({ type: GET_POSTS, payload: array });
            }
            )
            .catch((err) => console.log(err));
    }
};
export const addPosts = (data) => {
    return (dispatch) => {
        return axios
            .post(`http://localhost:4000/api/post/`, data)
            .then((res) => {
                dispatch({ type: GET_ADD_POSTS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
}


export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:4000/api/post/like-post/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: LIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err));
    };
};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:4000/api/post/unlike-post/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err));
    };
};

export const updatePost = (postId, message) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `http://localhost:4000/api/post/${postId}`,
            data: { message },
        })
            .then((res) => {
                dispatch({ type: UPDATE_POST, payload: { message, postId } });
            })
            .catch((err) => console.log(err));
    };
};

export const deletePost = (postId) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `http://localhost:4000/api/post/${postId}`,
        })
            .then((res) => {
                dispatch({ type: DELETE_POST, payload: { postId } });
            })
            .catch((err) => console.log(err));
    };
};

export const addComment = (postId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:4000/api/post/comment-post/${postId}`,
            data: { commenterId, text, commenterPseudo },
        })
            .then((res) => {
                dispatch({ type: ADD_COMMENT, payload: { postId } });
            })
            .catch((err) => console.log(err));
    };
};

export const allComments = (postId) => {
    return (dispatch) => {
        return axios({
            method: "get",
            url: `http://localhost:4000/api/post/all-comments-post/${postId}`,
        })
            .then((res) => {
                dispatch({ type: ALL_COMMENTS, payload: { postId, comments: res.data } });
            })
            .catch((err) => console.log(err));
    };
 };

export const editComment = (postId, commentId, text) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:4000/api/post/edit-comment-post/${postId}`,
            data: { commentId, text },
        })
            .then((res) => {
                dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
            })
            .catch((err) => console.log(err));
    };
};

export const deleteComment = (postId, commentId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:4000/api/post/delete-comment-post/${postId}`,
            data: { commentId },
        })
            .then((res) => {
                dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
            })
            .catch((err) => console.log(err));
    };
};
