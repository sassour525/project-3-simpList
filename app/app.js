// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";

// Including our Panel and Container components
import Login from "./components/login";
import SavedPanel from "./components/SavedPanel";
import SharedPanel from "./components/SharedPanel";
import Container from "./components/Container";
import Profile from "./components/Profile";
import CreateList from "./components/CreateList";

// Creating an App component which renders a Panel inside of a Container
const App = () => (
  <Container>
    <CreateList />
  </Container>
);

ReactDOM.render(routes, document.getElementById("app"));
