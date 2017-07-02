import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

//initial profile page with buttons to navigate to create/saved/shared lists
class Profile extends Component {
	constructor() {
		super();
	}

	
	render() {

		const buttonStyle ={
		margin: 12,
	};

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5>Welcome Username</h5>
				</div>
				<div className="panel-body">
					<div className="row">
		              <Link to="/create"><RaisedButton primary={true} label="Create a new List" style={buttonStyle} type="submit" id="create-list-btn" /></Link>
					</div>
		            <div className="row">
		              <Link to="/saved"><RaisedButton primary={true} label="View Saved Lists" style={buttonStyle} type="submit" id="view-saved-list-btn" /></Link>
		            </div>
		            <div className="row">
		              <Link to="/shared"><RaisedButton primary={true} label="View Shared Lists" style={buttonStyle} type="submit"id="view-shared-list-btn" /></Link>
		            </div>
				</div>
			</div>
		);
	}
}

export default Profile;
