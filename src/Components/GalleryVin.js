import React, { Component } from "react";
import CarouselItem from "./CarouselItem";

export default class GalleryVin extends Component {
    render() {
        let listItems = "";
        let carouselItems = "";
        if (this.props.dataItems) {
            listItems = this.props.dataItems.map((item, idx) => {
                return (<li key={idx} data-target={"#carouselCaptions"+this.props.id} data-slide-to={idx} className={idx === 0 ? "active" : ""}></li>)
            });
            carouselItems = this.props.dataItems.map((item, idx) => {
                return (<CarouselItem key={idx} title={item.title} description={item.description} imgUrl={item.imgUrl} isActive={idx === 0} />)
            });
        }

        return (
            <div className="container page-section section-galleryvin" id={this.props.id}>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Gallery</h2>
                    <h3 className="section-subheading text-muted">Nos vins</h3>
                </div>
                <div className="">
                    <div id={"carouselCaptions"+this.props.id} className="carousel carousel-gallery slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {listItems}
                        </ol>
                        <div className="carousel-inner">
                            {carouselItems}
                        </div>
                        <a className="carousel-control-prev" href={"#carouselCaptions"+this.props.id} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Précédent</span>
                        </a>
                        <a className="carousel-control-next" href={"#carouselCaptions"+this.props.id} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Suivant</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}