import React from "react";

import "./styles/X.scss";

const X = () => {
  return (
    <>
      <div className="leftX" onClick={() => console.log("YES! X")}></div>;
      <div className="rightX"></div>
    </>
  );
};

export default X;
