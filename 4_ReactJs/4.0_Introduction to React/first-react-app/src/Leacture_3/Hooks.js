import React, { useEffect, useRef, useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0);
  let normalCounter = 0;
  const refCounter = useRef(0);

  useEffect(() => {
    console.log(counter, "state counter");
    console.log(normalCounter, "normalCounter");
    console.log(refCounter.current, "RefCounter");
    return () => {
      console.log("unmountiong component");
    };
  });

  function increment() {
    setCounter(counter + 1);
    normalCounter = normalCounter + 1;
    refCounter.current = refCounter.current + 1;
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Value</button>
    </div>
  );
}

export default Hooks;
