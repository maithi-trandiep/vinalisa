import React, { Component } from 'react';

import ModalConfirmCart from "./ModalConfirmCart";

export default class Box extends Component {
  render(){
    return (
      <div className="box">
      <div className="gallery-item">
          <a className="gallery-link" data-toggle="modal" href={this.props.modalHref}>
          <div className="gallery-hover">
            <div className="gallery-hover-content"><i className="fa fa-plus fa-3x"></i></div>
          </div>
            <img className="img-fluid" src={this.props.imgUrl} alt=""/></a>
          <div className="gallery-caption">
            <div className="gallery-caption-heading">{this.props.title}</div>
            <div className="gallery-caption-subheading text-muted">{this.props.description}</div>
          </div>
          <div className="btn-action" style={{display: "flex", justifyContent: "center"}}>
          <button onClick={() => this.props.addToCart()} className="btn btn-outline-dark" data-toggle="modal" data-target={"#modalConfirmBox"+this.props.id}><i className="fa fa-shopping-basket"></i> Ajouter au panier</button>
          </div>
          <ModalConfirmCart id={"modalConfirmBox"+this.props.id} title={this.props.title} imgUrl={this.props.imgUrl} />
      </div>
      </div>    
    );
  }
}