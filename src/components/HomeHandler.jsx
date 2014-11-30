/**
 * @providesModule HomeHandler
 * @flow
 */

var React = require('react');

var HomeHandler = React.createClass({
  render(): any {
    return (
      <div className="home-handler">
        <h2>Home</h2>
        <p>This is the Home Handler</p>
      </div>
    );
  }
});

module.exports = HomeHandler;
