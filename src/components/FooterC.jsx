import React from "react";

const FooterC = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around align-items-center py-3 bg-dark">
        <div className="col-md-4 d-flex align-items-center">
          <p className="mb-3 mb-md-0 text-bg-dark fs-2">AP MERN 07 TN</p>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-bg-dark fs-2"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </li>

          <li className="ms-3">
            <a
              className="text-bg-dark fs-2"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
          </li>

          <li className="ms-3">
            <a
              className="text-bg-dark fs-2"
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterC;
