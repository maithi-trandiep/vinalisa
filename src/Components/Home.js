import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Header from "./Header";
import History from "./History";
import Contact from "./Contact";
import ModalLogin from "./ModalLogin";
import GalleryVin from "./GalleryVin";

class Home extends Component {
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
          />
          <Contact
            title="Contact"
            id="contact"
          />

          <ModalLogin />
      </div>
    );
  }
}

export default Home;
