import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link as Anchor} from "react-router-dom";
import { Card, CardImg, CardText, FormGroup, Input, Label } from "reactstrap";

const Cities = () => {
  const params = useParams();
  // console.log(params);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/cities")
      .then((res) => setCities(res.data.response));
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        className="w-75 mt-5 pt-5 pb-3"
        src="./H.jpg"
        alt=""
        style={{
          height: "350px",
        }}
      />
      <FormGroup floating>
        <Input
          className="rounded-pill text-center"
          id="search"
          name="search"
          placeholder="search"
          type="search"
        />
        <Label for="search" className="px-3">
          <i className="bi bi-search px-2"></i>Search city
        </Label>
      </FormGroup>
      <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
        {cities.map((city) => (
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
                {/* <CardText children={city.country} /> */}
                <Anchor
                  children="See More..."
                  className="btn btn-danger rounded-pill "
                  to={"/cities/" + city._id}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
