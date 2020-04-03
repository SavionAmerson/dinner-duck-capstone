import React from "react";
import './budget-page.css'
import { Link } from 'react-router-dom';



class BudgetPage extends React.Component {

    budgetGetter(budget){
      budget = document.getElementById("budget-amnt").value;
      console.log(budget);
    
      localStorage.setItem("budgetKey", budget);
    }

    render() {
      return (
          <div>
              <h1>GOT IT! NOW, <br /> WHAT BUDGET ARE YOU WORKING WITH?</h1>
              <div class="page-cont">
              <div class="input-hold">
              <input id="budget-amnt" placeholder="MAX. $100" type="number" name="quantity" min="1" max="100" />
              </div>
              </div>
              <Link to="/group-size">
              <button class="quack">BACK!</button>
              </Link>
              <Link to="/results">
              <button onClick={this.budgetGetter} class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

  const budget = localStorage.getItem("budgetKey");

export default BudgetPage;
export {budget};