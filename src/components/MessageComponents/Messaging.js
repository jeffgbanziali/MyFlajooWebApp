import React from 'react';
import './Messaging.css'
import { useSelector } from 'react-redux';
import { dateParser, formatPostDate } from '../Utils/Utils';

const Messaging = ({message, own}) => {
  const userData = useSelector((state) => state.userReducer);
    return (
        <div className={own ? "message own " : " message"}>
            <div className="messageTop">
                <img
                    src={own ? userData.picture : message.sender.picture}
                    alt=""
                    className="messageImg"
                />
                <p className="messageText">
                  {message.text}
                </p>
            </div>
            <div className="messageBottom">
            {formatPostDate(message.createdAt)}
            </div>
        </div>
    );
}

export default Messaging;