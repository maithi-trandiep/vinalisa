import React, { Component } from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./App.css";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main />
          
          <Footer />
      </div>
    );
  }
}

export default App;
