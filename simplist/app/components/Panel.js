import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";

// Defining a list of dropwdown options here
const dropdownOptions = [
  {
    text: "Show Lorem",
    value: "SHOW_LOREM"
  }, {
    text: "Show Cat Picture",
    value: "SHOW_CAT"
  }, {
    text: "Hide Everything",
    value: "SHOW_NONE"
  }
];

class Panel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions,
      selected: {
        text: "Select a Saved List",
        value: "SELECT_SAVED"
      }
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.renderDrop = this.renderDrop.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }

  renderDrop() {
    if ( this.state.selected.value == 'SHOW_LOREM') {
      return (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>);
    } else if (this.state.selected.value == 'SHOW_CAT') {
      return ( <img src="http://static.flickr.com/34/122530930_6e16f1eb5c.jpg"/> );
    } else if (this.state.selected.value == 'SHOW_NONE') {
      return ( null );
    }
  }

  render() {

    // var output = null;
    // if ( this.state.selected.value == 'SHOW_LOREM') {
    //   output = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>;
    // } else if (this.state.selected.value == 'SHOW_CAT') {
    //   output = <img src="http://static.flickr.com/34/122530930_6e16f1eb5c.jpg"/>;
    // } else if (this.state.selected.value == 'SHOW_NONE') {
    //   output = null;
    // }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h5>Saved Lists</h5>
        </div>
        <div className="panel-body">
        {/* Here is where we want to render our conditional content */}
        {/*output*/}
        <Dropdown
          options={this.state.dropdownOptions}
          selected={this.state.selected}
          handleSelect={this.handleDropdownSelect}  
        />
        {this.renderDrop()}
        </div>
      </div>
    );
  }
}

// Exporting our Panel component
export default Panel;