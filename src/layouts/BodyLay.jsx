import React from "react";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";

const BodyLay = ({ children }) => {
  return (
    <>
      <header className="bg-dark bg-opacity-25">
        <NavbarC />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <FooterC />
      </footer>
    </>
  );
};

export default BodyLay;
