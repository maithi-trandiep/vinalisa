import React, { Component } from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import { userContext } from './userContext';

import "./App.css";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { isLogged: false }
    };
  }

  componentDidMount() {
    // get and set currently logged in user to state
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
