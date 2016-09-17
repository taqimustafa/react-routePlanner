import React, { Component } from 'react';

import Header from './components/Header';
import SidebarList from './components/SidebarList';
import Footer from './components/Footer';

var globalState = {};
class HomePage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state ={
			origin:null,
			destination:null,
			directionService:null,
			directionsDisplay:null,
			map:null
		};
	}
	componentDidMount() {
		this.state.directionsService = new google.maps.DirectionsService;
		this.state.directionsDisplay = new google.maps.DirectionsRenderer;
		this.state.map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});
		console.log(this.state);
		this.state.directionsDisplay.setMap(this.state.map);
		globalState = this.state;
	}
	calculateAndDisplayRoute(origin, destination) {
		console.log(globalState);
		globalState.directionsService.route({
			origin: origin,
			destination: destination,
			travelMode: 'DRIVING'
		}, function(response, status) {
			if (status === 'OK') {
				globalState.directionsDisplay.setDirections(response);
			} else {
				window.alert('Directions request failed due to ' + status);
			}
		});
	}
	render() {
		return (
			<div>
				<Header />
				<div className="map-canvas list-solid">
							<div className="map">
									<div id="map"></div>
							</div>
							<SidebarList calc={this.calculateAndDisplayRoute}/>
						</div>
				<Footer />
			</div>
		);
	}
}
export default HomePage;