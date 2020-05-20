import React from "react";
import ModalConfirmCart from "./ModalConfirmCart";

export default function Box({ id, title, description, imgUrl, modalHref }) {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
    <div className="gallery-item">
        <a className="gallery-link" data-toggle="modal" href={modalHref}>
        <div className="gallery-hover">
            <div className="gallery-hover-content"><i className="fa fa-plus fa-3x"></i></div>
        </div>
            <img className="img-fluid" src={imgUrl} alt=""/></a>
        <div className="gallery-caption">
            <div className="gallery-caption-heading">{title}</div>
            <div className="gallery-caption-subheading text-muted">{description}</div>
        </div>
        <div className="btn-action"></div>
        <button className="btn btn-outline-dark" data-toggle="modal" data-target={'#modal'+id}><i className="fa fa-shopping-cart"></i> Ajouter au panier</button>
        <ModalConfirmCart id={'modal'+id} title={title} imgUrl={imgUrl} />
    </div>
    </div>    
  );
}