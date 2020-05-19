import React from "react";

export default function GalleryVin ({ id, title, subtitle }) {
    return (
        <div className="container page-section section-galleryvin" id={id}>
            <div className="text-center">
                <h2 className="section-heading text-uppercase">{title}</h2>
                <h3 className="section-subheading text-muted">{subtitle}</h3>
            </div>
            <div className="row">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="./assets/img/raisin_field.jpg" className="d-block w-90" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Vin1</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="./assets/img/raisin_field.jpg" className="d-block w-90" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Vin2</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="./assets/img/raisin_field.jpg" className="d-block w-90" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Vin3</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}