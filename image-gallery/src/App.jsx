import React from "react";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Header />
          <Container />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
