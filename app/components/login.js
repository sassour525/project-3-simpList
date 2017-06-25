import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

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

		// Styling for material-ui
		const buttonStyle={
			margin:12,
		};
		const paperStyle1={
			height: 300,
			width: 550,
			margin: 20,
			textAligh: 'center',
			display:'inline-block',
		};
		const paperStyle2={
			padding: 5,
			height: 100,
			width: 150,
			margin: 30,
			textAligh: 'center',
			display:'inline-block',
		};
		const textFieldStyle={
			margin:12,
		};
		// end styling

		return (
			<div className="panel panel-default">
			
				<div className="panel-heading">
					<h5>Welcome to simpList</h5>
				</div>
			
				<Paper style={paperStyle1} zDepth={3}>
				<div className="col-sm-6">
					<form>							
						<TextField id="email" type="email" hintText="You Email Address" floatingLabelText="Enter Email Address:" style={textFieldStyle} underlineStyle={{display:'none'}}/>
						{/*<input id="email" type="email"  placeholder="email" className="validate" />*/}
						<br/>
						<TextField id="password" type="password" hintText="Your Password" floatingLabelText="Enter Password" style={textFieldStyle} underlineStyle={{display:'none'}}/>
						{/*<input id="password" type="password" placeholder="password" className="validate" />*/}
						<br/><br/>
						<RaisedButton label="Login" primary={true} style={buttonStyle} onClick={this.handleClick} onTouchTap={this.handleTouchTap}/>
						<RaisedButton label="New User" secondary={true} style={buttonStyle} onClick={this.handleClick} onTouchTap={this.handleTouchTap}/>
					</form>				
				</div>

				<div className="col-sm-6">
					<Paper style={paperStyle2} zDepth={1}>
						<p id="onScreenTxt">If you are a new user please enter your info and press the New User button</p>
					</Paper>
				</div>
				</Paper>	

			</div>
		);
	}
}

export default Login;
