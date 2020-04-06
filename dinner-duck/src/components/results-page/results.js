import React from "react";
import './results.css'
import { Link } from 'react-router-dom';
import { ducklingAmount } from '../duckling-amnt-page/duckling-amnt';
import { budget } from '../budget-page/budget-page';
import foodData from '../../food.json'

const budgetSplit = budget / ducklingAmount;


if (budgetSplit < 14) {
    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.underFourteenFood[foodNum];

    localStorage.setItem("foodOne", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.underFourteenFood[foodNum];

    localStorage.setItem("foodTwo", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.underFourteenFood[foodNum];

    localStorage.setItem("foodThree", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.underFourteenFood[foodNum];

    localStorage.setItem("foodFour", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.underFourteenFood[foodNum];

    localStorage.setItem("foodFive", foods)
} else {
  var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.overFourteenFood[foodNum];

    localStorage.setItem("foodOne", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.overFourteenFood[foodNum];

    localStorage.setItem("foodTwo", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.overFourteenFood[foodNum];

    localStorage.setItem("foodThree", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.overFourteenFood[foodNum];

    localStorage.setItem("foodFour", foods)

    var foodNum = Math.floor(Math.random() * 5) + 1;
    var foods = foodData.overFourteenFood[foodNum];

    localStorage.setItem("foodFive", foods)
}

const foodOne = localStorage.getItem("foodOne");
console.log(foodOne)

const foodTwo = localStorage.getItem("foodTwo");
console.log(foodTwo)

const foodThree = localStorage.getItem("foodThree");
console.log(foodThree)

const foodFour = localStorage.getItem("foodFour");
console.log(foodFour)

const foodFive = localStorage.getItem("foodFive");
console.log(foodFive)



// const testDiv = <div><h1>Hello</h1></div>
// const testElem = document.createElement('div').innerHTML = testDiv;


class ResultsPage extends React.Component {

    render() {
      return (
          <div class="home-page">
              <h1>Here's five options for ${budget} split between {ducklingAmount} ducklings!
              <br/> That's ${budgetSplit} for each duckling!</h1>
              <div class="page-cont">
              <div class="option-hold">
              <h1 id="food-option">{foodOne}</h1>
              <h1 id="food-option">{foodTwo}</h1>
              <h1 id="food-option">{foodThree}</h1>
              <h1 id="food-option">{foodFour}</h1>
              <h1 id="food-option">{foodFive}</h1>
              </div>
              </div>
              {/* <button class="quack">RETRY</button> */}
              <Link to="/">
              <button class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

export default ResultsPage;