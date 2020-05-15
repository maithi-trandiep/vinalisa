import React from "react";
import Box from "./Box";

export default function Gallery({ id }) {
  return (
    <div className="container page-section section-galery" id={id}>
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Nos vins et vignobles</h2>
            <h3 className="section-subheading text-muted">Description</h3>
        </div>
        <div className="row">
            <Box title="Vin1" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box title="Vin2" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box title="Vin3" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box title="Vin4" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box title="Vignoble1" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box title="Vignoble2" description="Description" imgUrl="./assets/img/raisin_field.jpg" />     
        </div>
    </div>
  );
}
