import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jq from 'jquery';

import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';

class Login extends Component {
	constructor(props, context) {
		super();
	}
	submitForm(e){
		e.preventDefault();
		var user = {
			email:ReactDOM.findDOMNode(this.refs.email).value,
			password:ReactDOM.findDOMNode(this.refs.password).value
		}
		jq.ajax({
			url: "/signin",
			type:"POST",
			data:{
				email:user.email,
				password:user.password
			},	
			success: function(result){
				console.log(result)
			}
		});
	}
	render() {
		return (
			<div>
				<Header />
					<div id="page-canvas">
						<Breadcrumb name={this.props.route.name}/>
						<div id="page-content">
							<section className="container">
								<div className="block">
									<div className="row">
										<div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
											<header>
												<h1 className="page-title">Sign In </h1>
											</header>
											<hr />
											<form onSubmit={this.submitForm.bind(this)}>
												<div className="form-group">
													<label htmlFor="form-sign-in-email">Email: </label>
													<input type="email" name="email" className="form-control" ref="email"/>
												</div>
												<div className="form-group">
													<label htmlFor="form-sign-in-password">Password: </label>
													<input type="password" className="form-control" ref="password"/>
												</div>
												<div className="form-group clearfix">
													<button type="submit" className="btn pull-right btn-default">Sign In </button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				<Footer />
			</div>
		);
	}
}
export default Login;