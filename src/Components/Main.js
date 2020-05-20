import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home";
import Offer from "./Offer";
import Cart from "./Cart";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={Home}/>
      <Route exact path='/history' component={Home}/>
      <Route exact path='/gallery' component={Home}/>
      <Route exact path='/contact' component={Home}/>
      <Route path='/offres' component={Offer}/>
      <Route path='/panier' component={Cart}/>
    </Switch>
  </main>
)

export default Main