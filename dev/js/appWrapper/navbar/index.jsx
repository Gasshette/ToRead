import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './navbar.scss';


class Navbar extends React.Component {

  componentDidMount() {
    $("#navbar-component a").on('click', (e) => {
      const items = document.querySelectorAll("#navbar-component a");
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('selected');
      }
      e.currentTarget.className = 'selected';
    });
  }

  render() {
    return (
      <div id="navbar-component">
        <ul>
          <li><Link to="/" className="selected"> Home page </Link></li>
          <li><Link to="/counter"> Counter tool </Link></li>
          <li><Link to="/movies"> Movies </Link></li>
          <li><Link to="/about">About this site </Link></li>
        </ul>
      </div>
    );
  }
}


export default Navbar;
