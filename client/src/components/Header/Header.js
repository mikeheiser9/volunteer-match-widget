import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";


class Header extends React.Component {
  
  render() {
    return (
      <div className={"header"}>
        <Link to="/">
          <img src="../../../../img/vm-logo.png" alt="logo"></img>
        </Link>
      </div>
    );
  }
}

export default Header;