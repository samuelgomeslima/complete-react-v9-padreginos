import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

/* eslint-disable no-undef */
const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="The Pepperoni Pizza" description="A delicious pizza topped with pepperoni slices and mozzarella cheese." />
      <Pizza name="Americano Pizza" description="A classic pizza with tomato sauce, mozzarella cheese, and a variety of toppings." />
      <Pizza name="Margherita Pizza" description="A simple yet flavorful pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil." />
      <Pizza name="Hawaiian Pizza" description="A tropical twist on pizza with ham, pineapple, and mozzarella cheese." />
      <Pizza name="Veggie Pizza" description="A healthy option loaded with fresh vegetables like bell peppers, onions, mushrooms, and olives." />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
