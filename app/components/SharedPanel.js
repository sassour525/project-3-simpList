import React, { Component } from "react";

// Importing our components
import Dropdown from "./Dropdown";
import ActionableListItem from './ActionableListItem.js';
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import helpers from "../utils/helpers.js";
import Navbard from './Navbar.js';

class SharedPanel extends Component {
    // Initializing our dropdownOptions on state, setting a default selected option
    // Also setting all of our possible options using the dropdownOptions variable
    constructor() {
        super();
        this.state = {
            dropdownOptions: [],
            selected: {},
            sharedTodoList: [],
        };

        // Binding functions to our component
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
    }

    renderList(sharedTodoList) {
        return sharedTodoList.map((item, index) => {
            return (<ActionableListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index} />);
        });
    }

    // This function is called by the Dropdown component whenever an option is chosen
    handleDropdownSelect(option) {
        // Setting this.state.selected to the dropdown option the user clicks
        const _this = this;
        helpers.getListItems(option.value).then((list) => {
            console.log(list);
            _this.setState({ selected: { text: list.data.title, value: list.data._id }, sharedTodoList: list.data.listItems });
        });
    }

    componentDidMount() {
        //DB call to get dropdownOptions
        //push the query results into the array to pass along to DropDown to render
        let userId = localStorage.getItem("userId")
        helpers.getSharedLists(userId).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                this.state.dropdownOptions.push({ text: response.data[i].title, value: response.data[i]._id });
            }
        }.bind(this));
    }

    toggleClick(taskIndex) {
        console.log(taskIndex);
        const newToDoList = [...this.state.sharedTodoList];
        newToDoList[taskIndex].completed = !newToDoList[taskIndex].completed;
        this.setState({
            sharedTodoList: newToDoList,
        });
    }
    render() {

        return (
            <div>
                <Navbard />
                <div className='container'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h5>Shared Lists</h5>
                        </div>
                        <div className="panel-body">
                            <Dropdown
                                options={this.state.dropdownOptions}
                                selected={this.state.selected}
                                handleSelect={this.handleDropdownSelect}
                            />
                            {this.renderList(this.state.sharedTodoList)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporting our SharedPanel component
export default SharedPanel;
