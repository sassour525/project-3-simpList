
import React from "react";
import router from "react-router";

var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var indexRoute = router.IndexRoute;

var Login = require('../components/Login');
var Profile = require('../components/Profile');
var CreateList = require('../components/CreateList');
var SavedList = require('../components/SavedList');
var SharedList = require('../components/SharedList');

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Login}>
            <Route path="profile" component={Profile} />
            <Route path="createlist" component={CreateList} />
            <Route path="savedlist" component={SavedList} />
            <Route path="sharedlist" component={SharedList} />
        </Route>
    </Router>

);