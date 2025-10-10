const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatPrice(value) {
  if (value === undefined || value === null) {
    return undefined;
  }

  return currencyFormatter.format(value);
}

export function selectPizzaById(pizzaTypes, pizzaId) {
  return pizzaTypes.find((pizza) => pizza.id === pizzaId);
}

export async function fetchPizzaTypes(fetcher = fetch) {
  const response = await fetcher("/api/pizzas");

  if (!response || typeof response.json !== "function") {
    throw new Error("Unable to read pizza response");
  }

  return response.json();
}

export { currencyFormatter };
