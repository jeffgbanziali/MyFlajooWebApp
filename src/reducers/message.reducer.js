import { GET_MESSAGE } from "../actions/message.action";


const initialState = {}; // initial state

export default function messageReducer(state = initialState, action) {

    switch (action.type) {
        case GET_MESSAGE:
            return {
                ...state,
                messages: action.payload
            };
        default:
            return state;
    }
}