import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';

class Login extends Component {
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
		                    <h1 className="page-title">Sign In </h1>
		                  </header>
		                  <hr />
		                  <form role="form" id="form-sign-in-account" method="post">
		                    <div className="form-group">
		                      <label htmlFor="form-sign-in-email">Email: </label>
		                      <input type="email" className="form-control" id="form-sign-in-email" name="form-sign-in-email" required />
		                    </div>
		                    <div className="form-group">
		                      <label htmlFor="form-sign-in-password">Password: </label>
		                      <input type="password" className="form-control" id="form-sign-in-password" name="form-sign-in-password" required />
		                    </div>
		                    <div className="form-group clearfix">
		                      <button type="submit" className="btn pull-right btn-default" id="account-submit">Sign In </button>
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