import React, { Component } from 'react';
import NavMenu from './NavMenu';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Shipping extends Component {
    constructor (props) {
        super (props);
        
        this.state = {
            LNameInvoice: '',
            FNameInvoice: '',
            companyInvoice: '',
            addressInvoice: '',
            address2Invoice: '',
            cityInvoice: '',
            zipInvoice: '',
            telInvoice: '',

            LNameShipping: '',
            FNameShipping: '',
            companyShipping: '',
            addressShipping: '',
            address2Shipping: '',
            cityShipping: '',
            zipShipping: '',
            telShipping: '',
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        
        console.log(this.state)
    }

    render() {
        const listItems = this.props.shippingItems.map((item) => {
            return (
                <tr key={item.id}>
                    <td className="product-col">
                        <figure className="product-image-container">
                            <a href="#" className="product-image">
                                <img src={item.imgUrl} alt="product" />
                            </a>
                        </figure>
                        <div>
                            <h2 className="product-title">
                                <a href="#">{item.title}</a>
                            </h2>
                            <span className="product-qty">{item.quantity}</span>
                        </div>
                    </td>
                    <td className="price-col">€{item.price}</td>
                </tr>
            )
        });

        return (
            <div className="Shipping">
                <header className="nav-menu">          
                <NavMenu />
                </header>
                <main className="main">
                    <div className="section-breadcrumb">
                        <div className="container">
                            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/home">Accueil</Link></li>
                                    <li className="breadcrumb-item"><Link to="/panier">Panier</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Livraison</li>
                                </ol>
                            </div>
                            </nav>
                        </div>
                    </div>

                    <div className="section-shipping">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <div className="accordion" id="accordionAddress">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Adresse de facturation
                                        </button>
                                    </h2>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionAddress">
                                    <div className="card-body">
                                    <form className="form-invoice" id="form-invoice">
                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="LNameInvoice">Nom</label>
                                                <input type="text" className="form-control" name="LNameInvoice" placeholder="Nom *" value={this.state.LNameInvoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="FNameInvoice">Prénom</label>
                                                <input type="text" className="form-control" name="FNameInvoice" placeholder="Prénom *" value={this.state.FNameInvoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8"> 
                                                <label htmlFor="companyInvoice">Entreprise</label>
                                                <input type="text" className="form-control" name="companyInvoice" placeholder="Entreprise" value={this.state.companyInvoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="addressInvoice">Adresse</label>
                                                <input type="text" className="form-control" name="addressInvoice" placeholder="1 rue de Paris" value={this.state.addressInvoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="address2Invoice">Adresse 2</label>
                                                <input type="text" className="form-control" name="address2Invoice" placeholder="Appartement, Batiment, Etage" value={this.state.address2Invoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="cityInvoice">Ville</label>
                                                <input type="text" className="form-control" name="cityInvoice" placeholder="Ville *" value={this.state.cityInvoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="zipInvoice">Code postal</label>
                                                <input type="text" className="form-control" name="zipInvoice" placeholder="Code postal *" value={this.state.zipInvoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="telInvoice">Téléphone</label>
                                                <input type="tel" className="form-control" name="telInvoice" placeholder="Téléphone *" value={this.state.telInvoice} onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Adresse de livraison (si différente)
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionAddress">
                                    <div className="card-body">
                                    <form className="form-ship" id="form-ship">
                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="LNameShipping">Nom</label>
                                                <input type="text" className="form-control" name="LNameShipping" placeholder="Nom *" value={this.state.LNameShipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="FNameShipping">Prénom</label>
                                                <input type="text" className="form-control" name="FNameShipping" placeholder="Prénom *" value={this.state.FNameShipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8"> 
                                                <label htmlFor="companyShipping">Entreprise</label>
                                                <input type="text" className="form-control" name="companyShipping" placeholder="Entreprise" value={this.state.companyShipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="addressShipping">Adresse</label>
                                                <input type="text" className="form-control" name="addressShipping" placeholder="1 rue de Paris" value={this.state.addressShipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="address2Shipping">Adresse 2</label>
                                                <input type="text" className="form-control" name="address2Shipping" placeholder="Appartement, Batiment, Etage" value={this.state.address2Shipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="cityShipping">Ville</label>
                                                <input type="text" className="form-control" name="cityShipping" placeholder="Ville *" value={this.state.cityShipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="zipShipping">Code postal</label>
                                                <input type="text" className="form-control" name="zipShipping" placeholder="Code postal *" value={this.state.zipShipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                                <label htmlFor="telShipping">Téléphone</label>
                                                <input type="tel" className="form-control" name="telShipping" placeholder="Téléphone *" value={this.state.telShipping} onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="order-summary">
                                    <h3>Sommaire</h3>
                                    <h4>
                                        <a data-toggle="collapse" href="#order-cart-section" className="accordion collapsed" id="accordionSummary" role="button" aria-expanded="false" aria-controls="order-cart-section">{this.props.shippingItems.length} produit(s) dans le panier</a>
                                    </h4>
                                    <div className="collapse" id="order-cart-section">
                                        <table className="table table-mini-cart">
                                            <tbody>
                                                {listItems}
                                            </tbody>    
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>
                        
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="checkout-action">
                                <button onClick={this.submitHandler} className="btn btn-primary btn-md btn-confirm text-uppercase" id="sendAdressButton">Confirmer</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      shippingItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Shipping)
  