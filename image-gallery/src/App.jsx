import React from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Header />
          <Container />
        </div>
      </div>
    </div>
  );
};

export default App;
