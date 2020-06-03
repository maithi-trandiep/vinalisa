import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import * as RouterDom from 'react-router-dom';
import Dropdown from './Dropdown';


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img alt="logo" className="brand-logo" src="./assets/img/navbar-logo.png" />
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">        
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="apropos"
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
                    to="histoire"
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
                    to="galleryvin"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <RouterDom.Link
                    className="nav-link"
                    to="/offres"
                  >
                    Offres
                  </RouterDom.Link>
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
                <li className="nav-item">
                  <Dropdown title="Mon Compte" dropdownItems={[{title: "Se connecter", link: "", modalId: "#modalLogin", useModal: true}, {title: "S'inscrire", link: "", modalId: "#modalLogin", useModal: true}]} />
                </li>
                <li className="nav-item">
                  <RouterDom.Link
                  className="nav-link"
                  to="/panier"
                  >
                    <i className="fa fa-shopping-basket fa-lg"></i>
                  </RouterDom.Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }
}
