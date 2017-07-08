import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";
import ActionableListItem from './ActionableListItem.js';
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import helpers from "../utils/helpers.js";
import Navbard from './Navbar.js';

class SavedPanel extends Component {
    // Initializing our dropdownOptions on state, setting a default selected option
    // Also setting all of our possible options using the dropdownOptions variable
    constructor() {
        super();
        this.state = {
            dropdownOptions: [],
            selected: { text: 'Select a List' },
            savedTodoList: [],
            sharedID: ''
        };
        // Binding functions to our component 
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
    }

    renderList(savedTodoList) {
        return savedTodoList.map((item, index) => {
            return (<ActionableListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index} />);
        });
    }

    // This function is called by the Dropdown component whenever an option is chosen
    handleDropdownSelect(option) {
        const _this = this;
        helpers.getListItems(option.value).then((list) => {
            console.log(list);
            _this.setState({ selected: { text: list.data.title, value: list.data._id }, savedTodoList: list.data.listItems });
            console.log(_this.state.selected);
        });
    }

    componentDidMount() {
        //push the query results into the array to pass along to DropDown to render
        let userId = localStorage.getItem("userId");
        helpers.getSavedList(userId).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                this.state.dropdownOptions.push({ text: response.data[i].title, value: response.data[i]._id });
            }
        }.bind(this));
    }

    toggleClick(taskIndex) {
        console.log(taskIndex);
        const newToDoList = [...this.state.savedTodoList];
        newToDoList[taskIndex].completed = !newToDoList[taskIndex].completed;
        this.setState({
            savedTodoList: newToDoList,
            output: []
        });
    }

    handleChange(key) {
        return function (e) {
            let state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //sharedID to save
        console.log(this.state.sharedID);
        let shareOptions = {
            listId: this.state.selected.value,
            name: this.state.sharedID
        }
        console.log(shareOptions);
        console.log("Username: " + shareOptions.name)
        helpers.shareList(shareOptions).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        })
    };

    render() {

        return (
            <div>
                <Navbard />
                <div className='container'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h5>Saved Lists</h5>
                        </div>
                        <div className="panel-body">
                            <form id="share-form" onSubmit={this.handleSubmit}>
                                <input id="shareID-txt" type="text" value={this.state.listName} onChange={this.handleChange('sharedID')} placeholder="User Name" />
                                <button id="share-list-btn">Share List</button>
                            </form>
                            <Dropdown
                                options={this.state.dropdownOptions}
                                selected={this.state.selected}
                                handleSelect={this.handleDropdownSelect}
                            />
                            {this.renderList(this.state.savedTodoList)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporting our SavedPanel component
export default SavedPanel;
