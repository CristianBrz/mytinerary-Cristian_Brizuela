import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import { Link as Anchor, NavLink } from "react-router-dom";


const Hero = () => {
	return (
    <>
      <div>
        <CardImg
          className="vh-100"
          alt="Card image cap"
          src="https://images.pexels.com/photos/1487770/pexels-photo-1487770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{
            height: 270,
          }}
          width="100%"
        />
        <CardImgOverlay className="d-flex align-items-end justify-content-center m-0 p-0">
          <div
            className="bg-dark bg-opacity-25 bg-blur mb-5 p-4 text-white"
            style={{
              maxWidth: 700,
            }}>
            <CardTitle className="text-center" tag="h1">
              MyTinerary
            </CardTitle>
            <CardTitle tag="h4">
              Find your perfect trip, designed by insiders who know and love
              their cities!
            </CardTitle>
            <CardText className="">
              Our app Will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </CardText>
            <div className="d-flex justify-content-center">
              <Anchor
                children="🌍🏙️ Discover the Magic of Cities! 🌆✨"
                className="btn btn-success w-75 shadow-s rounded-pill"
                to="/cities"
              />
            </div>
          </div>
        </CardImgOverlay>
      </div>
    </>
  );
}

export default Hero