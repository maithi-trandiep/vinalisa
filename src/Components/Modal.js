import React from "react";

export default function Modal ({ id, title, intro, imgUrl1, imgUrl2, description, charac1, charac2, charac3 }) {
    return (
        <div className="gallery-modal modal fade" id={id} tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src={imgUrl1} /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{title}</h2>
                                    <p className="item-intro text-muted">{intro}</p>
                                    <img className="img-fluid d-block mx-auto" src={imgUrl2} alt="" />
                                    <p>{description}</p>
                                    <ul className="list-inline">
                                        <li>{charac1}</li>
                                        <li>{charac2}</li>
                                        <li>{charac3}</li>
                                    </ul>
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