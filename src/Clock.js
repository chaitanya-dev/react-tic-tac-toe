import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        <h2>{new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
