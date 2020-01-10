const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
