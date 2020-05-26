import React from "react";

export default function ModalOffer ({ id, title, intro, imgUrl, descField, descWine, descProducer }) {
    return (
        <div className="gallery-modal modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="./assets/img/close-icon.svg" alt="offer" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{title}</h2>
                                    <p className="item-intro text-muted">{intro}</p>
                                    <img className="img-fluid d-block mx-auto" src={imgUrl} alt="offer-image" />
                                    <p>{descField}</p>
                                    <p>{descWine}</p>
                                    <p>{descProducer}</p>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button"><i className="fa fa-times mr-1"></i>Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}