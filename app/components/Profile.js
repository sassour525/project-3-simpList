import React, { Component } from "react";

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
              <button type="submit" id='create-list-btn'> Create a new List </button>
						</div>
            <div className="row">
              <button type="submit" id='view-saved-list-btn'> View Saved Lists </button>
            </div>
            <div className="row">
              <button type="submit" id='view-shared-list-btn'> View Shared Lists </button>
            </div>
				</div>
			</div>
		);
	}
}

export default Profile;
