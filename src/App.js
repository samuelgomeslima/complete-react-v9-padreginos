/* eslint-disable no-undef */
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description:
        "A delicious pizza topped with pepperoni slices and mozzarella cheese.",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description:
        "A classic pizza with tomato sauce, mozzarella cheese, and a variety of toppings.",
    }),
    React.createElement(Pizza, {
      name: "Margherita Pizza",
      description:
        "A simple yet flavorful pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian Pizza",
      description:
        "A tropical twist on pizza with ham, pineapple, and mozzarella cheese.",
    }),
    React.createElement(Pizza, {
      name: "Veggie Pizza",
      description:
        "A healthy option loaded with fresh vegetables like bell peppers, onions, mushrooms, and olives.",
    }),
  ]);
};

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
