import React from "react";
import PropTypes from "prop-types";

export const Card = ({ img }) => {
  return (
    <div>
      <div
        className="card m-2"
        style={{
          width: "18rem",
          height: "100%",
        }}
      >
        <img src={img} className="card-img-top " alt="..." />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};
