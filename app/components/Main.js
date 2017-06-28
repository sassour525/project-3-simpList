import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

//import components for routes
import Login from "./Login.js";
import Profile from "./Profile.js";
import ListItem from "./ListItem.js";
import SavedPanel from "./SavedPanel.js";
import SharedPanel from "./SharedPanel.js";
import CreateList from "./CreateList.js";

//Main component used to render routes
class Main extends Component {

    render() {
      return (
        <div className="container">
          <div>
            <Route exact path="/" render={() => <Profile />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/saved" render={() => <SavedPanel />} />
            <Route path="/shared" render={() => <SharedPanel />} />
            <Route path="/create" render={() => <CreateList />} />
          </div>
        </div>
      );
    }
}

//export Main component
export default Main;