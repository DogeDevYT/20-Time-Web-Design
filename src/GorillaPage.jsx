import React from "react";
import gorillaImage1 from "./images/gorilla1.jpg";
import gorillaImage2 from "./images/gorilla2.jpg";

const GorillaPage = () => {
  return (
    <div
      className="container py-4"
      style={{
        backgroundColor: "#689f38",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2 className="mb-4">Gorilla Page</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            Gorillas are ground-dwelling, predominantly herbivorous apes that
            inhabit the forests of central Sub-Saharan Africa. The DNA of
            gorillas is highly similar to that of humans, from 95–99% depending
            on what is counted, and they are the next closest living relatives
            to humans after the chimpanzees and bonobos.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={gorillaImage1}
            alt="Gorilla"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 order-md-2"></div>
        <div className="col-md-6 order-md-1">
          <p>
            Gorillas are divided into two species and either four or five
            subspecies. The mountain gorilla, the eastern lowland gorilla, and
            the western lowland gorilla are critically endangered.
          </p>
          <img
            src={gorillaImage2}
            alt="Gorilla"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p>
            Gorillas are peaceful animals and are mostly herbivorous. Their diet
            primarily consists of leaves, stems, bamboo shoots, and fruits.
            Gorillas rarely drink water, as they get most of the moisture they
            need from their vegetarian diet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GorillaPage;
