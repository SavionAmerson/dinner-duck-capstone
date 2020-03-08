import React from "react";
import './home-page.css';


class HomePage extends React.Component {
    render() {
      return (
          <div>
              <h1>WELCOME TO THE POND!</h1>
              <div class='buttons'>
                <div class='button-hold'>
                <button type="button" class="new-duck btn-primary">I'M A NEW DUCK</button>
                <button type="button" class="return-duck btn-primary">I HAVE RETURNED</button>
                </div>
              </div>
          </div>
      );
    }
  }

export default HomePage;