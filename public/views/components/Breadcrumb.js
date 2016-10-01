import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <section className="sub-header">
        <div className="search-bar horizontal collapse" id="redefine-search-form" />
        <div className="breadcrumb-wrapper">
          <div className="container">
            <ol className="breadcrumb">
              <li><a href="/"><i className="fa fa-home" /></a></li>
              <li><a>{this.props.name}</a></li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
export default Breadcrumb;
