import React, { Component } from 'react';
import Register from "./Register";
import Login from "./Login";
import axios from 'axios';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.credentialSuccess = this.credentialSuccess.bind(this);
    this.toLogout = this.toLogout.bind(this);
  }

  credentialSuccess(data) {
    this.props.allowLogin(data)
    this.props.history.push("/nav");
  }

  toLogout(){
    axios.delete("http://localhost:3001/logout",
      {withCredentials: true}
    ).then(res => {
      this.props.logout();
    }).catch(err => {
      console.log("error logging out: ", err);
    })

    this.props.logout();
    console.log('logout pressed')
  }

  render() {
    return (
      <div>
        <h1>{this.props.sessionStatus}</h1>
        <button type="submit" onClick={() => this.toLogout()}>logout</button>
        <Register credentialSuccess={this.credentialSuccess}/>
        <Login credentialSuccess={this.credentialSuccess}/>
      </div>
    )
  }
}