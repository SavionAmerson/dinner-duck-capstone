import React from "react";
import './duckling-names.css';
import { Link } from 'react-router-dom';
import { ducklingAmount } from '../duckling-amnt-page/duckling-amnt'



const nameField = <div><input id="name-field" placeholder="Enter name"></input></div>
const fieldInject = document.createElement('div').innerHTML = nameField;

class RegPage extends React.Component {

    render() {
      let rows = [];
      for(let i = 0; i <= ducklingAmount; i++ ){
        rows.push(fieldInject);
        console.log(rows);
      }
      return (
        <div class="name-page">
              <h1 id="name-heading">WHAT ARE THEIR NAMES?</h1>
              <div id="field-hold">
                <div id="fields">
                  {rows}
                </div>
              </div>
              <Link to="/group-size">
              <button class="quack">BACK!</button>
              </Link>
              <Link to="/budget">
              <button class="quack">QUACK!</button>
              </Link>
        </div>
      );
    }
  }

export default RegPage;