import React, { Component } from "react";
import NavMenu from "./NavMenu";
import Counter from "./Counter";

class Cart extends Component {
  render() {
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="product-row">
                        <td className="product-col">
                          <figure className="product-image-container">
                            <a href="#" className="product-image">
                              <img src="assets/img/raisin_field.jpg" alt="product" />
                            </a>
                          </figure>
                          <h2 className="product-title">
                            <a href="#">Vin 1</a>
                          </h2>
                        </td>
                        <td>$17.90</td>
                        <td>
                          <div className="input-group  bootstrap-touchspin bootstrap-touchspin-injected">
                            <Counter />
                          </div>
                        </td>
                        <td>$17.90</td>
                      </tr>

                      <tr className="product-row">
                        <td className="product-col">
                          <figure className="product-image-container">
                            <a href="#" className="product-image">
                              <img src="assets/img/raisin_field.jpg" alt="product" />
                            </a>
                          </figure>
                          <h2 className="product-title">
                            <a href="#">Vin 2</a>
                          </h2>
                        </td>
                        <td>$8.90</td>
                        <td>
                          <div className="input-group  bootstrap-touchspin bootstrap-touchspin-injected">
                            <Counter />
                          </div>
                        </td>
                        <td>$8.90</td>
                      </tr>
                    </tbody>

                    <tfoot>
                      <tr>
                        <td colspan="4" className="clearfix">
                          <div className="float-left">
                            <a href="category.html" className="btn btn-outline-secondary">Continue Shopping</a>
                          </div>

                          <div className="float-right">
                            <a href="#" className="btn btn-outline-secondary btn-clear-cart">Clear Shopping Cart</a>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="cart-summary">
                    <h3>Summary</h3>
                    <table className="table table-totals">
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>$17.90</td>
                        </tr>

                        <tr>
                          <td>TVA</td>
                          <td>$0.00</td>
                        </tr>

                        <tr>
                          <td>Frais de livraison</td>
                          <td>$0.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Order Total</td>
                          <td>$17.90</td>
                        </tr>
                      </tfoot>
                    </table>

                    <div className="checkout-methods">
                      <a href="checkout-shipping.html" className="btn btn-block btn-sm btn-primary">Go to Checkout</a>
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

export default Cart;
