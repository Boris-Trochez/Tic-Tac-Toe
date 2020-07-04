import React, { useState } from "react";

import Figure from "./Figure";

import "./styles/Box.scss";

const Box = (props) => {
  const [stateBox1, setStateBox1] = useState({ state: false, picture: "" });
  const [stateBox2, setStateBox2] = useState({ state: false, picture: "" });
  const [stateBox3, setStateBox3] = useState({ state: false, picture: "" });
  const [stateBox4, setStateBox4] = useState({ state: false, picture: "" });
  const [stateBox5, setStateBox5] = useState({ state: false, picture: "" });
  const [stateBox6, setStateBox6] = useState({ state: false, picture: "" });
  const [stateBox7, setStateBox7] = useState({ state: false, picture: "" });
  const [stateBox8, setStateBox8] = useState({ state: false, picture: "" });
  const [stateBox9, setStateBox9] = useState({ state: false, picture: "" });
  const [figure, setFigure] = useState("o");

  const toggleFigure = () => {
    console.log(figure);
    if (figure === "o") {
      setFigure("x");
    } else {
      setFigure("o");
    }
  };

  const handleClick = (event) => {
    const value = event.target.value;

    toggleFigure();

    if (value === "1") {
      setStateBox1({ ...setStateBox1, state: true, picture: figure });
    } else if (value === "2") {
      setStateBox2({ ...setStateBox2, state: true, picture: figure });
    } else if (value === "3") {
      setStateBox3({ ...setStateBox3, state: true, picture: figure });
    } else if (value === "4") {
      setStateBox4({ ...setStateBox4, state: true, picture: figure });
    } else if (value === "5") {
      setStateBox5({ ...setStateBox5, state: true, picture: figure });
    } else if (value === "6") {
      setStateBox6({ ...setStateBox6, state: true, picture: figure });
    } else if (value === "7") {
      setStateBox7({ ...setStateBox7, state: true, picture: figure });
    } else if (value === "8") {
      setStateBox8({ ...setStateBox8, state: true, picture: figure });
    } else if (value === "9") {
      setStateBox9({ ...setStateBox9, state: true, picture: figure });
    }
  };

  return (
    <React.Fragment>
      <button className="game__box" value="1" onClick={handleClick}>
        {stateBox1.state && <Figure figure={stateBox1} />}
      </button>
      <button className="game__box" value="2" onClick={handleClick}>
        {stateBox2.state && <Figure figure={stateBox2} />}
      </button>
      <button className="game__box" value="3" onClick={handleClick}>
        {stateBox3.state && <Figure figure={stateBox3} />}
      </button>
      <button className="game__box" value="4" onClick={handleClick}>
        {stateBox4.state && <Figure figure={stateBox4} />}
      </button>
      <button className="game__box" value="5" onClick={handleClick}>
        {stateBox5.state && <Figure figure={stateBox5} />}
      </button>
      <button className="game__box" value="6" onClick={handleClick}>
        {stateBox6.state && <Figure figure={stateBox6} />}
      </button>
      <button className="game__box" value="7" onClick={handleClick}>
        {stateBox7.state && <Figure figure={stateBox7} />}
      </button>
      <button className="game__box" value="8" onClick={handleClick}>
        {stateBox8.state && <Figure figure={stateBox8} />}
      </button>
      <button className="game__box" value="9" onClick={handleClick}>
        {stateBox9.state && <Figure figure={stateBox9} />}
      </button>
    </React.Fragment>
  );
};

export default Box;

//https://stackoverrun.com/es/q/7358040  drawing a circle .. check this out!
/*  */
