import React from "react";
import './home-page.css';
import { Link } from 'react-router-dom'



class HomePage extends React.Component {

  newCredGetter(newName, newEmail, newPW) {
    newName = document.getElementById("new-name").value;
    console.log(newName);
    localStorage.setItem("newUserNameKey", newName);
  }

    render() {
      return (
          <div>
              <h1>WELCOME TO THE POND!</h1>
              <p>In charge of feeding a group of people with a limited budget? <br/> Dinner Duck is a tool
                that helps you plan what to do for the meal! </p>
              <div class='buttons'>
                <div class='button-hold'>

                <input type="" id="new-name" placeholder="Enter Name"></input>

                <Link to="/group-size">
                <button onClick={this.newCredGetter} type="button" class="new-duck btn-primary">QUACK!</button>
                </Link>
                {/* <Link to="/login">
                <button type="button" class="return-duck btn-primary" href="/login">I HAVE RETURNED</button>
                </Link> */}
                </div>
              </div>
          </div>
      );
    }
  }

  const newUserName = localStorage.getItem("newUserNameKey");

export default HomePage;
export {newUserName};