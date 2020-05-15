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
          id="section1"
        />
        <History
          title="Histoire"
          id="section2"
        />
        <Gallery
          title="Gallery"
          id="section3"
        />
        <Contact
          title="Contact"
          id="section4"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
