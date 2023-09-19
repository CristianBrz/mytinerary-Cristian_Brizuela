import React from "react";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import { Outlet, ScrollRestoration } from "react-router-dom";


const BodyLay = () => {
  return (
    <>
      <header className="">
        <NavbarC />
      </header>

      <main className="">
        <Outlet/>
        <ScrollRestoration />
      </main>

      <footer className="bg-secondary m-0 p-0 w-100 h-100">
        <FooterC />
      </footer>
    </>
  );
};

export default BodyLay;
