import React, { Component } from "react";
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
        {/* <HomePage /> */}
        <LoginPage />
        <Nav />
      </div>
    );
  }
}

export default App;