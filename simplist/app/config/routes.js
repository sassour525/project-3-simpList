
import React from "react";
import router from "react-router";

var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var indexRoute = router.IndexRoute;

var Login = require('../components/Login');
var Welcome = require('../components/Welcome');
var NewList = require('../components/NewList');
var SavedList = require('../components/SavedList');
var SharedList = require('../components/SharedList');

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Login}>
            <Route path="welcome" component={Welcome} />
            <Route path="newlist" component={NewList} />
            <Route path="savedlist" component={SavedList} />
            <Route path="sharedlist" component={SavedList} />
        </Route>
    </Router>

);