import React, { useContext, useEffect, useRef, useState } from "react";
import Conversations from "../../components/MessageComponents/Conversations";
import NavBar from "../../components/NavBar/NavBar";
import ChatOnline from "../../components/MessageComponents/ChatOnline";
import Messaging from "../../components/MessageComponents/Messaging";
import { LuPenSquare } from "react-icons/lu";
import { IoVideocam } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdInformationCircle } from "react-icons/io";
import { SiChatbot } from "react-icons/si";
import axios from "axios";
import { UidContext } from "../../Context/AppContext";
import { io } from "socket.io-client";

const Message = () => {
  const uid = useContext(UidContext);
  const [conver, setConver] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [user, setUser] = useState();
  const [arrivalChat, setArrivalChat] = useState(null);
  const scrollRef = useRef();
  const socket = useRef(io("ws://localhost:8900"));

  //const userData = useSelector((state) => state.userReducer);

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

  console.log("tu etais où ", currentChat);



  console.log("mon chat", chat)


  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/message/${currentChat._id}`
        );
        console.log("Messages Response:", response.data);
        setChat(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getMessages();
  }, [currentChat._id]);



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
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);



  useEffect(() => {
    // Vérifier si currentChat.members est défini avant d'appeler find
    if (currentChat.members) {
      const friendId = currentChat.members.find((m) => m !== uid);

      if (friendId) {
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
      }
    }
  }, [uid, currentChat]);

  console.log("Tu étais ma lumière ", user);






  return (
    <>
      {/*<NavBar />*/}
      <div className="fixed  w-full h-full flex items-center justify-center">
        <div className="w-[100%] h-[100%] flex items-center justify-center  bg-gray-800  ">
          <div className="w-[25%] h-[100%] border-r border-gray-600  ">
            <div className="w-[100%] border-b-2 border-blue-400 flex justify-between flex-col h-[20%] ">
              <div className="w-[100%] flex h-[50%]  " >
                <div className="w-[60%] flex items-center justify-center h-[100%]">
                  <p className="text-[40px] font-light font-sans text-white ">Messages</p>
                </div>
                <div className="w-[40%]   items-center space-x-4 justify-center flex h-[100%]  ">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full ">
                    <LuPenSquare size={20} color="white" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full   ">
                    <HiDotsHorizontal size={20} color="white" />
                  </div>
                </div>

              </div>
              <div className="w-[100%] h-[50%]  " >

              </div>
            </div>
            <div className="flex flex-col   overflow-y-auto border-b border-gray-600  items-center w-[100%] h-[75%]">
              {conver.map((c) => (
                <div
                  className="flex flex-col rounded-lg mt-2 cursor-pointer hover:bg-gray-400 w-[95%]   items-center h-[800px]"
                  key={c._id} onClick={() => setCurrentChat(c)}>
                  <Conversations conversation={c} currentUser={uid} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[75%] flex h-[100%] overflow-y-auto bg-red-500 ">
            {currentChat && user ? (
              <>
                <div className="w-[65%] flex flex-col items-center  h-[100%]  " >
                  <div className="w-[100%] h-[10%]  border-b border-gray-400 flex" >
                    <div className="w-[80%] space-x-4 flex items-center  h-[100%] " >
                      <div className="w-14 h-14 ml-2 "  >
                        <img
                          src={
                            "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
                          }
                          alt="user"
                          className="w-14 h-14 rounded-full"
                        />
                      </div>
                      <div className="w-[100%] flex flex-col justify-center  h-[100%]  ">

                        <>
                          <p className="text-[20px] font-semibold text-white ">{user.pseudo}</p>
                          <p className="text-[14px] font-semibold text-white ">Online</p>
                        </>
                      </div>

                    </div>
                    <div className="w-[20%] space-x-4 flex items-center  h-[100%] " >
                      <div className="w-10 h-10 flex items-center justify-center  rounded-full ">
                        <FaPhoneAlt size={20} color="white" />
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full   ">
                        <IoVideocam size={20} color="white" />
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center  rounded-full   ">
                        <IoMdInformationCircle size={20} color="white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] overflow-y-auto h-[80%] " >
                    {chat.map((m) => (
                      <div ref={scrollRef}>
                        <Messaging message={m} user={user} own={m.senderId === uid} />
                      </div>
                    ))
                    }
                  </div>
                  <div className="w-[100%] h-[10%] bg-gray-600 " >

                  </div>
                </div>
                <div className="w-[35%]  flex h-[100%] bg-green-400 ">
                </div>
              </>

            ) : (
              <div className="w-[100%] flex items-center justify-center  h-[100%] bg-gray-800 ">

                <div className=" w-[50%] flex-col h-[50%]  flex items-center justify-center ">
                  <SiChatbot size={200} />
                  <p className="text-[40px] font-semibold text-white ">No discussion selected</p>
                </div>

              </div>
            )
            }
          </div>
        </div>
      </div>

    </>
  );
};

export default Message;
