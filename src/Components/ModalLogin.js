import React, { Component } from "react";

class ModalLogin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="modalLogin" className="login-modal modal fade" tabIndex="-1" role="dialog" aria-hidden="true" >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h3>Se connecter</h3>
                                        <p>Connectez-vous pour suivre les commandes,
                                        enregistrer la liste de produits préférés,
                                        recevoir de nombreuses offres.</p>
                                        <img src="/assets/img/login-image.png" className="account-image img-fluid" alt="img" />   
                                    </div>
                                    <div className="col-md-8">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-login-tab" data-toggle="tab" href="#nav-login" role="tab" aria-controls="nav-home" aria-selected="true">Connexion</a>
                                                <a className="nav-item nav-link" id="nav-signup-tab" data-toggle="tab" href="#nav-signup" role="tab" aria-controls="nav-signup" aria-selected="false">Créer un compte</a>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                                                <form className="login-form">
                                                    <div className="form-group row">
                                                        <label htmlFor="loginEmail" className="col-sm-2 col-form-label">Email</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="loginEmail" placeholder="Entrer votre email" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="loginPw" className="col-sm-2 col-form-label">Mot de passe</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control" id="loginPw" placeholder="Entrer votre mot de passe" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="rememberme" />
                                                        <label className="form-check-label" htmlFor="rememberme">Se souvenir de moi</label>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-primary" style={{marginTop: '20px', marginBottom: '20px'}}>Valider</button>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <a href="#">Mot de passe oublié ?</a>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
                                                <form className="signup-form">
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputFName">Nom</label>
                                                        <input type="text" className="form-control" id="inputFName" placeholder="Nom" required="" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputLName">Prénom</label>
                                                        <input type="text" className="form-control" id="inputLName" placeholder="Prénom" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail">Email</label>
                                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" required="" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword">Mot de passe</label>
                                                        <input type="password" className="form-control" id="inputPassword" placeholder="De 6 à 32 caractères" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputAddress">Adresse</label>
                                                        <input type="text" className="form-control" id="inputAddress" placeholder="1 rue de Paris" required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputAddress2">Adresse 2</label>
                                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Appartement, Batiment, Etage" required="" />
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-8">
                                                            <label htmlFor="inputCity">Ville</label>
                                                            <input type="text" className="form-control" id="inputCity" required="" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label htmlFor="inputZip">Code postal</label>
                                                            <input type="text" className="form-control" id="inputZip" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="emailOffer" />
                                                        <label className="form-check-label" htmlFor="emailOffer">Recevoir nos offres par email</label>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-primary" style={{marginTop: '20px', marginBottom: '20px'}}>Créer mon compte</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalLogin;