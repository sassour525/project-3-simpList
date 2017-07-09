import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Navbard from './Navbar.js';
import RaisedButton from "material-ui/RaisedButton";

//Main component used to render routes
class Main extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const buttonStyle = {
      margin: 20,
    };

    return (
      <div>
      <Navbard />
      <div className='container'>
        <Navbar fluid>
          <Navbar.Header>

            <div>
              <RaisedButton
                primary={true}
                label="Home"
                style={buttonStyle}
                onClick={this.goTo.bind(this, 'home')}
              />
            </div>
            <div>
              <RaisedButton
                primary={true}
                label="Profile"
                style={buttonStyle}
                onClick={this.goTo.bind(this, 'profile')}
              />
            </div>
            {
              !isAuthenticated() && (
              
                  <RaisedButton
                    primary={true}
                    label="Log In"
                    style={buttonStyle}
                    onClick={this.login.bind(this)}
                  />
              
              )
            }
            {
              isAuthenticated() && (
                
                  <RaisedButton
                    secondary={true}
                    label="Log Out"
                    style={buttonStyle}
                    onClick={this.logout.bind(this)}
                  />
                
              )
            }
          </Navbar.Header>
        </Navbar>
      </div>
      </div>
    );
  }
}

//export Main component
export default Main;