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
	    origin: '',
	    destination: '',
	    keyword:'',
	    places:[]
	  };
	  that = this;
	  console.log(this.props);
  }
	updateLocation(origin,destination,keyword){
		console.log(origin,destination,keyword);
		that.setState({
			origin:origin,
			destination:destination,
			keyword:keyword
		});
	}
	renderCards(placesArray){
		that.setState({
			places:placesArray
		});
	}
	render() {
		return (
			<div>
				<Header />
				<div className="map-canvas list-solid">
					<div className="map">
						<Maps updatePlaces={this.renderCards.bind(this)} direction={this.state}/>
					</div>
					<SidebarList updateState={this.updateLocation.bind(this)} default={this.state}/>
				</div>
				<Footer />
			</div>
		);
	}
}
export default HomePage;