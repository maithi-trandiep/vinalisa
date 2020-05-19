import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";
import './styles.css';

class Offer extends Component {
  render() {
    return (
      <div className="Offer">
        <Navbar />
        <Header />
        <div className="row">
          <Box modalHref="#modalVin1" title="Vin1" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin2" title="Vin2" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin3" title="Vin3" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin4" title="Vin4" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin5" title="Vin5" description="Description" imgUrl="./assets/img/raisin_field.jpg" />
          <Box modalHref="#modalVin6" title="Vin6" description="Description" imgUrl="./assets/img/raisin_field.jpg" />     

          <ModalGallery id="modalVin1" title="Vin1" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalGallery id="modalVin2" title="Vin2" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalGallery id="modalVin3" title="Vin3" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalGallery id="modalVin4" title="Vin4" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalGallery id="modalVin5" title="Vin5" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
          <ModalGallery id="modalVin6" title="Vin6" intro="Lorem ipsum dolor sit amet consectetur." imgUrl1="./assets/img/close-icon.svg" imgUrl2="./assets/img/raisin_field.jpg" description="Lorem ipsum dolor sit amet consectetur." charac1="abc" charac2="def" charac3="ghi" />
        </div> 
        <Footer />
      </div>
    );
  }
}

export default Offer;
