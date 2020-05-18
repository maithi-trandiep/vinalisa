import React from "react";

export default function ModalLogin () {
    return (
        <div className="login-modal modal fade" id="modalLogin" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                    <img src="/assets/img/account-image.jpg" className="account-image img-fluid" alt="img" />   
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
                                                    <div className ="col-sm-10">
                                                        <input type="email" className="form-control" id="loginEmail" placeholder="Entrer votre email" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="loginPw" className="col-sm-2 col-form-label">MDP</label>
                                                    <div className ="col-sm-10">
                                                        <input type="password" className="form-control" id="loginPw" placeholder="Entrer votre mot de passe" />
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
                                                    <label htmlFor="inputEmail4">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                    <label htmlFor="inputPassword4">MDP</label>
                                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Mot de passe" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress">Adresse</label>
                                                    <input type="text" className="form-control" id="inputAddress" placeholder="1 rue de Paris" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress2">Adresse 2</label>
                                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Appartement, Batiment, Etage" />
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-8">
                                                        <label htmlFor="inputCity">Ville</label>
                                                        <input type="text" className="form-control" id="inputCity" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="inputZip">Code postal</label>
                                                        <input type="text" className="form-control" id="inputZip" />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button type="submit" className="btn btn-primary">Créer mon compte</button>
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