import React from "react";
import './login-page.css';


class LoginPage extends React.Component {
    render() {
      return (
          <div>
              <h1>MIND TELING US WHO YOU ARE?!</h1>
              <div class="page-cont">
              <div class="input-hold">
                  <input placeholder="Name"></input>
                  <input placeholder="Email"></input>
                  <input placeholder="Password"></input>
              </div>
              </div>
              <button class="quack">QUACK!</button>
          </div>
      );
    }
  }

export default LoginPage;