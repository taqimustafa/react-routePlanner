import React, { Component } from 'react';

import Header from './components/Header';
import SidebarList from './components/SidebarList';
import Maps from './components/Maps';
import Footer from './components/Footer';

class HomePage extends Component {
	constructor(props, context) {
	    super(props, context);
		this.state = {
			origin:'islamabad',
			destination:'lahore'
		}
	}
	render() {
		return (
			<div>
				<Header />
				<div className="map-canvas list-solid">
			        <div className="map">
			          	<Maps location={this.state} />
			        </div>
		        	<SidebarList location={this.state}/>
		        </div>
				<Footer />
			</div>
		);
	}
}
export default HomePage;