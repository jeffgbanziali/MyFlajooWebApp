import React, { useContext, useEffect, useState } from 'react';
import './Message.css'
import Conversations from '../../components/Message/Conversation/Conversations';
import ChatOnline from '../../components/Message/ChatOnline/ChatOnline';
import Messaging from '../../components/Message/Messaging/Messaging';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';
import { UidContext } from '../../Context/AppContext';


const Message = () => {
    const [messages, setMessages] = useState([]);
    const [conversations, setConversations] = useState([]);
    const uid = useContext(UidContext);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/conversation/${uid}`);
                setConversations(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchConversations();
    }, [uid]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/message/${uid}`)
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [uid]);
    return (
        <>
            <NavBar />
            <div className="messenger flex" >
                <div className="chatMenu mt-20">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        {conversations.map(conversation => (
                            <Conversations key={conversation.id} conversation={conversation} />
                        ))}
                    </div>

                </div>
                <div className="chatBox mt-20">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            {messages.map(message => (
                                <Messaging key={message._id} message={message} own={message.sender === uid}
                                />
                            ))}
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
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
}

export default Message;
