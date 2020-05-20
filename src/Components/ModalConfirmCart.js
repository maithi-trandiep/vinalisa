import React from "react";

export default function ModalConfirmCart () {
    return (
        <div className="confirmcart-modal modal fade" id="modalConfirmCart" tabindex="-1" role="dialog" aria-labelledby="modalConfirmCart" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p>Vous venez d'ajouter ce produit au panier :</p>
                <h4 id="productTitle">Vin1</h4>
                <img src="./assets/img/raisin_field.jpg" id="productImage" width="100" height="100" alt="..."></img>
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