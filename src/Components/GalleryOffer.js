import React from "react";
import Box from "./Box";
import ModalOffer from "./ModalOffer";

export default function GalleryOffer({ id, title, subtitle }) {
  return (
    <div className="container page-section section-galery" id={id}>
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{title}</h2>
          <h3 className="section-subheading text-muted">{subtitle}</h3>
        </div>
        <div className="row">
          <Box modalHref="#modalVin1" title="Vin1" description="Prix" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin2" title="Vin2" description="Prix" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin3" title="Vin3" description="Prix" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin4" title="Vin4" description="Prix" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin5" title="Vin5" description="Prix" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin6" title="Vin6" description="Prix" imgUrl="./assets/img/raisin_field.jpg" />

          <ModalOffer id="modalVin1" title="Vin1" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalOffer id="modalVin2" title="Vin2" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalOffer id="modalVin3" title="Vin3" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalOffer id="modalVin4" title="Vin4" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalOffer id="modalVin5" title="Vin5" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalOffer id="modalVin6" title="Vin6" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
        </div>
    </div>
  );
}
