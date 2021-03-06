import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavMenu from './NavMenu';
import ListOffer from './ListOffer';

export default class Offer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    }
  }

  componentWillMount() {
    if (!this.props.user || !this.props.user.isLogged) {
      this.setState({isLogged: false});
    } else {
      this.setState({isLogged: true});
    }
  }

  render() {
    if (this.state.isLogged) {
      return (
        <div className="Offer">          
          <NavMenu />
          <ListOffer
              title="Offres"
              subtitle="Nos actuelles offres"
              id="gallery"
          />
        </div>
      );
    } else {
      return <Redirect to="/?login=true" />
    }
  }
}


