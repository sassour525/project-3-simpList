// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { makeMainRoutes } from "./config/routes";

const routes = makeMainRoutes();

//render Routes
ReactDOM.render(routes, document.getElementById("app"));
