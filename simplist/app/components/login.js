import React, { Component } from "react";

//login component with form for email and password
class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5>Welcome to simpList</h5>
				</div>
				<div className="panel-body">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<input id="email" type="email"  placeholder="email" className="validate" />
								</div>
								<div className="row">
									<input id="password" type="password" placeholder="password" className="validate" />
								</div>
								<div className="row">
									<br/>
									<button type="submit" className='login'> Login </button>
								</div>
							</form>
						</div>
				</div>
			</div>
		);
	}
}

export default Login;
