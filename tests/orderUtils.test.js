import { test } from "node:test";
import assert from "node:assert/strict";
import {
  fetchPizzaTypes,
  formatPrice,
  selectPizzaById,
} from "../src/orderUtils.js";

test("formatPrice returns formatted currency when value is provided", () => {
  assert.equal(formatPrice(12), "$12.00");
});

test("formatPrice returns undefined when value is missing", () => {
  assert.equal(formatPrice(undefined), undefined);
  assert.equal(formatPrice(null), undefined);
});

test("selectPizzaById returns the matching pizza", () => {
  const pizzas = [
    { id: "pepperoni", name: "Pepperoni", sizes: { M: 10 } },
    { id: "margherita", name: "Margherita", sizes: { M: 9 } },
  ];

  assert.deepEqual(selectPizzaById(pizzas, "margherita"), pizzas[1]);
  assert.equal(selectPizzaById(pizzas, "veggie"), undefined);
});

test("fetchPizzaTypes uses provided fetcher and returns data", async () => {
  const pizzas = [
    { id: "pepperoni", name: "Pepperoni", sizes: { M: 10 } },
  ];

  const calls = [];
  const mockFetcher = async (url) => {
    calls.push(url);

    return {
      json: async () => pizzas,
    };
  };

  const result = await fetchPizzaTypes(mockFetcher);

  assert.deepEqual(result, pizzas);
  assert.deepEqual(calls, ["/api/pizzas"]);
});

test("fetchPizzaTypes throws when response is malformed", async (t) => {
  await assert.rejects(() => fetchPizzaTypes(async () => ({})), {
    message: "Unable to read pizza response",
  });
});
