import React, { Component } from "react";

class ModalConfirmCart extends Component {
  render() {
    return (
        <div className="confirmcart-modal modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p>Vous venez d'ajouter ce produit au panier :</p>
                <h4 id="productTitle">{this.props.title}</h4>
                <img src={this.props.imgUrl} id="productImage" width="100" height="100" alt="..."></img>
              </div>
              <div className="modal-footer" style={{display: "flex", justifyContent: "center"}}>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Continuer</button>
                <button type="button" className="btn btn-primary"><a href="/panier" style={{color: "white"}}>Aller au panier</a></button>
              </div>
            </div>
          </div>
        </div>
    ); 
  } 
}

export default ModalConfirmCart;