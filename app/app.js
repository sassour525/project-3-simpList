// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Including our Panel and Container components
import Login from "./components/Login";
import Container from "./components/Container";

// Creating an App component which renders a Panel inside of a Container
const App = () => (
  <Container>
    <Login />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
