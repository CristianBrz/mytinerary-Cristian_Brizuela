import React from "react";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";


const BodyLay = ({ children }) => {
  return (
    <>
      <header className="">
        <NavbarC />
      </header>

      <main className="bg-">{children}</main>

      <footer className="bg-secondary m-0 p-0 w-100 h-100">
        <FooterC />
      </footer>
    </>
  );
};

export default BodyLay;
