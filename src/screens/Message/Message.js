import React, { useContext, useEffect, useRef, useState } from "react";
import "./Message.css";
import Conversations from "../../components/MessageComponents/Conversations";
import NavBar from "../../components/NavBar/NavBar";
import ChatOnline from "../../components/MessageComponents/ChatOnline";
import Messaging from "../../components/MessageComponents/Messaging";
import axios from "axios";
import { UidContext } from "../../Context/AppContext";

const Message = () => {
  const uid = useContext(UidContext);
  const [conver, setConver] = useState([]);
  const [currentChat, setCurrentChat] = useState(null); // Initialize currentChat as null
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState([]);
  const scrollRef = useRef();

  console.log(uid);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/conversation/${uid}`
        );
        setConver(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getConversation();
  }, [uid]);

  console.log(currentChat);

  useEffect(() => {
    console.log("Current Chat ID:", currentChat?._id);
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/message/` + currentChat?._id
        );
        console.log("Messages Response:", response.data);
        setChat(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getMessages();
  }, [currentChat]);

  console.log(chat);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const message = {
      sender: uid,
      text: newChat,
      conversationId: currentChat._id,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/message/",
        message
      );
      setChat([...chat, response.data]);
      setNewChat("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <>
      <NavBar />
      <div className="messenger flex">
        <div className="chatMenu mt-20">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />

            {conver.map((c, index) => (
              <div key={index} onClick={() => setCurrentChat(c)}>
                <Conversations key={index} conversation={c} currentUser={uid} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox mt-20">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {chat.map((mes) => (
                    <div ref={scrollRef}>
                      <Messaging message={mes} own={mes.sender === uid} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <input
                    type="text"
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewChat(e.target.value)}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="chatSubmitButton"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className=" text-5xl top-[10%] text-gray-400 text-center cursor-pointer">
                Open conversation
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline mt-20  ">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
