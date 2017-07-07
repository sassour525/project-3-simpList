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
      email: '',
      password: ''
    }
  }

  //handle text input in login form
  handleChange(key) {
    return function (e) {
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

    //user values input to check with auth to confirm credentials are valid
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

			
				<div className="panel-body">
					<div className="row">
						<div className="col-sm-6">
							<form>							
								<TextField id="email" type="email" value={this.state.email} onChange={this.handleChange('email')} hintText="You Email Address" floatingLabelText="Enter Email Address:" className="validate" style={textFieldStyle} underlineStyle={{display:'none'}}/>
							
								<br/>
								<TextField id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} hintText="Your Password" floatingLabelText="Enter Password" className="calidate" style={textFieldStyle} underlineStyle={{display:'none'}}/>
					
								<br/><br/>
								<RaisedButton label="Login" type="submit" primary={true} style={buttonStyle} onClick={this.handleClick} onTouchTap={this.handleTouchTap}/>
								{/*<RaisedButton label="New User" secondary={true} style={buttonStyle} onClick={this.handleClick} onTouchTap={this.handleTouchTap}/>*/}
							</form>
						</div>

						<div className="col-sm-6">
						<p id="onScreenTxt">Welcome text here, brief app description and request user to login</p>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

//export Login component
export default Login;
