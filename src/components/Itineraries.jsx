import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import HashTags from "./HashTags";
import Bills from "./Bills";
const Itineraries = ({ itineraries }) => {
  // console.log(itineraries);

  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <div className="container">
        <Accordion open={open} toggle={toggle}>
          {itineraries.map((itinerary) => (
            <AccordionItem key={itinerary._id}>
              <AccordionHeader targetId={itinerary._id}>
                {itinerary?.name}
              </AccordionHeader>
              <AccordionBody accordionId={itinerary._id}>
                <div className="row m-0">
                  <figure className="col-12 col-sm-2 d-flex flex-column align-items-center">
                    <img
                      src={itinerary.userImg}
                      alt={itinerary.userImg + "image"}
                      style={{
                        height: 50,
                      }}
                    />
                    <span className="text-center">{itinerary.user}</span>
                  </figure>
                  <div className="col-12 col-sm-10 p-0">
                    <div className="row m-0">
                      <div className="col-12 col-lg-4 p-0">
                        <Bills price={itinerary.price} />
                      </div>
                      <div className="col-12 col-md-4 border">
                        <p className="border">Duration: {itinerary.duration} Hours</p>
                      </div>
                      <div className="col-12 col-md-4 border">
                        <p className="border">💗 {itinerary.likes}</p>
                      </div>

                      <div className="col-12">
                        <HashTags hashTags={itinerary.hashtags} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border">
                  <h5>Activities</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, praesentium beatae quis quidem nisi non
                    exercitationem minus consectetur voluptatem pariatur
                    doloribus commodi eos dicta facere animi consequuntur
                    accusamus reiciendis repellat voluptates mollitia. Sequi
                    officiis voluptatibus doloremque quos maiores nisi obcaecati
                    aut aperiam, cum quisquam iusto nihil at accusamus quod
                    explicabo.
                  </p>
                </div>

                <div className="border">
                  <h5>Coments</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, praesentium beatae quis quidem nisi non
                    exercitationem minus consectetur voluptatem pariatur
                    doloribus commodi eos dicta facere animi consequuntur
                    accusamus reiciendis repellat voluptates mollitia. Sequi
                    officiis voluptatibus doloremque quos maiores nisi obcaecati
                    aut aperiam, cum quisquam iusto nihil at accusamus quod
                    explicabo.
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Itineraries;
