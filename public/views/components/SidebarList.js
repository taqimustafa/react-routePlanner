import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router"

import Card from './ListCards';

class SidebarList extends Component {
	constructor(props, context) {
    super();
		this.state = {
	    displayType:"results list"
	  };
  }
  componentDidMount() {
   	var autocompleteOrigin = new google.maps.places.Autocomplete(document.getElementById('origin'));
   	var autocompleteDestination = new google.maps.places.Autocomplete(document.getElementById('destination'));
  	this.setState({
			origin:this.props.default.origin,
			destination:this.props.default.destination
		});
  }
	handleDisplayGridEvent(e) {
   	this.setState({
   		displayType:"results grid"
   	});
	}
	handleDisplayListEvent(e) {
   	this.setState({
   		displayType:"results list"
   	});
	}
	handleSubmitEvent(e){
		var origin = ReactDOM.findDOMNode(this.refs.origin).value;
		var destination = ReactDOM.findDOMNode(this.refs.destination).value;
		var keyword = ReactDOM.findDOMNode(this.refs.keyword).value;
		this.props.updateState(origin,destination,keyword);
	}
  render() {
    return (
      <div className="items-list">
        <div className="inner">
          <div className="filter">
	          <header className="clearfix">
	            <h3 className="pull-left">Plan Route</h3>
	          </header>
	          <div className="row">
	            <div className="col-md-12 col-sm-12">
	              <div className="form-group">
	                <label htmlFor="location">Start Location</label>
	                <div className="input-group location">
	                  <input id="origin" type="text" className="form-control" defaultValue={this.props.default.origin} ref="origin" placeholder="Enter Start Address" />
	                  <span className="input-group-addon"><i className="fa fa-map-marker geolocation"/></span>
	                </div>
	              </div>
	            </div>
	            <div id="waypoint-container" style={{display: 'none'}}>
	              <div className="col-md-12 col-sm-12">
	                <div className="form-group">
	                  <label htmlFor="location">Via</label>
	                  <div id="waypoint-list" />
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12 col-sm-12">
	              <div className="form-group">
	                <label htmlFor="location">End Location</label>
	                <div className="input-group location">
	                  <input id="destination" type="text" className="form-control" defaultValue={this.props.default.destination} ref="destination" placeholder="Enter Destination Address" />
	                  <span className="input-group-addon"><i className="fa fa-map-marker geolocation"/></span>
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12 col-sm-12">
	              <div className="form-group">
	                <label htmlFor="location">Waypoints</label>
	                <div className="input-group location"  style={{width: '100%'}}>
	                  <input type="text" style={{width: '100%'}} className="form-control" defaultValue={this.props.default.keyword} ref="keyword" placeholder="Enter Type" />
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12 col-sm-12">
	              <div className="form-group">
	                <button style={{width: '100%'}} type="button" onClick={this.handleSubmitEvent.bind(this)} className="btn btn-default icon">Submit <i className="fa fa-arrow-right" /></button>
	              </div>
	            </div>
	          </div>
      		</div>
          <header className="clearfix">
            <h3 className="pull-left">Results </h3>
            <div className="buttons pull-right">
              <span>Display: </span>
              <span className="icon active" onClick={this.handleDisplayListEvent.bind(this)}><i className="fa fa-th-list" /></span>
              <span className="icon" onClick={this.handleDisplayGridEvent.bind(this)}><i className="fa fa-th" /></span>
            </div>
          </header>
          <ul className={this.state.displayType}>
	          {
	          	this.props.default.places.map((result, i) => {
								return (
									<Card key={i} place={result}></Card>
								)
							})
	          }
          </ul>
        </div>
      </div>
    );
  }
}
export default SidebarList;
