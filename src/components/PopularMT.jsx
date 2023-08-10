import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import SlideCard from "./SlideCard";


const data = [
  {
    src: "https://images.pexels.com/photos/12185637/pexels-photo-12185637.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Buenos Aires City",
    country: "Argentina",
    key: 1,
  },
  {
    src: "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=600",
    city: "París",
    country: "France",
    key: 2,
  },
  {
    src: "https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Rome",
    country: "Italy",
    key: 3,
  },
  {
    src: "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Tokyo",
    country: "Japan",
    key: 4,
  },
  {
    src: "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Rio de Janeiro",
    country: "Brazil",
    key: 5,
  },
  {
    src: "https://images.pexels.com/photos/16840671/pexels-photo-16840671/free-photo-of-mar-hombre-playa-vacaciones.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Cape Town",
    country: "South Africa",
    key: 6,
  },
  {
    src: "https://images.pexels.com/photos/2649167/pexels-photo-2649167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    city: "Bangkok",
    country: "Thailand",
    key: 7,
  },
  {
    src: "https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Sydney",
    country: "Australia",
    key: 8,
  },
  {
    src: "https://images.pexels.com/photos/16387687/pexels-photo-16387687/free-photo-of-naturaleza-flores-verano-edificio.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Istanbul",
    country: "Turkey",
    key: 9,
  },
  {
    src: "https://images.pexels.com/photos/17577770/pexels-photo-17577770/free-photo-of-blanco-y-negro-ciudad-punto-de-referencia-panorama-urbano.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "New York City",
    country: "Usa",
    key: 10,
  },
  {
    src: "https://images.pexels.com/photos/13081002/pexels-photo-13081002.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Barcelona",
    country: "Spain",
    key: 11,
  },
  {
    src: "https://images.pexels.com/photos/15127213/pexels-photo-15127213/free-photo-of-puesta-de-sol-punto-de-referencia-nubes-edificio.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Cairo",
    country: "Egypt",
    key: 12,
  },
];

// Separo data en grupos de cuatro
const groupsMaker = (array, size) => {
  const groups = [];

  array.forEach((_, i) => {
    if (i % size === 0) {
      const group = {
        id: groups.length + 1, // Generar un ID único para el grupo
        items: array.slice(i, i + size), // Contenido del grupo
      };
      groups.push(group);
    }
  });

  return groups;
};

const groupedData = groupsMaker(data, 4);

const PopularMT = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === groupedData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? groupedData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = groupedData.map((item) => {
    // console.log(item)
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.id}>
              <SlideCard cities={item.items}/>
          </CarouselItem>

        );
      });
  return (
    <div className="vh-100 my-5">
      <h2 className="text-center">Popular Mytineraries</h2>
      <Carousel
        dark
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        // {...args}
      >
        <CarouselIndicators
          items={groupedData}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          className="ms-sm-5 ps-sm-5"
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className="me-sm-5 pe-sm-5"
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default PopularMT;
