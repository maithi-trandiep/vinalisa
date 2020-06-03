import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Vins artisanaux</div>
          <div className="masthead-heading text-uppercase">Vinalisa</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#apropos">En savoir plus</a>
        </div>
      </header>
    );
  }
}
