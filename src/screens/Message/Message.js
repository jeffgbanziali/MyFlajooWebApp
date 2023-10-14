import React, { useContext, useEffect, useRef, useState } from "react";
import "./Message.css";
import Conversations from "../../components/MessageComponents/Conversations";
import NavBar from "../../components/NavBar/NavBar";
import ChatOnline from "../../components/MessageComponents/ChatOnline";
import Messaging from "../../components/MessageComponents/Messaging";
import axios from "axios";
import { UidContext } from "../../Context/AppContext";
import { io } from "socket.io-client";

const Message = () => {
  const uid = useContext(UidContext);
  const [conver, setConver] = useState([]);
  const [currentChat, setCurrentChat] = useState(null); // Initialize currentChat as null
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [arrivalChat, setArrivalChat] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const scrollRef = useRef();
  const socket = useRef(io("ws://localhost:8900"));

  //const userData = useSelector((state) => state.userReducer);

  console.log(uid);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalChat({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalChat &&
      currentChat?.members.includes(arrivalChat.sender) &&
      setChat((prev) => [...prev, arrivalChat]);
  }, [arrivalChat, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", uid);
    socket.current.on("getUSers", (users) => {
      console.log(users);
      setOnlineUser(
        uid.followings.filter((f) => users.some((u) => u._id === f))
      );
    });
  }, [uid]);
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

    const receiverId = currentChat.members.find((member) => member !== uid);

    socket.current.emit("sendMessage", {
      senderId: uid,
      receiverId,
      text: newChat,
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/api/message/",
        message
      );

      setChat((prevChat) => [...prevChat, response.data]);
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
                    value={newChat}
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
            <ChatOnline
              onlineUser={onlineUser}
              currentId={uid}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
