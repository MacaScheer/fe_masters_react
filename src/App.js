import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Benny",
      animal: "Dog",
      breed: "Staffordshire Terrier"
    }),
    React.createElement(Pet, {
      name: "Lulu",
      animal: "Dog",
      breed: "Labrador"
    }),
    React.createElement(Pet, {
      name: "Squeeks",
      animal: "Mouse",
      breed: "lil white paws"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
