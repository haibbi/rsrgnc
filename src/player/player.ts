import { useState } from "react";
import constate from "constate";

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + Math.random());
  return {count, increment};
}

const [CounterProvider, useCounterContext] = constate(useCounter);

export {
  CounterProvider,
  useCounterContext
}
