import React from 'react';
import "./ChatOnline.css"

const ChatOnline = () => {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src="https://global-img.gamergen.com/assassin-s-creed-valhalla-eivor-statuette-pure-arts-13-24-07-2020_0900958493.jpg"
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <div className="chatOnlineName">John Doe</div>
            </div>
        </div>
    );
}

export default ChatOnline;
