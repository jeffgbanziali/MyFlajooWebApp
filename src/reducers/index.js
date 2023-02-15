import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';
import postReducer from './post.reducer';
import messageReducer from './message.reducer';
import errorReducer from './errors.reducer';




export default combineReducers({
    // user: userReducer,
    userReducer,
    usersReducer,
    // posts: postsReducer,
    postReducer,
    // conversation: conversationReducer,
    messageReducer,
    // error: errorReducer
    errorReducer
});


