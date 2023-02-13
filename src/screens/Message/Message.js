import React from 'react';
import './Message.css'
import Conversations from '../../components/Message/Conversation/Conversations';
import Messaging from '../../components/Message/Messaging/Messaging';
import ChatOnline from '../../components/Message/ChatOnline/ChatOnline';


const Message = () => {


    return (
        <>
            <div className="messenger  mt-20" >
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />

                        < Conversations />
                        < Conversations />
                        < Conversations />
                        < Conversations />
                    </div>
                </div>
                <div className="chatBox ">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Messaging />
                            <Messaging own={true} />
                            <Messaging />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline ">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>

                </div>
            </div>
        </>

    );
}

export default Message;
