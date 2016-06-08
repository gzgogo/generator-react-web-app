
import './HelloReact.styl';
import React from 'react';

var HelloReact = React.createClass({
  render: function() {
    return (
      <div><h1>Hello React</h1></div>
    );
  }
});

module.exports = HelloReact;
