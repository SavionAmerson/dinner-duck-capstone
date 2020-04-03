import React from "react";
// import './duckling-amnt.css'
import { Link } from 'react-router-dom';
import { ducklingAmount } from '../duckling-amnt-page/duckling-amnt'
import { budget } from '../budget-page/budget-page'

const budgetSplit = budget / ducklingAmount;

class ResultsPage extends React.Component {
    render() {
      return (
          <div>
              <h1>Here's five options for ${budget} split between {ducklingAmount} ducklings!
              <br/> That's ${budgetSplit} for each duckling!</h1>
              <div class="page-cont">
              <div class="num-input-hold">
              
              </div>
              </div>
              <button class="quack">RETRY</button>
              <Link to="/">
              <button class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

export default ResultsPage;