import React from "react";
import Hero from "../components/Hero";
import PopularMT from "../components/PopularMT";
import OffCanvasBy from "../components/OffCanvasBy";

const Home = () => {
  return (
    <>
			<OffCanvasBy></OffCanvasBy>
      <Hero></Hero>
      <PopularMT></PopularMT>
    </>
  );
};

export default Home;
