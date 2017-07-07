import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

//initial profile page with buttons to navigate to create/saved/shared lists
class Profile extends Component {
	constructor() {
		super();
	}

	componentWillMount() {
		this.setState({ profile: {} });
		const { userProfile, getProfile } = this.props.auth;
		if (!userProfile) {
			getProfile((err, profile) => {
				this.setState({ profile });
			});
		} else {
			this.setState({ profile: userProfile });
		}
	}

	render() {
		const { profile } = this.state;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5>Welcome {profile.name}</h5>
				</div>
				<pre>{JSON.stringify(profile, null, 2)}</pre>

				<div className="panel-body">
					<div className="row">
	        			<Link to="/create"><button type="submit" className="profile-btns" id="create-list-btn"> Create a new List </button></Link>
					</div>
		            <div className="row">
		              <Link to="/saved"><button type="submit" className="profile-btns" id="view-saved-list-btn"> View Saved Lists </button></Link>
		            </div>
                    <div className="row">
		              <Link to="/login"><button type="submit" className="profile-btns" id="view-saved-list-btn"> Login </button></Link>
		            </div>
		            <div className="row">
		              <Link to="/shared"><button type="submit" className="profile-btns" id="view-shared-list-btn"> View Shared Lists </button></Link>
		            </div>
				</div>
			</div>
		);
	}
}

//export Profile Component
export default Profile;
