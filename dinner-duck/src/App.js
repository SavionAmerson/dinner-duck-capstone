import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Logo from "./components/logo";
import "./App.css";
import Nav from './components/navbar/navbar'
import HomePage from './components/home-page/home-page'
import LoginPage from './components/login-page/login-page'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
        </Router>
        <Nav />
      </div>
    );
  }
}

export default App;