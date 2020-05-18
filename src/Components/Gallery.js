import React from "react";
import Box from "./Box";
import ModalGallery from "./ModalGallery.js";

export default function Gallery({ id }) {
  return (
    <div className="container page-section section-galery" id={id}>
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Nos vins et vignobles</h2>
            <h3 className="section-subheading text-muted">Description</h3>
        </div>
        <div className="row">
            <Box modalHref="#modalVin1" title="Vin1" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box modalHref="#modalVin2" title="Vin2" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box modalHref="#modalVin3" title="Vin3" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box modalHref="#modalVin4" title="Vin4" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box modalHref="#modalVignoble1" title="Vignoble1" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
            <Box modalHref="#modalVignoble2" title="Vignoble2" description="Description" imgUrl="./assets/img/raisin_field.jpg" />     

            <ModalGallery id="modalVin1" title="Vin1" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
            <ModalGallery id="modalVin2" title="Vin1" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
            <ModalGallery id="modalVin3" title="Vin1" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
            <ModalGallery id="modalVin4" title="Vin1" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
            <ModalGallery id="modalVignoble1" title="Vignoble1" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
            <ModalGallery id="modalVignoble2" title="Vignoble2" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
        </div>
    </div>
  );
}
