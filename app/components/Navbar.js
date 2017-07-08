import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Route, Link } from "react-router-dom";
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (

  
  
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <Link to='/profile'> <MenuItem primaryText="Profile" /></Link>
    <Link to='/create'> <MenuItem primaryText="Create New List" /></Link>
    <Link to='/saved'> <MenuItem primaryText="Saved Lists" /></Link>
    <Link to='/shared'> <MenuItem primaryText="Shared Lists" /></Link>
    <Link to='/'> <MenuItem primaryText="Home" /></Link>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Navbard extends Component {

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  render() {
    return (
      <div>
        <AppBar
          title="simpList"
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}

export default Navbard;