import { useCallback, useEffect, useState } from "react";

export const FetchImg = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, [input]);

  useEffect(() => {
    request();
  }, [input, request]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };
  return [images, loading, handleSubmit];
};
