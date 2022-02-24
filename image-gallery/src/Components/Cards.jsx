import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Cards = () => {
  const [images, setImages] = useState({
    urls: {
      regular: "",
    },
  });

  const request = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=PxsLFf0XS4iIa9ZKjLjtYRzK9zj7lL1ARYkbQ4exGW4"
    );

    const data = await res.json();

    console.log(data);
    setImages(data);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <Card img={images.urls.regular} />
    </div>
  );
};
