import React from "react";
import './budget-page.css'
import { Link } from 'react-router-dom';


class BudgetPage extends React.Component {
    render() {
      return (
          <div>
              <h1>GOT IT! NOW, <br /> WHAT BUDGET ARE YOU WORKING WITH?</h1>
              <div class="page-cont">
              <div class="input-hold">
              <input placeholder="MAX. $100" type="number" id="quantity" name="quantity" min="1" max="9" />
              </div>
              </div>
              <Link to="/results">
              <button class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

export default BudgetPage;