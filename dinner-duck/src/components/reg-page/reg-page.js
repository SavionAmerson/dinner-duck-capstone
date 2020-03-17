import React from "react";
import './reg-page.css';
import { Link } from 'react-router-dom';


class RegPage extends React.Component {
    render() {
      return (
          <div>
              <h1>WELCOME NEWCOMER! 
                {/* <br />  */}
                WHAT WOULD YOU LIKE US TO CALL YOU?
                </h1>
              <div class="page-cont">
              <div class="input-hold">
                  <input placeholder="Name"></input>
                  <input placeholder="Email"></input>
                  <input placeholder="Password"></input>
              </div>
              </div>
              <Link to="/group-size">
              <button class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

export default RegPage;