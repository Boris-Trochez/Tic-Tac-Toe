import React from "react";

import Circle from "./Circle";
import X from "./X";

const Figure = ({ figure: { picture } }) => {
  if (picture === "o") {
    return <Circle />;
  } else {
    return <X />;
  }
};

export default Figure;
