import React, { useEffect, useState } from "react";
import "./Conversation.css";
import axios from "axios";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log(currentUser._id);

    const getFriendInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/friends/${friendId}`
        );
        setUser(response.data);
        console.log("Updated user state:", response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getFriendInfo();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        src={
          user?.picture
            ?   user.picture
            :   "person/noAvatar.png"
        }
        alt="user"
        className="conversationImg border-2 border-red-500"
      />
      <span className="conversationName">
        {user ? user.pseudo : "Loading..."}
      </span>
    </div>
  );
};

export default Conversations;
