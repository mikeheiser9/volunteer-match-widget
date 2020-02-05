import React from "react";
import "../Footer/Footer.css";
// import axios from "axios";


class Footer extends React.Component {

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className={"footer"}>
            <h3 className="copyright-footer">© Volunteer Match API Widgets {this.getYear()}</h3>
      </div>
    );
  }
}

export default Footer;