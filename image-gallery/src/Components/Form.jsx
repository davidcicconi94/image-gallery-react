import React from "react";
import PropTypes from "prop-types";

const Form = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-group">
        <label className="w-50">
          <input
            type="text"
            name="inputText"
            className="form-control mt-2  "
            placeholder="What are you looking for?..."
          />
        </label>
        <button type="submit" className="btn btn-secondary m-1 p-2 ">
          Search
        </button>
      </form>
      <hr />
    </div>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
