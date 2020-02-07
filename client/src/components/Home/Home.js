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
     <div className={"data-container"}>
      <h1>Find Volunteer Opportunity for Your Employees</h1>
     </div>
    </div>
    );
  }
}

export default Home