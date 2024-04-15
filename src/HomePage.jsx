import React from "react";
import "./HomePage.css";
import lionImage from "./images/lion1.jpg";
import giraffeImage from "./images/giraffe.jpg";
import elephantImage from "./images/elephant.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
          <h1 className="display-4 mt-5 mb-4">
            Welcome to my Favorite Animals
          </h1>
          <p className="lead mb-5">
            Click around and discover my favorite animals! (The ones on the home
            page don't have to be my favorite animals)
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src={lionImage} alt="Lion" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src={giraffeImage}
                alt="Giraffe"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src={elephantImage}
                alt="Elephant"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
