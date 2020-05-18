import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  openPromotion = () => {
    alert("TODO: use router to change page");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img className="brand-logo" src="/assets/img/navbar-logo.png" />
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">        
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    À propos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="history"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Histoire
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to=""
                    onClick={this.openPromotion}
                  >
                    Offres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mon compte</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Se connecter</a>
                    <a className="dropdown-item" href="#">S'inscrire</a>
                  </div>
                </li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#compte"><i className="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }
}
