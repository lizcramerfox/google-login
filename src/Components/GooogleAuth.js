import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '655105447076-lvotoi4b5glipdtcfpl2hvd2hlmfndv4.apps.googleusercontent.com';

class GoogleAuth extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessToken: ''
    };
  }

  login = (response) => {
    if(response.accessToken) {
      this.setState(state => ({
        isLoggedIn: true,
        accessToken: response.accessToken
      }))
    }
  }

  logout = (response) => {
    this.setState(state => ({
      isLoggedIn: false,
      accessToken: ''
    }))
  }

  handleLoginFailure = (response) => {
    alert('Failed to log in')
  }

  handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  render() {
    let authJsx

    if (this.state.isLoggedIn) {
      authJsx = (
        <Fragment>
          <GoogleLogout
          clientId={CLIENT_ID}
          buttonText='Logout'
          onLogoutSuccess={this.logout}
          onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
          <h5>Access Token:</h5> 
          <p>{this.state.accessToken}</p>
        </Fragment>
      )
    }

    if (!this.state.isLoggedIn) {
      authJsx = (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={this.login}
          onFailure={this.handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
        ></GoogleLogin>
      )
    }
    
    return authJsx
  }
}

export default withRouter(GoogleAuth);