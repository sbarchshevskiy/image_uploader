import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.sessionStatus}</h1>
        </div>
      </div>
    )
  }
}