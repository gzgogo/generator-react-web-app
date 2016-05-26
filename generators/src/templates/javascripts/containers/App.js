import React from 'react';

import HelloReact from '../components/HelloReact/HelloReact'

var App = React.createClass({
  render() {
    return (
      <div className="app">
        <HelloReact />
      </div>
    );
  }
});

module.exports = App;
