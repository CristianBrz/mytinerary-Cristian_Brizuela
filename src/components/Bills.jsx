import React from "react";

const Bills = ({ price }) => {
  const className = new Array(5).fill("px-1 fs-3 bi bi-cash");
  // const classBase = "px-1 fs-3 bi bi-cash";
  // console.log(className);

  className.forEach((e, index, array) => {
    array[index] =
      index + 1 <= price
        ? "text-success " + array[index]
        : "text-gray " + array[index];
  });
  // console.log(className);

  return (
    <div className="d-flex align-items-center">
      <span className="me-2">Price: </span>
      {/* {console.log(className)} */}
      {
        className.map((className, index) => (
          <i key={index} className={className}></i>
        ))
      }
    </div>
  );
};

export default Bills;
