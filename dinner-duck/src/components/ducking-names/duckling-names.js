import React from "react";
import './duckling-names.css';
import { Link } from 'react-router-dom';
import { ducklingAmount } from '../duckling-amnt-page/duckling-amnt'

let testVar = <h1>HEY HEY!</h1>

// function repeater() {
//   let i = 0
//   for (i=0; i <= 5; i++) {
//     console.log(i)
//     let notherTest = testVar
//     console.log(notherTest)
//     localStorage.setItem("notherTestKey", notherTest);
//   }
// }

// repeater();

let testyVarr = `<h1>HELLO HELLO!</h1>`

class RegPage extends React.Component {

    fieldGen() {
      function yeah() {
        let i = 0
        for (i = 0; i < 5; i++)
        console.log(i)
      }

      for(let i = 0; i < 5; i++){
        yeah();
      }

      // const contentContainer = document.querySelector(".field-hold");
      // contentContainer.insertAdjacentElement("afterbegin", testyVarr);
      
      return (
        <div>
        <input id="name-field" placeholder="Enter name"></input>
        </div>
      )
    }

    render() {
      return (
        <div>
              <div id="field-hold">
              <h1 id="name-heading">WHAT ARE THEIR NAMES?</h1>
              </div>
              {testVar}
              <testyVarr></testyVarr>
              <this.fieldGen />
              <Link to="/budget">
              <button class="quack">QUACK!</button>
              </Link>
        </div>
      );
    }
  }

export default RegPage;