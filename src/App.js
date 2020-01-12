import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Benny" animal="Dog" breed="Staffordshire Terrier" />
      <Pet name="Dang" animal="Cat" breed="Mixed" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
