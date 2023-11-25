import React from 'react';
import './Messaging.css'
import { useSelector } from 'react-redux';
import { dateParser, formatPostDate } from '../Utils/Utils';

const Messaging = ({ message, own, user }) => {
    const userData = useSelector((state) => state.userReducer);


    const userImageUri = own ? userData.picture : user.picture;


    return (
        <div className={own ? "bg-blue-400 mr-2 message own " : " ml-2 bg-green-400 flex"}>
            <div className="messageTop">
                <img
                    src={userImageUri}
                    alt=""
                    className="messageImg"
                />
                <p className="messageText">
                    {message.text}
                </p>
            </div>
        </div>
    );
}

export default Messaging;