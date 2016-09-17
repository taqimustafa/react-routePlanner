import React, { Component } from 'react';
import { Link } from "react-router"

import Maps from './Maps';

class SidebarList extends Component {
	constructor(props, context) {
    super();
		this.state = {
	    origin: null,
	    destination: null
	  };
  }
  handleOriginChange(e) {
   	this.state.origin = e.target.value;
	}
	handleDestinationChange(e) {
   	this.state.destination = e.target.value;
	}
	handleSubmitEvent(e){
		//console.log(Maps);
		this.props.location.origin = this.state.origin;
		this.props.location.destination = this.state.destination;
		//Maps.calculateAndDisplayRoute(this.state.origin,this.state.destination);
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
	                  <input type="text" className="form-control" onChange={this.handleOriginChange.bind(this)} placeholder="Enter Start Address" />
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
	                  <input type="text" className="form-control" onChange={this.handleDestinationChange.bind(this)} placeholder="Enter Destination Address" />
	                  <span className="input-group-addon"><i className="fa fa-map-marker geolocation"/></span>
	                </div>
	              </div>
	            </div>
	            <div className="col-md-12 col-sm-12">
	              <div className="form-group">
	                <label htmlFor="location">Waypoints</label>
	                <div className="input-group location"  style={{width: '100%'}}>
	                  <input type="text" style={{width: '100%'}} className="form-control" defaultValue="Gas Station" id="waypoint" placeholder="Enter Type" />
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
              <span className="icon active" id="display-grid"><i className="fa fa-th" /></span>
              <span className="icon" id="display-list"><i className="fa fa-th-list" /></span>
            </div>
          </header>
          <ul className="results grid">
          </ul>
        </div>
      </div>
    );
  }
}
export default SidebarList;
