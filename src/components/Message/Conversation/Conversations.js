import React, { useEffect, useState } from "react";
import "./Conversations.css";
import axios from "axios";

const Conversations = ({ uid, conversation: { pseudo, picture } }) => {
    const [, setInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/conversation/${uid}`);
                setInfo(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUserInfo();
    }, [uid]);

    return (
        <div className="conversation">
            <img
                src={picture}
                alt="user"
                className="conversationImg border-2 border-red-500"
            />
            <span className="conversationName">
                {pseudo}
            </span>
        </div>
    );
};

export default Conversations;
