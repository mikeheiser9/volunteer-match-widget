import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import Results from "./components/Results";

// import NoMatch from "./components/NoMatch";

class App extends Component {
  state = {
    data: null,
    form: ""
  };

  handleFormSubmit = (event, form) => {
    console.log("19", form)
    event.preventDefault()
    this.setState({
      form: form
    })
  }

  render() {
    return (
    <div className="App">
    <Router>
      {/* <Header /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/" render={ ()=> <Form handleFormSubmit={this.handleFormSubmit} />}/>
      <Route exact path="/" render={ ()=> <Results form={this.state.form} /> } />
      <Footer />
    </Router>
    </div>
    );
  }
}

export default App;
