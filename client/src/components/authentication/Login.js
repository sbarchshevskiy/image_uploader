import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component{

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(event){
    const {
      email,
      password,
    } = this.state;


    axios.post("http://localhost:3001/sessions", {
        user: {
          email: email,
          password: password,
        }
      },
      {withCredentials: true}
    ).then(res => {
      if (res.data.status === 200)
        this.props.credentialSuccess(res.data)
      console.log("login success:", res);
    }).catch(err => {
      console.log("error logging in", err)
    })
    event.preventDefault();
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
    console.log("handle change", event)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email"
                 name="email"
                 value={this.state.email}
                 placeholder="email"
                 onChange={this.handleChange}
                 required
          />

          <input type="password"
                 name="password"
                 value={this.state.password}
                 placeholder="password"
                 onChange={this.handleChange}
                 required
          />


          <button type="submit">login</button>
        </form>
      </div>
    )
  }
}