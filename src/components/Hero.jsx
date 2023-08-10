import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

const Hero = () => {
	return (
    <>
      <div>
        <CardImg
          className="vh-100"
          alt="Card image cap"
          src="https://picsum.photos/1600/900?traveller"
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
            <CardTitle tag="h3">Find the perfect destination</CardTitle>
            <CardText className="">
              Our app Will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </CardText>
            <div className="d-flex justify-content-center">
              <Button
                children="🌍🏙️ Discover the Magic of Cities! 🌆✨"
                className=" btn-success w-75 shadow-s rounded-pill"
              />
            </div>
          </div>
        </CardImgOverlay>
      </div>
    </>
  );
}

export default Hero