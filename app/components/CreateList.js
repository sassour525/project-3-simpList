import React, { Component } from "react";

class CreateList extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5>Create a new list</h5>
				</div>
				<div className="panel-body">
					<div className="row">
						<input id="new-list-item-txt-box" type="text" placeholder="Enter a new list item" />
						<button type="submit" id="add-list-item-btn">+</button>
					</div>
					<div className="row">
						<input id="share-list-txt-box" type="text" placeholder="Enter the user's ID to share" />
						<br />
						<button type="submit" id="share-new-list-btn">Share List</button>
					</div>
					<div className="row">
						<input id="new-list-name-box" type="text" placeholder="Enter a list name" />
						<br />
						<button type="submit" id="save-new-list-btn">Save List</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CreateList;
