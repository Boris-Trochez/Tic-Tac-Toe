import React from "react";

import "./styles/Circle.scss";

const Circle = () => {
  return (
    <>
      <div className="circle" onClick={() => console.log("YES! circle")}></div>
    </>
  );
};

export default Circle;
