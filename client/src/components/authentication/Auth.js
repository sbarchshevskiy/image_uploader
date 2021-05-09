import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Main from "./components/Main";
import Nav from "./components/Nav";
import Login from "./components/Login";
import axios from 'axios';


export default class App extends Component{
  constructor() {
    super();

    this.state = {
      sessionStatus: "signed out",
      user: {}
    };

    this.allowLogin = this.allowLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  validateCurrentSession() {
    axios.get("http://localhost:3001/logged_in",
      {withCredentials: true}
    ).then(res => {
      if (res.data.logged_in && this.state.sessionStatus === "signed out")
        this.setState({
          sessionStatus: "signed in",
          user: res.data.user
        })
      else if (!res.data.logged_in && this.state.sessionStatus === "signed in") {
        this.state({
          sessionStatus: "signed out",
          user: {}
        })
      }
    }).catch(err => {
      console.log("error login", err)
    })
  }

  componentDidMount() {
    this.validateCurrentSession()
  }

  logout(){
    this.setState({
      sessionStatus: "signed out",
      user: {}
    })
    console.log('state', this.state)
  }

  allowLogin(data) {
    this.setState({
      sessionStatus: "signed in",
      user: data.user
    })
    console.log('user data',data.user)
  }

  render() {
    return (
      <BrowserRouter>
        <Link to="/">Main</Link>
        <Link to="/nav">Register</Link>
        <Link to="/sessions">Login</Link>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <Main
                {...props}
                allowLogin={this.allowLogin}
                logout={this.logout}
                sessionStatus={this.state.sessionStatus}
              />
            )}
          />
          <Route
            exact
            path={"/nav"}
            render={props => (
              <Nav {...props}
                   allowLogin={this.allowLogin}
                   logout={this.logout}
                   sessionStatus={this.state.sessionStatus}/>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

