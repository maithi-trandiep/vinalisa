import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, removeAll, addQuantity, subtractQuantity } from "../actions/cartActions";

import NavMenu from "./NavMenu";
import Counter from "./Counter";

class Cart extends Component {
  render() {
    let addedItems = this.props.items.length ?
      (  
        this.props.items.map((item, idx) => {
            return (
              <tr className="product-row" key={idx}>
                <td className="product-col">
                  <figure className="product-image-container">
                    <a href="#" className="product-image">
                      <img src={item.imgUrl} alt="product" />
                    </a>
                  </figure>
                  <h2 className="product-title">
                    <a href="#">{item.title}</a>
                  </h2>
                  <p className="h6">{item.date}</p>
                </td>
                <td>€{item.price}</td>
                <td>
                  <div className="quantity-counter">
                    <Counter decrementCounter={() => this.props.subtractQuant(item.id)} incrementCounter={() => this.props.addQuant(item.id)} />
                  </div>
                </td>
                <td>€{item.price * item.quantity}</td>
                <td><a onClick={() => this.props.removeItem(item.id)} title="Delete product" className="btn-delete"><span className="sr-only">Delete</span><i className="fa fa-trash fa-2x"></i></a></td>
              </tr>
            )
        })
      ) :  <tr><td colSpan="5"><p style={{textAlign: "center"}}>Panier vide.</p></td></tr>;
    
    return (
      <div className="Cart">          
        <NavMenu />
        <div className="section-cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="cart-table-container">
                  <table className="table table-cart">
                    <thead>
                      <tr>
                        <th className="product-col">Produit</th>
                        <th className="price-col">Prix</th>
                        <th className="qty-col">Quantité</th>
                        <th>Sous-total</th>
                        <th>Supprimer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addedItems}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td colSpan="6" className="clearfix">
                          <div className="float-left">
                            <Link to="/offres" className="btn btn-outline-secondary">Poursuivre vos achats</Link>
                          </div>

                          <div className="float-right">
                            <a onClick={() => this.props.removeAll()} className="btn btn-outline-secondary btn-clear-cart">Vider le panier</a>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="cart-summary">
                    <h3>Sommaire</h3>
                    <table className="table table-totals">
                      <tbody>
                        <tr>
                          <td>Sous-total</td>
                          <td>€{this.props.total}</td>
                        </tr>

                        <tr>
                          <td>TVA</td>
                          <td>€0.00</td>
                        </tr>

                        <tr>
                          <td>Frais de livraison</td>
                          <td>€0.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Total TTC</td>
                          <td>€{this.props.total}</td>
                        </tr>
                      </tfoot>
                    </table>

                    <div className="checkout-methods">
                      <Link to="/livraison" className="btn btn-block btn-primary btn-md text-uppercase">Passer commande</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      items: state.addedItems,
      total: state.total
  }
}

const mapDispatchToProps= (dispatch) => {
  return {
    addQuant: (id) => {dispatch(addQuantity(id))},
    subtractQuant: (id) => {dispatch(subtractQuantity(id))},
    removeAll: () => {dispatch(removeAll())},
    removeItem: (id) => {dispatch(removeItem(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
