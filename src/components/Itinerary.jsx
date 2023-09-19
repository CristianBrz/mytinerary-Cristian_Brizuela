import React, { useEffect } from "react";
import HashTags from "./HashTags";
import Bills from "./Bills";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  loadItineraryAsync,
  resetItinerary,
} from "../redux/actions/itinerariesActions";

export const Itinerary = ({ itinerary }) => {
  return (
    <>
      {/* <h3>..............Recibe: {itineraryId}</h3>
      <h3>Pero rendediza: {itinerary?.name}</h3> */}


    </>
  );
};
