import React, { useEffect, useState } from "react";
import "./Conversations.css";
import axios from "axios";

const Conversations = ({ uid, conversation: {pseudo, picture} }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/conversation/${uid}`);
                setUserInfo(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUserInfo();
    }, [uid]);

    return (
        <div className="conversation">
            <img
                src={userInfo?.picture}
                alt="user"
                className="conversationImg border-2 border-red-500"
            />
            <span className="conversationName">
                {userInfo?.pseudo}
            </span>
        </div>
    );
};

export default Conversations;
