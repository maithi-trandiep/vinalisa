import React, { Component } from "react";

import Navbar from "./Navbar";
import About from "./About";
import Header from "./Header";
import History from "./History";
import Contact from "./Contact";
import ModalLogin from "./ModalLogin";
import GalleryVin from "./GalleryVin";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false
    }
  }
  
  componentDidMount() {
    const searchParams = new URLSearchParams( this.props.location.search.substring(1) );
    if(searchParams.get("login") === 'true') {
      this.setState({showLoginModal: true});
    }
  }

  componentDidUpdate() {
    if (this.state.showLoginModal) {
      const items = document.getElementsByClassName('dropdown-item');
      for(var i=0; i<items.length; i++) {
        let target = items[i].dataset.target;
        if(target === '#modalLogin') {
          items[i].click();
          break;
        }
      }
    }
  }

  render() {
    return (
      <div className="Home">
          <Navbar />
          <Header />

          <About
            title="A propos"
            id="about"
          />
          <History
            title="Histoire"
            id="history"
          />
          <GalleryVin
            title="Gallery Vin"
            id="galleryvin"
            dataItems={[{title: "Vin1", description: "Description 1", imgUrl: "./assets/img/raisin_field.jpg"}, {title: "Vin2", description: "Description 2", imgUrl: "./assets/img/raisin_field.jpg"}, {title: "Vin3", description: "Description 3", imgUrl: "./assets/img/raisin_field.jpg"}, {title: "Vin4", description: "Description 4", imgUrl: "./assets/img/raisin_field.jpg"}]}
          />
          <GalleryVin
            title="Gallery Vin 2"
            id="galleryvin2"
            dataItems={[{title: "Vin1", description: "Description 1", imgUrl: "./assets/img/raisin_field.jpg"}, {title: "Vin2", description: "Description 2", imgUrl: "./assets/img/raisin_field.jpg"}, {title: "Vin3", description: "Description 3", imgUrl: "./assets/img/raisin_field.jpg"}, {title: "Vin4", description: "Description 4", imgUrl: "./assets/img/raisin_field.jpg"}]}
          />
          <Contact
            title="Contact"
            id="contact"
          />
          <ModalLogin showModal={this.state.showLoginModal} />
      </div>
    );
  }
}

export default Home;
