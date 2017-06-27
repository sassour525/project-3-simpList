import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

import Login from "./login.js";
import Profile from "./Profile.js";
import ListItem from "./ListItem.js";
import SavedPanel from "./SavedPanel.js";
import SharedPanel from "./SharedPanel.js";
import CreateList from "./CreateList.js";

class Main extends Component {

    render() {
        return (
            <div className="container">
                <Link to="/panel"><button className="btn btn-success btn-lg">Panel</button></Link>
                <Link to="/login"><button className="btn btn-success btn-lg">Login</button></Link>
                <div>
                    <p> this is rendering </p>
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

export default Main;