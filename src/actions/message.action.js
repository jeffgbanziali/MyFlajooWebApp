import axios from 'axios';

export const GET_MESSAGE = "GET_MESSAGE";


export const getMessage = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://localhost:3001/api/message/${uid}`)
            .then((res) => {
                dispatch({ type: GET_MESSAGE, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};


