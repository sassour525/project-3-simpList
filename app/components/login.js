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
		const paperStyle={
			height: 300,
			width: 500,
			margin: 20,
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
			
				<Paper style={paperStyle} zDepth={3}>
						<form>							
							<TextField id="email" type="email" hintText="You Email Address" floatingLabelText="Enter Email Address:" style={textFieldStyle} underlineStyle={{display:'none'}}/>
							{/*<input id="email" type="email"  placeholder="email" className="validate" />*/}
							<br/>
							<TextField id="password" type="password" hintText="Your Password" floatingLabelText="Enter Password" style={textFieldStyle} underlineStyle={{display:'none'}}/>
							{/*<input id="password" type="password" placeholder="password" className="validate" />*/}
							<br/><br/>
							<RaisedButton label="Login" primary={true} style={buttonStyle} onClick={this.handleClick} onTouchTap={this.handleTouchTap}/>
						</form>				
				</Paper>			
				
			</div>
		);
	}
}

export default Login;
