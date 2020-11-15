import React from "react";
import classnames from "classnames";
import "./Message.css";

function Message({text, msgBy}) {
    const isBot = msgBy === "BOT";
    return (
        <div className="message-box">
            <div className={classnames("msg", {"bot-msg": isBot, "user-msg": !isBot})}> 
                <i className={classnames("avatar fas with-100p", {"fa-robot": isBot, "fa-user-tie": !isBot})}></i>
                <div className={classnames("text", {"text-l": isBot, "text-r": !isBot})}>
                    <p> {text} </p>
                </div>
            </div>
        </div>
    );
}
  
  export default Message;
