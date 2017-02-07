import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    console.log('calling constructor');
    super(props);
    this.state = {
      date : new Date()
    };
  }
  render() {
    console.log('calling render');
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
