import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';

class Register extends Component {
	render() {
		return (
			<div>
				<Header />
					<div id="page-canvas">
		        <Breadcrumb />
		        <div id="page-content">
		          <section className="container">
		            <div className="block">
		              <div className="row">
		                <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
		                  <header>
		                    <h1 className="page-title">Register </h1>
		                  </header>
		                  <hr />
		                  <form role="form" id="form-register" method="post">
		                    <div className="form-group">
		                      <label htmlFor="form-register-full-name">Full Name: </label>
		                      <input type="text" className="form-control" id="form-register-full-name" name="form-register-full-name" required />
		                    </div>
		                    <div className="form-group">
		                      <label htmlFor="form-register-email">Email: </label>
		                      <input type="email" className="form-control" id="form-register-email" name="form-register-email" required />
		                    </div>
		                    <div className="form-group">
		                      <label htmlFor="form-register-password">Password: </label>
		                      <input type="password" className="form-control" id="form-register-password" name="form-register-password" required />
		                    </div>
		                    <div className="form-group">
		                      <label htmlFor="form-register-confirm-password">Confirm Password: </label>
		                      <input type="password" className="form-control" id="form-register-confirm-password" name="form-register-confirm-password" required />
		                    </div>
		                    <div className="checkbox pull-left">
		                      <label>
		                        <input type="checkbox" name="newsletter" />Receive Newsletter
		                      </label>
		                    </div>
		                    <div className="form-group clearfix">
		                      <button type="submit" className="btn pull-right btn-default" id="account-submit">Create an Account </button>
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