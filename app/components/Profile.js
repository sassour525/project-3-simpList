import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from 'material-ui/Avatar';
import Navbard from './Navbar.js';

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
		const buttonStyle = {
			margin: 12,
		};

		const { profile } = this.state;
		return (
			<div>
			<Navbard />
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h5>Welcome {profile.name}
							<Avatar src={profile.picture}
							/>
						</h5>
					</div>
					{/*<pre>{JSON.stringify(profile, null, 2)}</pre>*/}

					<div className="panel-body">
						<div className="row">
							<Link to="/create"><RaisedButton primary={true} label="Create a new List" style={buttonStyle} type="submit" id="create-list-btn" /></Link>
						</div>
						<div className="row">
							<Link to="/saved"><RaisedButton primary={true} label="View Saved Lists" style={buttonStyle} type="submit" id="view-saved-list-btn" /></Link>
						</div>
						<div className="row">
							<Link to="/shared"><RaisedButton primary={true} label="View Shared Lists" style={buttonStyle} type="submit" id="view-shared-list-btn" /></Link>
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

//export Profile Component
export default Profile;
