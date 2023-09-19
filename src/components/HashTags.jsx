import React from "react";
import { Badge } from "reactstrap";

const color = [
  "primary",
  "success",
  "danger",
  "warning",
  "info",
  "secondary",
  "dark"
];

// const hashTags = ["#Hashtag1", "#Hashtag2", "#Hashtag3", "#Hashtag4", "#Hashtag5", "#Hashtag6"];

const HashTags = ({ hashTags }) => {
  // console.log(hashTags);
// const getRandomIndexColor = () => Math.floor(Math.random() * 7);

  return (
    <div>
      {hashTags.map((hashTag, index) => (
        <Badge
          key={index}
          className="mx-1"
          children={hashTag}
          color={color[index]}
          pill
        />
      ))}
    </div>
  );
};

export default HashTags;
