import React from "react";
import "./Header.css";

function Header() {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/"><span>Chat-</span>bot</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <i className="fa fa-2x fa-cart-plus" aria-hidden="true"></i>
                        </a>
                    </li> 
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Header;

