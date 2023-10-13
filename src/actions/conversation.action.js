import axios from "axios";

export const GET_CONVERSATIONS = "GET_CONVERSATIONS";
export const GET_CONVERSATIONS_ERROR = "GET_CONVERSATIONS_ERROR";



export const getConversations = (uid) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4000/api/conversation/${uid}`)
      .then((res) => {
        dispatch({ type: GET_CONVERSATIONS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_CONVERSATIONS_ERROR, payload: err.message });
      });
  };
};
