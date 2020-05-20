import React from "react";

export default function CarouselGallery({ imgUrl, title, description }) {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={imgUrl} className="d-block w-90 carousel-image" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
    </div>
    );
}