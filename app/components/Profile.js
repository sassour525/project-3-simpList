import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

//initial profile page with buttons to navigate to create/saved/shared lists
class Profile extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5>Welcome Username</h5>
				</div>
				
				<div className="panel-body">
					<div className="row">
		              <Link to="/create"><button type="submit" className="profile-btns" id="create-list-btn"> Create a new List </button></Link>
					</div>
		            <div className="row">
		              <Link to="/saved"><button type="submit" className="profile-btns" id="view-saved-list-btn"> View Saved Lists </button></Link>
		            </div>
		            <div className="row">
		              <Link to="/shared"><button type="submit" className="profile-btns" id="view-shared-list-btn"> View Shared Lists </button></Link>
		            </div>
				</div>
			</div>
		);
	}
}

export default Profile;
