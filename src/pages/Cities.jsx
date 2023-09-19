import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams, Link as Anchor } from "react-router-dom";
import { Card, CardImg, CardText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCity,
  loadCitiesAsync,
} from "../redux/actions/citiesAction.js";

const Cities = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const citiesStore = useSelector((store) => store.cities);
  
  // console.log(citiesStore);

  useEffect(() => {
    // axios("http://localhost:3000/api/cities").then((res) => {
    //   dispatch(loadCities(res.data.response));
    // });
    dispatch(loadCitiesAsync());
  }, []);

  const handleSearch = (e) => {
    // console.log(inputRef.current.value);
    const searchValue = inputRef.current.value.toLowerCase().trim();
    dispatch(filterByCity(searchValue));
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        className="w-50 mt-5 pt-5 pb-3"
        src="../H.jpg"
        alt=""
        style={{
          height: "350px",
        }}
      />

      <div className="container col-12 col-md-6">
        <form className="input-group mb-3">
          <input
            ref={inputRef}
            onInput={handleSearch}
            autoFocus
            type="text"
            className="form-control rounded-pill"
            aria-label="Sizing example input"
            placeholder="search"
          />
          {/* <Button className="rounded-circle ms-3">
            <i className="bi bi-search"></i>
          </Button> 
          <Button type="reset" className="rounded-circle ms-3">
            <i className="bi bi-arrow-clockwise"></i>
          </Button>*/}
        </form>
      </div>

      <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
        {citiesStore.filteredCities.map((city) => (
          <div className="col" key={city._id}>
            <Card>
              <CardImg
                alt={city.city + "image"}
                src={city.img}
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <div className="d-flex flex-column align-items-center m-2">
                <CardText children={city.city + ", " + city.country} />
                <Anchor
                  children="See More..."
                  className="btn btn-danger rounded-pill "
                  to={"/cities/" + city._id}
                />
              </div>
            </Card>
          </div>
        ))}
        {/* {citiesStore.filteredCities.map((city) => (
          <div className="col" key={city._id}>
            <Card key={city._id}>
              <CardImg
                alt={city.city + "image"}
                src={city.img}
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <div className="d-flex flex-column align-items-center m-2">
                <CardText children={city.city + ", " + city.country} />
                <Anchor
                  children="See More..."
                  className="btn btn-danger rounded-pill "
                  to={"/cities/" + city._id}
                />
              </div>
            </Card>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Cities;
