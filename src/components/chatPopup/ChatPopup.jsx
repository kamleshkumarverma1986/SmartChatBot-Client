import React, { useState } from "react";
import Message from "../message/Message";
import classnames from "classnames";
import "./ChatPopup.css";

function ChatPopup() {
    const [isChatBoxOpen, setChatBoxOpen] = useState(false);
    const toggleChatBox = () => {
        setChatBoxOpen(!isChatBoxOpen)
    }
    return (
        <>
            <div className="start-chat" onClick={toggleChatBox}>
                <i className={classnames("fas", {"fa-robot": !isChatBoxOpen, "fa-times": isChatBoxOpen})}></i>
            </div>
            <div className={classnames("chat-popup-box", {"display-chat-popup-box": isChatBoxOpen})}>
                <div className="chat-popup-header">
                    <div className="smart-bot">
                        <i className="fas fa-robot"> SmartBot</i>
                    </div>
                    <div className="refresh">
                        <i className="fas fa-redo"></i>
                    </div>
                </div>
                <div className="chat-popup-messages">
                    <Message msgBy="BOT" text="Hey, Welcome you!!"/>
                    <Message msgBy="me" text="Can i have more details on the banking domain"/>
                    <Message msgBy="BOT" text="Yes, sure why not. what you are looking for banking"/>
                </div>
                <div className="chat-popup-footer">
                    <input type="text" placeholder="Type your answer">
                    </input>
                    <i className="fas fa-paper-plane"></i>
                </div>
            </div>
        </>
    );
}
  
  export default ChatPopup;

