import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import History from "./Components/History";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";

import "./App.css";
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <Gallery
          title="Gallery"
          id="gallery"
        />
        <Contact
          title="Contact"
          id="contact"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
