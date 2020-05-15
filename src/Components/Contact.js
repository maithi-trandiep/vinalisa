import React from "react";

export default function Contact({ id }) {
  return (
    <div className="container page-section section-contact" id={id}>
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Contactez-nous</h2>
            <h3 className="section-subheading text-muted">Ecrire ici</h3>
        </div>
        <form id="contactForm" name="sentMessage" noValidate="novalidate">
            <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                    <div className="form-group">
                        <input className="form-control" id="nom" type="text" placeholder="Votre Nom *" required="required" data-validation-required-message="Vous n'avez pas encore entré votre nom." />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                        <input className="form-control" id="email" type="email" placeholder="Votre Email *" required="required" data-validation-required-message="Vous n'avez pas encore entré votre email." />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group mb-md-0">
                        <input className="form-control" id="phone" type="tel" placeholder="Votre Téléphone" />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group form-group-textarea mb-md-0">
                        <textarea className="form-control" id="message" placeholder="Votre Message *" required="required" data-validation-required-message="Vous n'avez pas encore entré votre message."></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div id="success"></div>
                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Envoyer Message</button>
        </div>
    </form>
    </div>
  );
}
