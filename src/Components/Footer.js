import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Vinalisa 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-instagram"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Plan du site</a><a href="#!">Mentions légales</a></div>
                </div>
            </div>
        </footer>
    );
  }
}
