import React from 'react';
import "./Conversations.css"





const Conversations = ({ conversation }) => {

    return (
        <div
            className="conversation">
            <img src={conversation.picture} alt="user" className="conversationImg" />
            <span className="conversationName">{conversation.pseudo}</span>
        </div>
    );
}

export default Conversations;
