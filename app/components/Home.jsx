import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__header">Do Not Pay</h1>
        <h2 className="home__subheader">An easy to use, community driven resource of potentially dangerous Bitcoin addresses</h2>
        <input placeholder="Enter a Bitcoin address" />
      </div>
    );
  }
}
