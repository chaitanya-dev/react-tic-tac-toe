import React from 'react';

export default function Clock(props) {
    return (
      <div>
        <h2>{props.date.toLocaleTimeString()}</h2>
      </div>
    );
}
