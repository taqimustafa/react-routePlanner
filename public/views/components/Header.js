import React, { Component } from 'react';
import { Link } from "react-router"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <div className="brand">
            <a href="/">Route Planner</a>
          </div>
          <nav className="navigation-items">
            <div className="wrapper">
              <ul className="main-navigation navigation-top-header" />
              <ul className="user-area">
                <li><a href="login">Sign In </a></li>
                <li><a href="register"><strong>Register </strong></a></li>
              </ul>
              <div className="toggle-navigation">
                <div className="icon">
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
