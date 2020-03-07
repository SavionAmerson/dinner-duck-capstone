import React, { Component } from "react";
import logo from "./graphic-assets/dinner-duck-logo.png";
import "./App.css";
import Nav from './components/navbar/navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Nav />
      </div>
    );
  }
}

export default App;