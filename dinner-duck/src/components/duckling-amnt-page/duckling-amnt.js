import React from "react";
import './duckling-amnt.css'
import { Link } from 'react-router-dom';


class AmntPage extends React.Component {
    render() {
      return (
          <div>
              <h1>HELLO NAME! <br /> HOW MANY DUCKLINGS ARE YOU FEEDING?</h1>
              <div class="page-cont">
              <div class="input-hold">
              <input placeholder="MAX. 9" type="number" id="quantity" name="quantity" min="1" max="9" />
              </div>
              </div>
              <Link to="/budget">
              <button class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

export default AmntPage;