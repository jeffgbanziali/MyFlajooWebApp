import React from 'react';
import './Messaging.css'
import { dateParser } from '../../Utils/Utils';

const Messaging = ({ own,
    message: { picture, sender, text, createdAt },
}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    src={
                        own ? picture : sender.picture
                    }
                    alt=""
                    className="messageImg"
                />
                <p className="messageText">
                    {text}
                </p>
            </div>
            <div className="messageBottom">
                {dateParser(createdAt)}
            </div>
        </div>
    );
}

export default Messaging;
