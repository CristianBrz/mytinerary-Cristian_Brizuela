import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

const SlideCard = ({ cities }) => {
  // console.log(cities)
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4 py-2 mb-5 mx-sm-5 px-5">
        {cities.map((city) => (
          <div className="col" key={city.key}>
            <Card inverse>
              <CardImg
                alt={city.city}
                src={city.src}
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay className="d-flex justify-content-center m-0 p-0" style={{height: 70}}>
                <div className="bg-black bg-opacity-25 bg-blur text-center p-2 w-100">
                  <CardText className="fs-5 p-0 m-0" children={city.city} />
                  <CardText children={city.country} />
                </div>
              </CardImgOverlay>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideCard;
