import React from "react";
import "../Home/Home.css";
// import API from "../utils/API";



class Home extends React.Component {
    state = {
     data: null
    }


  render() {
    return (
    <div className={"home-container"}>
    <div className={"home-inner"}>
     <div className={"data-container"}>
     <div className={"hamburger-menu"}>
       <a href={"#"}>
        <img src={"https://bespokedemo.com/wp-content/uploads/2020/02/menu.png"} alt={"burger-menu"}></img>
       </a>
    </div>
      <div className={"corp-cont"}>
       <h1>Garvonius Gives</h1>
      </div>
      <div className={"sub-header"}>
       <h3>Join Local Efforts. Make an Impact</h3>
      </div>
      <div className={"powered-by"}>
       <span>Powered by:</span>
       <img src={"https://bespokedemo.com/wp-content/uploads/2020/01/VolunteerMatch-Logo.png"} alt={"vm-logo"}></img>
      </div>
      <div className={"page-down"}>
       <a href={"#"}>
        <img src={"https://bespokedemo.com/wp-content/uploads/2020/02/scroll.png"} alt={"page-dwn"}></img>
       </a>
      </div>
     </div>
     </div>
    </div>
    );
  }
}

export default Home