const heading = React.createElement("h1", {id: "heading"}, "Namaste React Using React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "innerHeading"}, "Inner Heading")));
const sibling = React.createElement("div", {id: "parent2"}, [React.createElement("h1", {id: "h1"}, "Heading-1"), React.createElement("h2", {id: "h2"}, "Heading-2"), React.createElement("h3", {id: "h3"}, "Heading-3")])

root.render(sibling);
