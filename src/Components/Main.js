import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home";
import Offer from "./Offer";
import Cart from "./Cart";
import Shipping from "./Shipping";

import { userContext } from "../userContext";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <userContext.Consumer>
    {(value) =>
      (<main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={Home}/>
          <Route path='/history' component={Home}/>
          <Route path='/gallery' component={Home}/>
          <Route path='/contact' component={Home}/>
          <Route path='/offres' component={() => <Offer user={value} />} />
          <Route path='/panier' component={Cart}/>
          <Route path='/livraison' component={Shipping}/>
        </Switch>
      </main>)
    }
  </userContext.Consumer>
)

export default Main;