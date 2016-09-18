import React, { Component } from 'react';
import { Link } from "react-router"

class Breadcrumb extends Component {
  render() {
    return (
      <section className="sub-header">
        <div className="search-bar horizontal collapse" id="redefine-search-form" />
        <div className="breadcrumb-wrapper">
          <div className="container">
            <ol className="breadcrumb">
              <li><a href="index-directory.html"><i className="fa fa-home" /></a></li>
              <li><a href="#">Page </a></li>
              <li className="active">Detail </li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
export default Breadcrumb;
