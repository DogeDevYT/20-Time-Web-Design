// TigerPage.js
import React from "react";
import styles from "./TigerPage.module.css";
import tigerImage1 from "./images/tiger1.jpg";
import tigerImage2 from "./images/tiger2.jpg";

const TigerPage = () => {
  return (
    <div
      className={`${styles.container} container py-4`}
      style={{
        backgroundColor: "#cc6600",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2 className="mb-4">Tiger Page</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            Tigers are the largest members of the cat family and are renowned
            for their power and strength. They are native to Asia and can be
            found in various habitats including forests, grasslands, and swamps.
            Tigers are solitary animals and are known for their distinctive
            orange fur with black stripes.
          </p>
        </div>
        <div className="col-md-6">
          <img src={tigerImage1} alt="Tiger" className="img-fluid rounded" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={tigerImage2} alt="Tiger" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <p>
            Tigers are apex predators and sit at the top of the food chain. They
            primarily prey on large ungulates such as deer, wild boar, and
            buffalo. Tigers are incredibly strong and can take down prey that is
            many times their own size. They are also excellent swimmers and
            often hunt in water.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p>
            Unfortunately, tigers are classified as endangered species due to
            habitat loss, poaching, and human-wildlife conflict. Conservation
            efforts are underway to protect these magnificent creatures and
            their habitats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TigerPage;
