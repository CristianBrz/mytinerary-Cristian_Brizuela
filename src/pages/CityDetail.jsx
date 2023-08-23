import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link as Anchor, useParams } from "react-router-dom";
import { server } from "../utils/axios.js";


const CityDetail = () => {
  const { id } = useParams();
  // console.log("El id es: " + id)
  const [city, setCity] = useState({});
  // console.log(city)

  useEffect(() => {
    server.get("/cities/" + id)
      .then((res) => setCity(res.data.response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div>
        <CardImg
          className="vh-100"
          alt={city.city + "image"}
          src={city.img}
          style={{
            height: 270,
          }}
          width="100%"
        />
        <CardImgOverlay className="d-flex align-items-end justify-content-center m-0 p-0">
          <div
            className="bg-dark bg-opacity-25 bg-blur p-1 text-white"
            style={{
              maxWidth: 700,
            }}>
            <CardTitle className="text-center" tag="h1">
              {city.city + ", " + city.country}
              <CardImg
                className=""
                alt=""
                src={city.flag}
                style={{
                  height: 50,

                }}
                width="100%"
              />
            </CardTitle>
            <CardText children={city.description} />
            <div className="d-flex justify-content-center">
              <Anchor
                children="Go Back"
                className="btn btn-success shadow-s rounded-pill"
                to=""
              />
            </div>
          </div>
        </CardImgOverlay>
      </div>
      <CardImg
        className="vh-100"
        alt=""
        src="../117602.jpg"
        style={{
          height: 270,
        }}
        width="100%"
      />
    </div>
  );
};

export default CityDetail;
