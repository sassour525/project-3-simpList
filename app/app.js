// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Including our Panel and Container components
import Login from "./components/Login";
import SavedPanel from "./components/SavedPanel";
import SharedPanel from "./components/SharedPanel";
import Container from "./components/Container";
import Profile from "./components/Profile";
import CreateList from "./components/CreateList";

// Creating an App component which renders a Panel inside of a Container
const App = () => (
<<<<<<< HEAD
  <Container>
    <SharedPanel />
  </Container>
=======
  <MuiThemeProvider>
    <Login />
  </MuiThemeProvider>
>>>>>>> 6075df93dcda2fb562e79aa3097e1dd18feebd90
);

ReactDOM.render(<App />, document.getElementById("app"));
