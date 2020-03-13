import React from "react";
import './home-page.css';
import { Link } from 'react-router-dom'


class HomePage extends React.Component {
    render() {
      return (
          <div>
              <h1>WELCOME TO THE POND!</h1>
              <div class='buttons'>
                <div class='button-hold'>
                <Link>
                <button type="button" class="new-duck btn-primary">I'M A NEW DUCK</button>
                </Link>
                <Link to="/login">
                <button type="button" class="return-duck btn-primary" href="/login">I HAVE RETURNED</button>
                </Link>
                </div>
              </div>
          </div>
      );
    }
  }

export default HomePage;