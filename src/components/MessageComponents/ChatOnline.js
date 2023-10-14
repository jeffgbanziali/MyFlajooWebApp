import React, { useEffect, useState } from "react";
import "./ChatOnline.css";
import axios from "axios";

const ChatOnline = ({ onlineUser, currentId, setCurrentChat }) => {
  const [userFriends, setUserFriends] = useState([]);
  const [userOnline, setUserOnline] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/user/friends/" + currentId
      );
      setUserFriends(response.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setUserOnline(userFriends.filter((f) => onlineUser.includes(f._id)));
  }, [userFriends, onlineUser]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {userOnline.map((online) => (
        <div
          className="chatOnlineFriend"
          key={online._id}
          onClick={() => handleClick(online)}
        >
          <div className="chatOnlineImgContainer">
            <img className="chatOnlineImg" src={online.picture} alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <div className="chatOnlineName">{online.pseudo}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
