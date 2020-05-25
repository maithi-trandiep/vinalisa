import React, { Component } from "react";
import History from "../history";


class ModalConfirmCart extends Component {
  handleClick() {
    History.push("/panier");
  }

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
                <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-primary" data-dismiss="modal">Aller au panier</button>
              </div>
            </div>
          </div>
        </div>
    ); 
  } 
}

export default ModalConfirmCart;