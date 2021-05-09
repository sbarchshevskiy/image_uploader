import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component{

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registerErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(event){

    const {
      email,
      password,
      password_confirmation
    } = this.state;


    axios.post("http://localhost:3001/registrations", {
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      },
      {withCredentials: true}
    ).then(res => {
      if (res.data.status === 200 || 'created')
        this.props.credentialSuccess(res.data)
      console.log("resister success:", res);
    }).catch(err => {
      console.log("error registering", err)
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

          <input type="password"
                 name="password_confirmation"
                 value={this.state.password_confirmation}
                 placeholder="password_confirmation"
                 onChange={this.handleChange}
                 required
          />

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}