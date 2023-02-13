import React from 'react';
import './Messaging.css'

const Messaging = ({ own }) => {
    return (
        <div className={own ? "messenge own": "message" }>
            <div className="messageTop">
                <img
                    src='https://global-img.gamergen.com/assassin-s-creed-valhalla-eivor-statuette-pure-arts-13-24-07-2020_0900958493.jpg'
                    alt=""
                    className="messageImg"
                />
                <p className="messageText">
                    Helli This Message is for you
                </p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    );
}

export default Messaging;
