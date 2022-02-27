/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "../Components/footer.css";

const Footer = () => {
  return (
    <div className="row">
      <div className="col">
        <footer className="py-4">
          <div className="container">
            <div className="row justify-content-between text-center">
              <div className="col-md-4 text-md-left">
                <h5>
                  <strong>David Cicconi</strong>
                </h5>
                <p>Frontend Developer Javascript</p>
              </div>
              <div className="col-md-4 text-md-right">
                <a
                  href="https://github.com/davidcicconi94"
                  className="fa fa-github"
                ></a>
                <a
                  href="https://www.linkedin.com/in/david-cicconi-dev/"
                  className="fa fa-linkedin"
                ></a>
                <a
                  href="https://twitter.com/DavisCicconi"
                  className="fa fa-twitter"
                ></a>
                <a
                  href="https://www.facebook.com/DavisCicconi.HH/"
                  className="fa fa-facebook"
                ></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
