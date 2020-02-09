import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";


class Header extends React.Component {
  
  render() {
    return (
      <div className={"header"}>
        <Link to="/">
          <img src="https://bespokedemo.com/wp-content/uploads/2020/01/VolunteerMatch-Logo.png" alt={"logo"}></img>
        </Link>
      </div>
    );
  }
}

export default Header;