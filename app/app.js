// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { makeMainRoutes } from "./config/routes";

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById("app"));
