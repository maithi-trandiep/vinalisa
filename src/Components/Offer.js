import React, { Component } from "react";
import NavMenu from "./NavMenu";
import GalleryOffer from "./GalleryOffer";

class Offer extends Component {
  render() {
    return (
      <div className="Offre">          
        <NavMenu />
        <GalleryOffer
            title="Offres"
            subtitle="Nos actuelles offres"
            id="gallery"
        />
      </div>
    );
  }
}

export default Offer;
