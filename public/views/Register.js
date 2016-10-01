import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jq from 'jquery';

import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';

class Register extends Component {
	constructor(props, context) {
    	super();
  	}
	submitForm(e){
		e.preventDefault();
		var user = {
			name:ReactDOM.findDOMNode(this.refs.name).value,
			email:ReactDOM.findDOMNode(this.refs.email).value,
			password:ReactDOM.findDOMNode(this.refs.password).value,
			confirmpassword:ReactDOM.findDOMNode(this.refs.confirmpassword).value,
			newsletter:ReactDOM.findDOMNode(this.refs.newsletter).value,
		}

		jq.ajax({
			url: "/signup",
			type:"POST",
			data:{
				name:user.name,
				email:user.email,
				password:user.password,
				newsletter:user.newsletter
			},	
			success: function(result){
				console.log(result)
			}
		});
		console.log(user);
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
		                    <h1 className="page-title">Register </h1>
		                  </header>
		                  <hr />
		                  <form onSubmit={this.submitForm.bind(this)}>
		                    <div className="form-group">
		                      <label htmlFor="form-register-full-name">Full Name: </label>
		                      <input type="text" className="form-control" name="name" ref="name" required />
		                    </div>
		                    <div className="form-group">
		                      <label htmlFor="form-register-email">Email: </label>
		                      <input type="email" className="form-control" name="email" ref="email" required />
		                    </div>
		                    <div className="form-group">
		                      <label htmlFor="form-register-password">Password: </label>
		                      <input type="password" className="form-control" name="password" ref="password" required />
		                    </div>
		                    <div className="form-group">
		                      <label htmlFor="form-register-confirm-password">Confirm Password: </label>
		                      <input type="password" className="form-control" name="confirm password" ref="confirmpassword" required />
		                    </div>
		                    <div className="checkbox pull-left">
		                      <label>
		                        <input type="checkbox" name="newsletter" ref="newsletter"/>Receive Newsletter
		                      </label>
		                    </div>
		                    <div className="form-group clearfix">
		                      <button type="submit" className="btn pull-right btn-default">Create an Account </button>
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
export default Register;