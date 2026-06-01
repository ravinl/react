const heading = React.createElement("h1", {id: "heading"}, "Namaste React Using React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "innerHeading"}, "Inner Heading")));

root.render(parent);