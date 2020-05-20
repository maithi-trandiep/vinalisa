import React from "react";

export default function CarouselItem({ title, description, imgUrl, isActive }) {
    return (
        <div className={isActive ? "carousel-item active" : "carousel-item"}>
            <img src={imgUrl} className="d-block w-90 carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}