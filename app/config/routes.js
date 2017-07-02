import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import {MuiThemeProvider} from "material-ui/styles";

import Login from "../components/Login.js";
import Profile from "../components/Profile.js";
import ListItem from "../components/ListItem.js";
import SavedPanel from "../components/SavedPanel.js";
import SharedPanel from "../components/SharedPanel.js";
import CreateList from "../components/CreateList.js";

export const makeMainRoutes = () => {
  return (
    <MuiThemeProvider>
      <BrowserRouter history={history} component={Profile}>
        <div className="container">
          <div>
            <Route exact path="/" render={() => <Profile />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/saved" render={() => <SavedPanel />} />
            <Route path="/shared" render={() => <SharedPanel />} />
            <Route path="/create" render={() => <CreateList />} />
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}