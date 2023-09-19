import React, { useEffect } from "react";
import { CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import { Link as Anchor, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCityAsync } from "../redux/actions/citiesAction.js";
import Itineraries from "../components/Itineraries.jsx";

const CityDetail = () => {
  const { id } = useParams();
  const cityDet = useSelector((store) => store.cities.cityDetail);
  // console.log(cityDet)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCityAsync(id));
  }, []);

  return (
    <>
      {cityDet ? (
        <div>
          <div className="mb-5">
            <CardImg
              className="vh-100"
              alt={cityDet.city + "image"}
              src={cityDet.img}
              style={{
                height: 270,
              }}
              width="100%"
            />
            <CardImgOverlay className="d-flex align-items-end justify-content-center m-0 p-0">
              <div
                className="bg-dark bg-opacity-25 bg-blur p-2 text-white"
                style={{
                  maxWidth: 700,
                }}>
                <CardTitle className="text-center" tag="h1">
                  {cityDet.city + ", " + cityDet.country}
                  <CardImg
                    className=""
                    alt={cityDet.country + " flag"}
                    src={cityDet.flag}
                    style={{
                      height: 50,
                    }}
                    width="100%"
                  />
                </CardTitle>
                <CardText
                  className="text-justified"
                  children={cityDet.description}
                />
                <div className="d-flex justify-content-center gap-2">
                  <Anchor className="btn btn-danger rounded-pill" to="/cities/">
                    <i className="bi bi-caret-left"></i>
                    <span>Go Back</span>
                  </Anchor>
                  <a
                    className="btn btn-danger rounded-pill"
                    href="#itineraries">
                    <span>View Itineraries</span>
                    <i className="bi bi-caret-down"></i>
                  </a>
                </div>
              </div>
            </CardImgOverlay>
          </div>

          <div
            id="itineraries"
            className="d-flex flex-column align-items-center my-5 pt-5">
            <Itineraries itineraries={cityDet.itineraries} />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default CityDetail;
