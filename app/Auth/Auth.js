import auth0 from 'auth0-js';
import history from '../history.js'
import { AUTH_CONFIG } from './auth0-variables';
import helpers from "../utils/helpers.js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: 'https://stephenpino.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    console.log("handle authentication");
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/profile');
      } else if (err) {
        history.replace('/profile');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    helpers
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    console.log("Set Session working");
    // navigate to the home route
    history.replace('/profile');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem("userId");
    // navigate to the home route
    history.replace('/');
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
        helpers.createUser(profile).then(function(userInfo){

            if(userInfo.data._id){
                localStorage.setItem("userId", userInfo.data._id);
            }else if(userInfo.data.alreadyExist){
                localStorage.setItem("userId", userInfo.data._id);
            }else{
                console.log(userInfo.data._id);
            }
        }).catch(function(err){
            console.log(err);
        })
      }
      cb(err, profile);
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log("Is authenticated:" + "expires at: " + expiresAt);
    return new Date().getTime() < expiresAt;
  }
}