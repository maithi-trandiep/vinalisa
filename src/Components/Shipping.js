import React, { Component } from "react";
import NavMenu from "./NavMenu";

class Shipping extends Component {
    render() {
      return (
        <div className="Shipping">          
            <NavMenu />
            <div className="section-shipping">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="ad-facture">Adresse de facturation</h3>
                            <form className="form-shipping" action="#">
                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputLName">Nom</label>
                                            <input type="text" className="form-control" placeholder="Nom *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputFName">Prénom</label>
                                            <input type="text" className="form-control" placeholder="Prénom *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8"> 
                                            <label htmlFor="inputCompany">Entreprise</label>
                                            <input type="text" className="form-control" placeholder="Entreprise" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputAddress">Adresse</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1 rue de Paris" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputAddress2">Adresse 2</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Appartement, Batiment, Etage" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputCity">Ville</label>
                                            <input type="text" className="form-control" placeholder="Ville *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputZip">Code postal</label>
                                            <input type="text" className="form-control" placeholder="Code postal *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputTel">Téléphone</label>
                                            <input type="tel" className="form-control" placeholder="Téléphone *" required="" />
                                        </div>
                                    </div>
                                </form>

                            <h3 className="ad-delivery">Adresse de livraison</h3>
                            <form className="form-shipping" action="#">
                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputLName">Nom</label>
                                            <input type="text" className="form-control" placeholder="Nom *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputFName">Prénom</label>
                                            <input type="text" className="form-control" placeholder="Prénom *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8"> 
                                            <label htmlFor="inputCompany">Entreprise</label>
                                            <input type="text" className="form-control" placeholder="Entreprise" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputAddress">Adresse</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1 rue de Paris" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputAddress2">Adresse 2</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Appartement, Batiment, Etage" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputCity">Ville</label>
                                            <input type="text" className="form-control" placeholder="Ville *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputZip">Code postal</label>
                                            <input type="text" className="form-control" placeholder="Code postal *" required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-8">
                                            <label htmlFor="inputTel">Téléphone</label>
                                            <input type="tel" className="form-control" placeholder="Téléphone *" required="" />
                                        </div>
                                    </div>
                                </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="order-summary">
                                <h3>Sommaire</h3>
                                <h4>
                                    <a data-toggle="collapse" href="#order-cart-section" className="accordion" role="button" aria-expanded="false" aria-controls="order-cart-section">2 produits dans le panier</a>
                                </h4>
                            <div className="collapse" id="order-cart-section">
                                <table className="table table-mini-cart">
                                    <tbody>
                                        <tr>
                                            <td className="product-col">
                                                <figure className="product-image-container">
                                                    <a href="#" className="product-image">
                                                        <img src="./assets/img/raisin_field.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <div>
                                                    <h2 className="product-title">
                                                        <a href="#">Vin1</a>
                                                    </h2>
                                                    <span className="product-qty">Quantité: 1</span>
                                                </div>
                                            </td>
                                            <td className="price-col">€30.00</td>
                                        </tr>

                                        <tr>
                                            <td className="product-col">
                                                <figure className="product-image-container">
                                                    <a href="#" className="product-image">
                                                        <img src="./assets/img/raisin_field.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <div>
                                                    <h2 className="product-title">
                                                        <a href="#">Vin2</a>
                                                    </h2>
                                                    <span className="product-qty">Quantité: 1</span>
                                                </div>
                                            </td>
                                            <td className="price-col">€20.90</td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="action-shipping">
                                <a href="#" className="btn btn-primary float-left">Confirmer</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
      );
    }
  }
  
  export default Shipping;