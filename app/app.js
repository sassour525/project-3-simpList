// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";

// Including our Panel and Container components
import Login from "./components/Login";
import SavedPanel from "./components/SavedPanel";
import SharedPanel from "./components/SharedPanel";
import Profile from "./components/Profile";
import CreateList from "./components/CreateList";

ReactDOM.render(routes, document.getElementById("app"));
