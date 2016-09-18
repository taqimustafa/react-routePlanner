import React, { Component } from 'react';

import Header from './components/Header';
import SidebarList from './components/SidebarList';
import Maps from './components/Maps';
import Footer from './components/Footer';

var that;
class HomePage extends Component {
	constructor(props, context) {
    super();
		this.state = {
	    origin: 'islamabad',
	    destination: 'karachi',
	    keyword:'gas station'
	  };
	  that = this;
  }
	updateLocation(origin,destination){
		console.log(origin,destination);
		that.setState({
			origin:origin,
			destination:destination
		});
	}
	render() {
		return (
			<div>
				<Header />
				<div className="map-canvas list-solid">
					<div className="map">
						<Maps direction={this.state}/>
					</div>
					<SidebarList updateState={this.updateLocation} default={this.state}/>
				</div>
				<Footer />
			</div>
		);
	}
}
export default HomePage;