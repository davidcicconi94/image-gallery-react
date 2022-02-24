import React from "react";
import PropTypes from "prop-types";

export const Card = ({ img }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <img src={img} className="card-img-top" alt="..." />
        <img src={img} className="card-img-top" alt="..." />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};