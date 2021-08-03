import React from "react";
import logo from "../images/logo.png";
import Twitter from "../images/twitter.svg";

const Footer = () => {
  return (
    <footer className="section section-gradient text-center">
      <div className="mb-3">
        <img
          alt="Sativa"
          width="70"
          src={logo}
          style={{ display: "inline-block" }}
        />
      </div>
      <div className="my-3">
        <p className="text-dark text-center">
          Somos naturaleza en transformación
          <br />
          <a href="mailto:hola.sativa.mx@gmail.com" className="text-dark">hola.sativa.mx@gmail.com</a>
        </p>
      </div>
      {/* <div className="d-flex mb-3 justify-content-center">
        <a
          target="_blank"
          className="footer-social-link"
          href="https://twitter.com/sativamx"
        >
          <img src={Twitter} />
        </a>
      </div> */}
      <p className="text-dark">© 2021 Sativa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
