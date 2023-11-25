import React, { useEffect, useState } from "react";
import "./Conversation.css";
import axios from "axios";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    console.log(currentUser._id);

    const getFriendInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/${friendId}`
        );
        setUser(response.data);
        console.log("Updated user state:", response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getFriendInfo();
  }, []);

  return (
    <div className="flex w-[100%] h-[80px]  items-center">
      <img
        src={
          user?.picture ? user.picture : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
        }
        alt="user"
        className=" w-[58px] ml-2 h-[58px] rounded-full "
      />
      <div className="flex flex-col  ml-4 ">
        <span className="text-[16px] text-white font-semibold">
          {user ? user.pseudo : "Loading..."}
        </span>

        <p className="text-[13px] text-gray-600 font-normal">
          {conversation.message}
        </p>
      </div>

    </div>
  );
};

export default Conversations;
