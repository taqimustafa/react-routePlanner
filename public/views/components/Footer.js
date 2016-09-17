import React, { Component } from 'react';
import { Link } from "react-router"

class Footer extends Component {
  render() {
    return (
      <footer id="page-footer">
        <div className="inner">
          <div className="footer-bottom">
            <div className="container">
              <span className="left">&copy; Route Planner</span>
              <span className="right">
                <a href="#page-top" className="to-top roll"><i className="fa fa-angle-up" /></a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
