import React from "react";
import "./Header.css";

const Header = props => (
	
  <div className="header">
  <nav className="navbar">
  	<div className="title">
  	<a href="/">Clicky Game</a>
  	</div>
  	<br></br>
    <div className="title">Click An Image To Begin!
   

    </div>
    <div className="scores">
      Score: {props.score} | Highscore: {props.highscore}
    </div>
  </nav>
  </div>

);

export default Header;
