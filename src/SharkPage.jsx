import React from "react";
import sharkImage1 from "./images/shark1.jpg";
import sharkImage2 from "./images/shark2.jpg";

const SharkPage = () => {
  return (
    <div className="container py-4" style={{ backgroundColor: '#3b5998', color: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
      <h2 className="mb-4">Shark Page</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. They are found in all seas and are common to depths of 2,000 meters (6,600 ft). They generally do not live in freshwater, although there are a few known exceptions, such as the bull shark and the river shark.
          </p>
        </div>
        <div className="col-md-6">
          <img src={sharkImage1} alt="Shark" className="img-fluid rounded" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={sharkImage2} alt="Shark" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <p>
            Sharks are known for their keen sense of smell, which enables them to detect blood in the water from miles away. They have multiple rows of teeth, with some species capable of growing thousands of teeth in their lifetime. Contrary to popular belief, most sharks are not dangerous to humans and typically do not view humans as prey. However, shark attacks can occur, often due to mistaken identity or territorial behavior.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p>
            There are over 500 species of sharks, ranging in size from the tiny dwarf lanternshark, which is only about 21 centimeters (8.3 inches) long, to the massive whale shark, which can grow up to 12 meters (40 feet) in length. Sharks play a crucial role in marine ecosystems as top predators, helping to maintain the balance of oceanic food chains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SharkPage;
