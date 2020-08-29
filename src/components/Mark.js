import React from "react";

import Circle from "./Circle";
import X from "./X";

const Figure = ({ mark }) => {
  if (mark === "o") {
    return <Circle />;
  } else {
    return <X />;
  }
};

export default Figure;
