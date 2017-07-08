import React from "react";
import {MuiThemeProvider} from "material-ui/styles";
import { Redirect, Route, BrowserRouter, HashRouter } from "react-router-dom";

import Callback from '../Callback/Callback.js';
import Auth from '../Auth/Auth';
import history from '../history';
import Login from "../components/Login.js";
import Profile from "../components/Profile.js";
import ListItem from "../components/ListItem.js";
import SavedPanel from "../components/SavedPanel.js";
import SharedPanel from "../components/SharedPanel.js";
import CreateList from "../components/CreateList.js";
import Main from "../components/Main.js";
import Home from "../components/Home.js";
import Navbard from "../components/Navbar.js"

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <MuiThemeProvider>
    <BrowserRouter history={history} component={Main}>
        <div>
          <Route exact path="/" render={(props) => <Main auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
                <Profile auth={auth} {...props} />
              )
          )} />
          <Route path="/saved" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
                <SavedPanel auth={auth} {...props} />
              )
          )} />
          <Route path="/shared" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
                <SharedPanel auth={auth} {...props} />
              )
          )} />
          <Route path="/create" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
                <CreateList auth={auth} {...props} />
              )
          )} />
          {/*<Route path="/profile" render={(props) => <Profile auth={auth} {...props}/>} />*/}
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}