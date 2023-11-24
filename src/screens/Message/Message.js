import React, { useContext, useEffect, useRef, useState } from "react";
import Conversations from "../../components/MessageComponents/Conversations";
import NavBar from "../../components/NavBar/NavBar";
import ChatOnline from "../../components/MessageComponents/ChatOnline";
import Messaging from "../../components/MessageComponents/Messaging";
import { LuPenSquare } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";
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

        const sortedConversations = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setConver(sortedConversations);
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
      {/*<NavBar />*/}
      <div className="fixed  w-full h-full flex items-center justify-center">
        <div className="w-[100%] h-[100%] flex items-center justify-center  bg-gray-900  ">
          <div className="w-[25%] h-[90%] bg-blue-500 ">
            <div className="w-[100%] flex justify-between flex-col h-[20%] bg-green-500 ">

              <div className="w-[100%] flex h-[50%] bg-blue-200 " >
                <div className="w-[50%] flex items-center justify-center h-[100%] bg-black">
                  <p className="text-[40px] font-semibold text-white ">Messages</p>
                </div>
                <div className="w-[50%] items-center space-x-4 justify-center flex h-[100%] bg-green-800 ">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full ">
                    <LuPenSquare size={20} color="white" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full   ">
                    <HiDotsHorizontal size={20} color="white" />
                  </div>
                </div>

              </div>
              <div className="w-[100%] h-[50%] bg-blue-200 " >

              </div>
            </div>
            <div className="chatMenuWrapper">
              {conver.map((c, index) => (
                <div key={index} onClick={() => setCurrentChat(c)}>
                  <Conversations key={index} conversation={c} currentUser={uid} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[75%] flex h-[90%] bg-red-500 ">
            <div className="w-[65%] flex flex-col  h-[100%] bg-green-200 " >
              <div className="w-[100%] h-[10%] bg-blue-200 " >
                <div className="w-[50%] space-x-4 flex items-center  h-[100%] " >
                  <div className="w-14 h-14  bg-blue-300"  >
                    <img
                      src={
                        "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
                      }
                      alt="user"
                      className="w-14 h-14 rounded-full"
                    />
                  </div>
                  <div className="w-[50%] flex flex-col justify-center  h-[100%] bg-red-700 ">
                    <p className="text-[20px] font-semibold text-white ">Jeff Flajj</p>
                    <p className="text-[10px] font-semibold text-white ">Online</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[70%] bg-yellow-200 " >

              </div>
              <div className="w-[100%] h-[20%] bg-red-200 " >

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Message;
