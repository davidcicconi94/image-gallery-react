import React from "react";
import { FetchImg } from "../Logic/FetchImg";
import { Card } from "./Card";
import Form from "./Form";
import Loading from "./Loading";

export const Cards = () => {
  const [images, loading, handleSubmit] = FetchImg();

  return (
    <div>
      {/* Formulario */}
      <Form handleSubmit={handleSubmit} />

      {/* Loading */}
      {loading && <Loading />}

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
