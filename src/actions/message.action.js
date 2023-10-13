import axios from "axios";
export const GET_MESSAGES = "GET_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const GET_MESSAGES_ERROR = "GET_MESSAGES_ERROR";
export const SEND_MESSAGE_ERROR = "SEND_MESSAGE_ERROR";



export const getMessages = (conversationId) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4000/api/message/${conversationId}`)
      .then((res) => {
        console.log("API Response:", res.data);
        dispatch({ type: GET_MESSAGES, payload: { conversationId, messages: res.data } });
      })
      .catch((err) => {
        console.log("API Error:", err.message);
        dispatch({ type: GET_MESSAGES_ERROR, payload: err.message });
      });
  };
};


export const sendMessage = (conversationId, messageData) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:4000/api/message/${conversationId}`, messageData)
      .then((res) => {
        dispatch({ type: SEND_MESSAGE, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: SEND_MESSAGE_ERROR, payload: err.message });
      });
  };
};
