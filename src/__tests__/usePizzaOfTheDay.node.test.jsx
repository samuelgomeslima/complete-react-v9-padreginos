import { expect, test, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import createFetchMock from 'vitest-fetch-mock';
import { usePizzaOfTheDay } from '../usePizzaOfTheDay.jsx';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description: "A delightful mix of spicy salami, fresh mozzarella, and tangy tomato sauce.",
  image: "/public/pizzas/calabrese.webp",
  size: { S: 12.25, M: 16.25, L: 20.5 },
};

test("gives null when first called", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});

test("to call the API and give back the pizza of the day", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  await waitFor(() => { expect(result.current).toEqual(testPizza) });
  expect(fetchMocker).toHaveBeenCalledWith("/api/pizza-of-the-day");
});