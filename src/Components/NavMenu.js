import React, { Component } from "react";
import * as RouterDom from "react-router-dom";
import Dropdown from './Dropdown';


export default class NavMenu extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink-dark" id="mainNav" style={{backgroundColor: 'black'}}>
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img className="brand-logo" src="/assets/img/navbar-logo.png" />
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">        
                <li className="nav-item">
                  <RouterDom.Link
                    className="nav-link"
                    to="/about"
                  >
                    À propos
                  </RouterDom.Link>
                </li>
                <li className="nav-item">
                  <RouterDom.Link
                    className="nav-link"
                    to="/history"
                  >
                    Histoire
                  </RouterDom.Link>
                </li>
                <li className="nav-item">
                  <RouterDom.Link
                    className="nav-link"
                    to="/gallery"
                  >
                    Gallery
                  </RouterDom.Link>
                </li>
                <li className="nav-item">
                  <RouterDom.Link
                    className="nav-link"
                    to="/offre"
                  >
                    Offres
                  </RouterDom.Link>
                </li>
                <li className="nav-item">
                  <RouterDom.Link
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </RouterDom.Link>
                </li>
                <li className="nav-item">
                  <Dropdown title="Mon Compte" dropdownItems={[{title: "Se connecter", href: "#modalLogin", useModal: true}, {title: "S'inscrire", href: "#modalLogin", useModal: true}]} />
                </li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#compte"><i className="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }
}
