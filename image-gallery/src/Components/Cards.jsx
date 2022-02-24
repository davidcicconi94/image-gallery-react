import React, { useCallback, useEffect, useState } from "react";
import { Card } from "./Card";

export const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const request = useCallback(async () => {
    const key = "client_id=PxsLFf0XS4iIa9ZKjLjtYRzK9zj7lL1ARYkbQ4exGW4";

    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
    }

    const res = await fetch(route);

    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  }, [input]);

  useEffect(() => {
    request();
  }, [input, request]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return (
    <div>
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="form-group">
        <label>
          <input
            type="text"
            name="inputText"
            className="form-control w-100"
            placeholder="Search..."
          />
        </label>
      </form>
      <hr />

      <div className="row">
        {images.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
