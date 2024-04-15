// DogPage.js
import React from "react";
import styles from "./DogPage.module.css";
import dogImage1 from "./images/dog1.jpg";
import dogImage2 from "./images/dog2.jpg";

const DogPage = () => {
  return (
    <div className={`${styles.container} container py-4`} style={{ backgroundColor: '#c2b280', color: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
      <h2 className="mb-4">Dog Page</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.
          </p>
        </div>
        <div className="col-md-6">
          <img src={dogImage1} alt="Dog" className="img-fluid rounded" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={dogImage2} alt="Dog" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <p>
            There are many different breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p>
            Dogs are highly social animals and this similarity in their overall behavioral pattern accounts for their trainability, playfulness, and ability to fit into human households and social situations. This has earned dogs a unique position in the realm of interspecies relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DogPage;
