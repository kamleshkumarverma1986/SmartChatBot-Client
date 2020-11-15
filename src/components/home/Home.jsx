import React from "react";
import ChatPopup from "../chatPopup/ChatPopup";
import banner from "../../assets/images/banner-main.jpg";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="image-wrap">
                <div className="img-content">
                    <img src={banner} alt=""/>
                </div>
            </div>
            <div className="banner-content">
                <div className="banner-btn">
                    <a href="/" className="ban-btn btn-red">Login to Train the bot!</a>
                </div>
            </div>
            <ChatPopup />
        </>
    );
  }
  
  export default Home;



