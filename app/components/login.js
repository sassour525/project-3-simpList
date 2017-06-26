import React, { Component } from "react";

//login component with form for email and password
class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	//handle text input in login form
	handleChange(key) {
		return function(e){
	        let state = {};
	        state[key] = e.target.value;
	        this.setState(state);
	    }.bind(this);
	}

	//handle form submit to grab state values
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.email);
		console.log(this.state.password);

		//user values input to check with passport to confirm credentials are valid
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5>Welcome to simpList</h5>
				</div>
				<div className="panel-body">
						<div className="row">
							<form className="col s12" onSubmit={this.handleSubmit}>
								<div className="row">
									<input id="email" type="email" value={this.state.email} onChange={this.handleChange('email')} placeholder="email" className="validate" />
								</div>
								<div className="row">
									<input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="password" className="validate" />
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
