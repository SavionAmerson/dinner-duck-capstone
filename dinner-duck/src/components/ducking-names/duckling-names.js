import React from "react";
import './duckling-names.css';
import { Link } from 'react-router-dom';



class RegPage extends React.Component {
    render() {
      return (
          <div>
              <h1>WHAT ARE THEIR NAMES?</h1>
              <Link to="/budget">
              <button class="quack">QUACK!</button>
              </Link>
              </div>
      );
    }
  }

export default RegPage;