// LionPage.js
import React from "react";
import styles from "./LionPage.module.css";
import lionImage1 from "./images/lion1.jpg";
import lionImage2 from "./images/lion2.jpg";

const LionPage = () => {
  return (
    <div className={`${styles.container} container py-4`} style={{ backgroundColor: '#ffcc66', color: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
      <h2 className="mb-4">Lion Page</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            Lions are large carnivorous mammals that belong to the Felidae family. They are known for their majestic appearance and the "king of the jungle" status. Lions are primarily found in savannah and grassland habitats of Africa, although a small population exists in the Gir Forest of India.
          </p>
        </div>
        <div className="col-md-6">
          <img src={lionImage1} alt="Lion" className="img-fluid rounded" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={lionImage2} alt="Lion" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <p>
            Lions are social animals and live in groups called prides, typically consisting of related females, their offspring, and a few adult males. The size of a pride can vary from as few as 3 to as many as 30 individuals, depending on factors such as habitat and availability of prey.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p>
            Male lions are easily recognizable by their majestic manes, which serve both as protection and as a display of dominance. Lionesses, on the other hand, do not have manes and are responsible for hunting prey for the pride. Lions are apex predators and primarily prey on large herbivores such as zebras, wildebeests, and buffalo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LionPage;
