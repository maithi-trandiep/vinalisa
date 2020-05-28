import React, { Component } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { userContext } from './userContext';

import "./App.css";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { isLogged: true }
    };
  }

  render() {
    return (
      <div className="App">
        <userContext.Provider value={this.state.user}>
          <Main />
        </userContext.Provider>
          
        <Footer />
      </div>
    );
  }
}

export default App;
