import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import Results from "./components/Results";

// import NoMatch from "./components/NoMatch";

class App extends Component {
  state = {
    data: null
  };

  render() {
    return (
    <div className="App">
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Form} />
      <Route exact path="/" component={Results} />
      <Footer />
    </Router>
    </div>
    );
  }
}

export default App;